
import { BrowserRouter as Router,Route, Routes} from "react-router-dom"
import Pay from "./components/pay"
import Success from "./components/success";
import Home from "./pages/Home"
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart"
import Navbar from "./components/Navbar";
import Announcement from "./components/Announcement";
import Footer from "./components/Footer";
import NewsLetter from "./components/NewsLetter";
function App() {
  const user =true
  return (
   <>
   <Router>

   <Routes>  
    <Route exact path="/" element={<Home/>} />
    <Route exact path="/products/:category" element={<ProductList/>} />
    <Route exact path="/product/:id" element={<Product/>} />
    <Route exact path="/cart" element={<Cart/>} />
    <Route exact path="/sucess" element={<Success/>} />
    <Route exact path="/register" element={<Register/>} />
    <Route exact path="/login" element={<Login/>} />
   </Routes>
   </Router>
  
 
   
   </>
  );
}

export default App;
