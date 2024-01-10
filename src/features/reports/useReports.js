import { useSearchParams } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import { getReports } from "../../services/apiReports";
import { PAGE_SIZE } from "../../utils/constants";

export function useReports() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // FILTER
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };

  // SORT
  const sortByRaw = searchParams.get("sortBy") || "reportNumber-asc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  // PAGINATION
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    data: { data: reports, count } = {},
    isPending,
    error,
  } = useQuery({
    queryKey: ["reports", filter, sortBy, page],
    queryFn: () => getReports({ filter, sortBy, page }),
  });

  // PRE-FETCHING
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["reports", filter, sortBy, page + 1],
      queryFn: () => getReports({ filter, sortBy, page: page + 1 }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["reports", filter, sortBy, page - 1],
      queryFn: () => getReports({ filter, sortBy, page: page - 1 }),
    });

  return { isPending, reports, error, count };
}
