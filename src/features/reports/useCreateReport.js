import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { createReport as createReportApi } from "../../services/apiReports";

export function useCreateReport() {
  const queryClient = useQueryClient();

  const { isPending: isCreating, mutate: createReport } = useMutation({
    mutationFn: createReportApi,
    onSuccess: () => {
      toast.success("Report successfully submitted");
      queryClient.invalidateQueries({ queryKey: ["reports"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createReport };
}
