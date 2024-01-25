import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import SpinnerFullPage from "./SpinnerFullPage";
import { useUser } from "../features/authentication/useUser";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. Load the authenticated user
  const { isLoading, isAuthenticated } = useUser();

  // 2. If there is NO authenticated user, redirect to the /login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/home");
    },
    [navigate, isAuthenticated, isLoading]
  );

  // 3. While loading, show a spinner
  if (isLoading) return <SpinnerFullPage />;

  // 4. If there is a user, render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
