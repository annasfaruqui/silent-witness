import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getReport } from "../../services/apiReports";

export function useReport() {
  const { reportId } = useParams();

  const {
    isPending,
    data: report,
    error,
  } = useQuery({
    queryKey: ["report", reportId],
    queryFn: () => getReport(reportId),
  });

  return { isPending, report, error };
}
