import { Button } from "@mui/material";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { styleL, ButtonL, styleS, link, styleD } from "./style";

function HeaderLog() {
  function logout() {
    localStorage.removeItem("key");
  }
  return (
    <div className="Header">
      <ul className="topnav">
        <li>
          <NavLink style={link} className="links" to="/Acceuil">
            Acceuil
          </NavLink>
        </li>
        <li>
          <NavLink style={link} className="links" to="/Add">
            A propos
          </NavLink>
        </li>
        <li>
          <NavLink style={link} className="links" to="/Change">
            Contact
          </NavLink>
        </li>
      </ul>

      <ul className="topnav right">
        <li>
          <Button
            sx={styleL}
            style={ButtonL}
            LinkComponent={NavLink}
            to="/logIn"
            variant="outlined"
            className="buttons"
            onClick={logout()}
          >
            log out
          </Button>
        </li>
        <li>
          <Button
            sx={styleS}
            style={ButtonL}
            LinkComponent={NavLink}
            to="/LogIn"
            variant="contained"
            className="buttons"
          >
            My profile
          </Button>
        </li>
        <li>
          <Button
            sx={styleD}
            style={ButtonL}
            LinkComponent={NavLink}
            to="/Dashboard"
            className="buttons"
          >
            Tableau de bord
          </Button>
        </li>
      </ul>
    </div>
  );
}
export default HeaderLog;
