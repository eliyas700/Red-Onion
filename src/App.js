import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Pages/Header/Header";
import Homepage from "./Pages/Header/Homepage/Homepage";
import Login from "./Pages/LogIn/Login";
import Signup from "./Pages/LogIn/SignUp/Signup";
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>} />
        <Route path="/home" element={<Homepage></Homepage>} />
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
      </Routes>
    </div>
  );
}

export default App;
