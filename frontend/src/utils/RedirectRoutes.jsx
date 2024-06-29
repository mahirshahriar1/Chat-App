import { Outlet, Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const RedirectRoutes = () => {
  const { authUser } = useAuthContext();

  return authUser ? <Navigate to="/" /> : <Outlet />;
};

export default RedirectRoutes;
