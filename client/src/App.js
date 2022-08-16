import Acceuil from "./pages/Acceuil/Acceuil";
import Add from "./pages/Add/Add";
import Change from "./pages/Change/Change";
import LogIn from "./pages/LogIn/LogIn";
import SignUp from "./pages/SignUp/SignUp";
import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/profile/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Head from "./components/Header/Header";
import { UserContext } from "./action/acces";
import { useState, useMemo } from "react";
function App() {
  const [user, userState] = useState("false");
  const providerValue = useMemo(() => ({ user, userState }), [user, userState]);
  return (
    <UserContext.Provider value={providerValue}>
      <BrowserRouter>
        <Head />
        <Routes>
          <Route path="/" element={<Acceuil />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/Add" element={<Add />} />
          <Route path="/Change" element={<Change />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
