import { useState } from "react";
import styled from "styled-components";
import toast from "react-hot-toast";

import Button from "../ui/Button";

import supabase from "../services/supabase";
import { reports_data as reports } from "./data/data-reports";

async function deleteReports() {
  const { error } = await supabase.from("reports").delete().gt("id", 0);
  if (error) console.log(error.message);
}

async function createReports() {
  const { error } = await supabase.from("reports").insert(reports);
  if (error) console.log(error.message);
}

const StyledUploader = styled.div`
  margin-top: auto;
  background-color: var(--color-brand-100);
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function Uploader() {
  const [isLoading, setIsLoading] = useState(false);

  async function uploadReports() {
    setIsLoading(true);
    await deleteReports();
    await createReports();
    setIsLoading(false);
    toast.success("Sample reports uploaded successfully");
  }

  return (
    <StyledUploader>
      <h3>SAMPLE DATA</h3>

      <Button onClick={uploadReports} disabled={isLoading}>
        Upload Reports
      </Button>
    </StyledUploader>
  );
}

export default Uploader;
