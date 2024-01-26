import { useQuery } from "@tanstack/react-query";

import { getTodayReports } from "../../services/apiReports";

export function useTodayReports() {
  const {
    isPending,
    data: todayReports,
    error,
  } = useQuery({
    queryFn: getTodayReports,
    queryKey: ["today-reports"],
  });

  return { isPending, error, todayReports };
}
