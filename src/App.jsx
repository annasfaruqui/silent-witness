import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

// Global styles
import GlobalStyles from "./styles/GlobalStyles";

// Layouts
import PublicPagesLayout from "./ui/PublicPagesLayout";
import SubLayout from "./ui/SubLayout";
import ProtectedRoute from "./ui/ProtectedRoute";
import AppLayout from "./ui/AppLayout";

// Public Pages
import HomePage from "./pages/public/HomePage";
import LoginPage from "./pages/public/LoginPage";
import AboutPage from "./pages/public/AboutPage";
import ReportFormPage from "./pages/public/ReportFormPage";
import PageNotFound from "./pages/public/PageNotFound";

// Secure Pages (Pages behind Login Page)
import DashboardPage from "./pages/secure/DashboardPage";
import ReportsPage from "./pages/secure/ReportsPage";
import ReportPage from "./pages/secure/ReportPage";
import UserProvisioningPage from "./pages/secure/UserProvisioningPage";
import AccountPage from "./pages/secure/AccountPage";

// Used to set up Cache behind the scenes
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<PublicPagesLayout />}>
            <Route index element={<Navigate replace to="/home" />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />

            <Route element={<SubLayout />}>
              <Route path="/about" element={<AboutPage />} />
              <Route path="/report-form" element={<ReportFormPage />} />
            </Route>
          </Route>

          <Route
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate replace to="/dashboard" />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/reports/:reportId" element={<ReportPage />} />
            <Route path="/users" element={<UserProvisioningPage />} />
            <Route path="/account" element={<AccountPage />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "18px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
            border: "1px solid var(--color-brand-600)",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
