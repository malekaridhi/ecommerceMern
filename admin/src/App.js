import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />

        {/* <div className="others">
      otherpages
    </div> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/users" element={<UserList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
