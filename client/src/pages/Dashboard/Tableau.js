import { getkey } from "../../action/acces";
import { NavLink } from "react-router-dom";

function Tableau() {
  const success = getkey();
  return (
    <>
      {success ? (
        <div></div>
      ) : (
        <NavLink className="login" to="/LogIn">
          Connectez-vous.
        </NavLink>
      )}
    </>
  );
}
export default Tableau;
