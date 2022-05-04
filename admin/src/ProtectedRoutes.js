import { useNavigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const admin =  JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.isAdmin;
  // 
  return admin 
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  let navigate = useNavigate();
  return isAuth ? <Outlet /> : navigate('/');
};

export default ProtectedRoutes;