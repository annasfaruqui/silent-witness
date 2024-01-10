import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { signup as signupApi } from "../../services/apiAuth";

export function useSignup() {
  const { mutate: signup, isPending: isSigningUp } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      console.log(user);
      toast.success(
        "Account successfully created. Please verify the new account from the user's email."
      );
    },
    onError: () => {
      toast.error("There was an error signing up the user");
    },
  });

  return { signup, isSigningUp };
}
