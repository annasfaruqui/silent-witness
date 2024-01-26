import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { deleteReport as deleteReportApi } from "../../services/apiReports";

export function useDeleteReport() {
  const queryClient = useQueryClient();

  const { mutate: deleteReport, isPending: isDeleting } = useMutation({
    mutationFn: deleteReportApi,
    onSuccess: () => {
      toast.success("Report succssfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["reports"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { deleteReport, isDeleting };
}
