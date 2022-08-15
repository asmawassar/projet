import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { styleL, ButtonL, styleS, link, styleD, header } from "./style";
import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    navigate("/logIn");
  };
  return (
    <div className="Header" style={header}>
      <ul className="topnav">
        <li>
          <NavLink style={link} className="links" to="/">
            Acceuil
          </NavLink>
        </li>
        <li>
          <NavLink style={link} className="links" to="/">
            A propos
          </NavLink>
        </li>
        <li>
          <NavLink style={link} className="links" to="/">
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
            LinkComponent={NavLink}
            to="#"
            className="buttons"
            onClick={handleClickOpen}
          >
            Tableau de bord
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Please login first"}
            </DialogTitle>
            <DialogActions>
              <Button onClick={handleClose}>login</Button>
            </DialogActions>
          </Dialog>
        </li>
      </ul>
    </div>
  );
}
export default Header;
