
import { BrowserRouter as Router,Route, Routes} from "react-router-dom"
import Pay from "./components/pay"
import Success from "./components/success";
import Home from "./pages/Home"
function App() {
  return (
   <>
   {/* <Router>
   <Routes>  
   
    <Route exact path="/pay" element={<Pay/>} />
    <Route exact path="/success" element={<Success/>} />
   </Routes>
   </Router> */}
  <Home/>
   
   </>
  );
}

export default App;
