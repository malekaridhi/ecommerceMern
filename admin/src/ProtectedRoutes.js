import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const admin =  JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser;
  return admin && admin.isAdmin;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;