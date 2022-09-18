import { AppBar, Stack, Button, Link, Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Bar, ButtonS, linkS } from "./style";
import image from "../../images/barrage.png";
import { imageStyle } from "./style";
function Header3() {
  return (
    <AppBar sx={Bar}>
      <Toolbar>
        <img src={image} style={imageStyle} alt="" />{" "}
        <Stack sx={{ flex: "50%", marginLeft: 12 }} direction="row" spacing={4}>
          <Button LinkComponent={NavLink} sx={ButtonS} to="/profile">
            Profile
          </Button>
          <Button LinkComponent={NavLink} sx={ButtonS} to="/admin">
            admin
          </Button>

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
