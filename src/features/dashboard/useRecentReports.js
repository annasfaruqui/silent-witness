import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";

import { getReportsAfterDate } from "../../services/apiReports";

export function useRecentReports() {
  const [searchParams] = useSearchParams();

  let numDays = !searchParams.get("previous")
    ? 7
    : Number(searchParams.get("previous"));

  const queryDate = subDays(new Date(), numDays).toISOString();

  const { isPending, data: reports } = useQuery({
    queryFn: () => getReportsAfterDate(queryDate),
    queryKey: ["reports", `last-${numDays}`],
  });

  return { isPending, reports, numDays };
}
