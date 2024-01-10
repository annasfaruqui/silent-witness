import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { updateReport as updateReportApi } from "../../services/apiReports";

export function useUpdateReport() {
  const queryClient = useQueryClient();

  const { mutate: updateReport, isPending: isUpdating } = useMutation({
    mutationFn: ({ reportData, id }) => updateReportApi(reportData, id),

    onSuccess: (data) => {
      toast.success(`Report #${data.id} successfully updated`);
      queryClient.invalidateQueries({ active: true });
    },

    onError: () => toast.error("There was an error while updating the report"),
  });

  return { updateReport, isUpdating };
}
