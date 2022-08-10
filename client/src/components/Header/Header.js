import { Button } from "@mui/material";
import useStyles from "./style";
import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  const classes = useStyles();
  const styleL = {
    fontSize: "19px",
    color: "#c2c5aa",
    borderColor: "#c2c5aa",
    "&:hover": {
      backgroundColor: "#bc6c25",
      borderColor: "transparent",
      color: "#c2c5aa",
      marginTop: "-1.5px",
    },
    "&:active": {
      backgroundColor: "#992600",
    },
  };
  const styleS = {
    fontSize: "19px",
    color: "#582f0e",
    backgroundColor: "#c2c5aa",
    borderColor: "#c2c5aa",
    "&:hover": {
      backgroundColor: "#bc6c25",
      marginTop: "-1.5px",
      color: "#c2c5aa",
    },
    "&:active": {
      backgroundColor: "#992600",
    },
  };
  return (
    <div className={classes.Header}>
      <ul className="topnav">
        <li>
          <NavLink
            style={({ isActive }) =>
              isActive
                ? {
                    marginTop: "-1.5px",
                    textDecoration: "none",
                    color: "#bc6c25",
                  }
                : {}
            }
            className="links"
            to="/Acceuil"
          >
            Acceuil
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) =>
              isActive
                ? {
                    marginTop: "-1.5px",
                    textDecoration: "none",
                    color: "#bc6c25",
                  }
                : {}
            }
            className="links"
            to="/Add"
          >
            A propos
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) =>
              isActive
                ? {
                    marginTop: "-1.5px",
                    textDecoration: "none",
                    color: "#bc6c25",
                  }
                : {}
            }
            className="links"
            to="/Change"
          >
            Contact
          </NavLink>
        </li>
      </ul>

      <ul className="topnav right">
        <li>
          <Button
            sx={styleL}
            style={({ isActive }) =>
              isActive
                ? {
                    marginTop: "-1.5px",
                    backgroundColor: "#bc6c25",
                    borderColor: "transparent",
                    color: "#c2c5aa",
                    marginTop: "-1.5px",
                  }
                : {}
            }
            LinkComponent={NavLink}
            to="/LogIn"
            variant="outlined"
            className={` ${classes.loginNavLink} buttons`}
          >
            log in
          </Button>
        </li>
        <li>
          <Button
            sx={styleS}
            style={({ isActive }) =>
              isActive
                ? {
                    marginTop: "-1.5px",
                    backgroundColor: "#bc6c25",
                    marginTop: "-1.5px",
                    color: "#c2c5aa",
                  }
                : {}
            }
            LinkComponent={NavLink}
            to="/SignUp"
            variant="contained"
            className={` ${classes.signupNavLink} buttons`}
          >
            Sign up
          </Button>
        </li>
        <li>
          <Button
            sx={{
              fontSize: "19px",
              color: "#c2c5aa",
              borderColor: "#c2c5aa",
              "&:hover": {
                backgroundColor: "#bc6c25",
                borderColor: "transparent",
                color: "#c2c5aa",
                marginTop: "-1.5px",
              },
              "&:active": {
                backgroundColor: "#992600",
              },
            }}
            style={({ isActive }) =>
              isActive
                ? {
                    marginTop: "-1.5px",
                    backgroundColor: "#bc6c25",
                    borderColor: "transparent",
                    color: "#c2c5aa",
                    marginTop: "-1.5px",
                  }
                : {}
            }
            LinkComponent={NavLink}
            to="/Dashboard"
            className={` ${classes.loginNavLink} ${classes.buttons}`}
          >
            Tableau de bord
          </Button>
        </li>
      </ul>
    </div>
  );
}
export default Header;
