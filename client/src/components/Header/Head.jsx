import { UserContext } from "../../action/acces";
import React, { useContext } from "react";
import { Button, Dialog, DialogTitle, DialogActions } from "@mui/material";
import { ButtonA, ButtonS } from "./style";
import { NavLink, useNavigate } from "react-router-dom";

export function Log() {
  const { user } = useContext(UserContext);
  if (user !== "false") {
    return "logout";
  }
  return "login";
}

export function Profile() {
  const { user } = useContext(UserContext);
  if (user !== "false") return "Profile";
  return "sign up";
}

export function TabBoard() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    navigate("/logIn");
  };
  if (user !== "false")
    return (
      <Button
        sx={ButtonS}
        style={ButtonA}
        LinkComponent={NavLink}
        to="/Dashboard"
      >
        Tableau de bord
      </Button>
    );
  return (
    <>
      <Button open={open} onClick={handleClickOpen} sx={ButtonS}>
        Tableau de bord
      </Button>{" "}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{"Please login first"}</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>login</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
