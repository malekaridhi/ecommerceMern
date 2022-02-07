
import { BrowserRouter as Router,Route, Routes} from "react-router-dom"
import Pay from "./components/pay"
import Success from "./components/success";
function App() {
  return (
   <>
   <Router>
   <Routes>  
    <Route exact path="/pay" element={<Pay/>} />
    <Route exact path="/success" element={<Success/>} />
   </Routes>
   </Router>
   
   </>
  );
}

export default App;
