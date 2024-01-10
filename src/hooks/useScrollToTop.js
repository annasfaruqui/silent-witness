import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function useScrollToTop() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);
}
