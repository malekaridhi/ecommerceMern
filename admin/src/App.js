import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewPrpduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import ProtectedRoutes from "./ProtectedRoutes";
function App() {
  const admin = JSON.parse(
    JSON.parse(localStorage.getItem("persist:root")).user
  ).currentUser.isAdmin;
  console.log(admin);
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
      </Routes>
            
          <Topbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/users" element={<UserList />} />
              <Route exact path="/users/:userId" element={<User />} />
              <Route exact path="/newUser" element={<NewUser />} />
              <Route exact path="/products" element={<ProductList />} />
              <Route exact path="/product/:productId" element={<Product />} />
              <Route exact path="/newProduct" element={<NewPrpduct />} />
              <Route exact path="/login" element={<Login />} />
            </Routes>
    </Router>
  //   <Router>
  //   <Routes>
  //     <Route exact path="/login" element={<Login />} />
  //   </Routes>
  //   {/* </Router>
  // <Router> */}
  //   {admin && (
  //     <>
  //       {/* <Topbar /> */}
  //       <div className="container">
  //         {/* <Sidebar /> */}
  //         <Routes>
  //           <Route exact path="/" element={<Home />} />
  //           <Route exact path="/users" element={<UserList />} />
  //           <Route exact path="/users/:userId" element={<User />} />
  //           <Route exact path="/newUser" element={<NewUser />} />
  //           <Route exact path="/products" element={<ProductList />} />
  //           <Route exact path="/product/:productId" element={<Product />} />
  //           <Route exact path="/newProduct" element={<NewPrpduct />} />
  //           <Route exact path="/login" element={<Login />} />
  //         </Routes>
  //       </div>
  //     </>
  //   )}
  // </Router>
    //   <Routes>
    //   <Route exact path="/login" element={<Login />} />

    //   <Router element={<ProtectedRoutes />}>
    //   <Topbar />
    //          <div className="container">
    //            <Sidebar />
    //            <Routes>
    //              <Route exact path="/" element={<Home />} />
    //              <Route exact path="/users" element={<UserList />} />
    //              <Route exact path="/users/:userId" element={<User />} />
    //             <Route exact path="/newUser" element={<NewUser />} />
    //             <Route exact path="/products" element={<ProductList />} />
    //             <Route exact path="/product/:productId" element={<Product />} />
    //             <Route exact path="/newProduct" element={<NewPrpduct />} />
    //             <Route exact path="/login" element={<Login />} />
    //           </Routes>
    //          </div>
    //   </Router>
    // </Routes>
  );
}

export default App;
