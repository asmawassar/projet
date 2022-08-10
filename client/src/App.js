import Acceuil from "./pages/Acceuil/Acceuil";
import Add from "./pages/Add/Add";
import Change from "./pages/Change/Change";
import LogIn from "./pages/LogIn/Login";
import SignUp from "./pages/SignUp/SignUp";
import Dashboard from "./pages/Dashboard/Dashboard";
import Header from "./components/Header/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/Acceuil" element={<Acceuil />} />
        <Route path="/Add" element={<Add />} />
        <Route path="/Change" element={<Change />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
