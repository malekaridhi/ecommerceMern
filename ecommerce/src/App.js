
import { BrowserRouter as Router,Route, Routes} from "react-router-dom"
import Pay from "./components/pay"
import Success from "./components/success";
import Home from "./pages/Home"
import PoductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
function App() {
  return (
   <>
   {/* <Router>
   <Routes>  
   
    <Route exact path="/pay" element={<Pay/>} />
    <Route exact path="/success" element={<Success/>} />
   </Routes>
   </Router> */}
  {/* <Home/> */}
  <Home/>
   
   </>
  );
}

export default App;
