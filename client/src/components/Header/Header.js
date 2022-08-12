import { Button } from "@mui/material";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { styleL, ButtonL, styleS, link, styleD, header } from "./style";

function Header() {
  return (
    <div className="Header" style={header}>
      <ul className="topnav">
        <li>
          <NavLink style={link} className="links" to="/">
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
            to="/LogIn"
            variant="outlined"
            className="buttons"
          >
            log in
          </Button>
        </li>
        <li>
          <Button
            sx={styleS}
            style={ButtonL}
            LinkComponent={NavLink}
            to="/SignUp"
            variant="contained"
            className="buttons"
          >
            Sign up
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
export default Header;
