import { Routes, Route } from "react-router-dom";
import Register from "./components/register";
import Login from "./components/login";
import Chart from "./components/chart";
import Home from "./components/home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/chart" element={<Chart />} />
    </Routes>
  );
}

export default App;