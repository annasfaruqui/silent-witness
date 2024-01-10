import { useQuery } from "@tanstack/react-query";
import { getAllReports } from "../../services/apiReports";

export function useAllReports() {
  const {
    data: allReports,
    isPending,
    error,
  } = useQuery({
    queryKey: ["allReports"],
    queryFn: getAllReports,
  });

  return { allReports, isPending, error };
}
