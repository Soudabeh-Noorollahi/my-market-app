import { Navigate, Route, Routes } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import HomePage from "@/pages/HomePage";
import AdminPage from "@/pages/AdminPage";
import AuthPage from "@/pages/AuthPage";
import DashboardPage from "@/pages/DashboardPage";
import PageNotFound from "@/pages/404";
import Loader from "@/components/modules/Loader";
import PostDetailsPage from "@/pages/PostDetailsPage";
import { getProfile } from "@/services/user";

function Router() {
  const { data, isLoading, error } = useQuery(["profile"], getProfile);
  // console.log({ data, isLoading, error });

  if (isLoading) return <Loader />;

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/post/:id" element={<PostDetailsPage />} />
      <Route
        path="/dashboard"
        element={data ? <DashboardPage /> : <Navigate to="/auth" />}
      />
      <Route
        path="/auth"
        element={data ? <Navigate to="/dashboard" /> : <AuthPage />}
      />
      <Route
        path="/admin"
        element={
          data && data.data.role === "ADMIN" ? (
            <AdminPage />
          ) : (
            <Navigate to="/" />
          )
        }
      />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Router;
