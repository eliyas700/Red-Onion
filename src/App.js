import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Pages/Header/Header";
import Homepage from "./Pages/Header/Homepage/Homepage";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>} />
        <Route path="/home" element={<Homepage></Homepage>} />
      </Routes>
    </div>
  );
}

export default App;
