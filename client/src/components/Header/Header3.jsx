import { AppBar, Stack, Button, Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";
import React, { useContext } from "react";
import { Bar, ButtonS } from "./style";
import image from "../../images/barrage.png";
import { UserContext } from "../../action/acces";
import { imageStyle } from "./style";
function Header3() {
  const { user } = useContext(UserContext);

  return (
    <AppBar sx={Bar}>
      <Toolbar>
        <img src={image} style={imageStyle} alt="" />{" "}
        <Stack sx={{ flex: "50%", marginLeft: 12 }} direction="row" spacing={4}>
          <Button LinkComponent={NavLink} sx={ButtonS} to="/profile">
            Profile
          </Button>
          {user.role === "admin" ? (
            <Button LinkComponent={NavLink} sx={ButtonS} to="/admin">
              admin
            </Button>
          ) : (
            <></>
          )}

          <Button LinkComponent={NavLink} sx={ButtonS} to="/Dashboard">
            Tableau de board
          </Button>
        </Stack>
        <Stack spacing={1} direction="row">
          <Button LinkComponent={NavLink} sx={ButtonS} to="/">
            Logout
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
export default Header3;
