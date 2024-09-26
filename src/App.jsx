import "./App.css";
import Login from "./Pages/Login/Loginn";
import SignUp from "./Pages/SignUp/SignUp";
import Home from "./Pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Define tus rutas */}

        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;