import { getkey } from "../../action/acces";
import { NavLink } from "react-router-dom";
import Barrages from "./barrages";
import Tableau from "./Tableau";

function Dashboard() {
  const success = getkey();
  return (
    <>
      {success ? (
        <div>
          <Barrages />
          <Tableau />
        </div>
      ) : (
        <NavLink className="login" to="/LogIn">
          Connectez-vous.
        </NavLink>
      )}
    </>
  );
}
export default Dashboard;
