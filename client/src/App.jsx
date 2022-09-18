import FirstPage from "./pages/FirstPage";
import Add from "./pages/Add/Add";
import Change from "./pages/Change/Change";
import LogIn from "./pages/LogIn/LogIn";
import SignUp from "./pages/SignUp/SignUp";
import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/profile/Profile";
import Admin from "./pages/profile/Admin";
import Barrages from "./pages/barrage/barrage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "./action/acces";
import { useState, useMemo } from "react";
function App() {
  const [user, userState] = useState("false");
  const [barrage, barrageState] = useState("false");
  const [indicateur, indicateurState] = useState("false");
  const [page, pageState] = useState("profile");

  const userValue = useMemo(
    () => ({
      user,
      userState,
      barrage,
      barrageState,
      indicateur,
      indicateurState,
      page,
      pageState,
    }),
    [
      user,
      userState,
      barrage,
      barrageState,
      indicateur,
      indicateurState,
      page,
      pageState,
    ]
  );

  return (
    <UserContext.Provider value={userValue}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/barrage" element={<Barrages />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin" element={<Admin />} />
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
