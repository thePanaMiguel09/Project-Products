import "./App.css";
import Login from "./Loginn";
import SignUp from "./SignUp";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Define tus rutas */}
       
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
