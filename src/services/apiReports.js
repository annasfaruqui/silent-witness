import supabase, { supabaseUrl } from "./supabase";

import { PAGE_SIZE } from "../utils/constants";
import { getToday } from "../utils/helpers";

export async function getAllReports() {
  const { data, error } = await supabase.from("reports").select("*");

  if (error) {
    console.error(error);
    throw new Error("Reports could not be loaded");
  }

  return data;
}

export async function getReports({ filter, sortBy, page }) {
  let query = supabase.from("reports").select("*", { count: "exact" });

  // FILTER
  if (filter) query = query[filter.method || "eq"](filter.field, filter.value);

  // SORT
  if (sortBy.field === "reportNumber") sortBy.field = "id";
  // if (sortBy.field === "reportDate") sortBy.field = "created_at";

  if (sortBy)
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === "asc",
    });

  // PAGINATION
  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;

    query = query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) {
    console.error(error);
    throw new Error("Reports could not be loaded");
  }

  return { data, count };
}

export async function getReport(id) {
  const { data, error } = await supabase
    .from("reports")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Report not found");
  }

  return data;
}

export async function createReport(newReport) {
  const images = newReport.images;
  const randomValue = Math.random();

  const imagesNames = images.map((image) =>
    `${randomValue}-${image.name}`.replaceAll("/", "").replaceAll(" ", "-")
  );

  const imagesPaths = imagesNames.map(
    (el) => `${supabaseUrl}/storage/v1/object/public/reports-images/${el}`
  );

  const { data, error } = await supabase
    .from("reports")
    .insert([{ ...newReport, images: [...imagesPaths] }])
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Report could not be submitted");
  }

  // 2. Upload all images
  images.forEach(async (image) => {
    const { error: storageError } = await supabase.storage
      .from("reports-images")
      .upload(
        `${randomValue}-${image.name}`.replaceAll("/", "").replaceAll(" ", "-"),
        image
      );

    // 3. Delete the report IF there was an error uploading image
    if (storageError) {
      await supabase.from("reports").delete().eq("id", data.id);

      console.error(storageError);
      throw new Error(
        "Incident images could not be uploaded and the report was not created"
      );
    }
  });

  return data;
}

export async function updateReport(reportData, id) {
  const { data, error } = await supabase
    .from("reports")
    .update({ ...reportData })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Report could not be updated");
  }

  return data;
}

export async function deleteReport(id) {
  const { data, error } = await supabase.from("reports").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Report could not be deleted");
  }

  return data;
}

export async function getTodayReports() {
  const { data, error } = await supabase
    .from("reports")
    .select("*")
    .eq("reportDate", `${getToday()}`)
    .order("created_at");

  if (error) {
    console.error(error);
    throw new Error("Reports could not get loaded");
  }
  return data;
}

export async function getReportsAfterDate(date) {
  let query = supabase.from("reports");

  if (date === "all-time") query = query.select("*");

  if (date !== "all-time")
    query = query
      .select("*")
      .gte("created_at", date)
      .lte("created_at", getToday({ end: true }));

  const { data, error } = await query;

  if (error) {
    console.error(error);
    throw new Error("Reports could not get loaded");
  }

  return data;
}
