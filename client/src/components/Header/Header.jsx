import { AppBar, Stack, Button, Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";
import { ButtonA, linkA, Bar, ButtonS, linkS } from "./style";
import { Log, Profile, TabBoard ,Links} from "./Head";
import { UserContext } from "../../action/acces";
import  { useContext } from "react";

function Header() {
  const { userState } = useContext(UserContext);
  function test() {
    if (Log() === "logout") userState("false");
  }
  const linkk=Links();
  return (
    <AppBar sx={Bar}>
      <Toolbar>
        <Stack sx={{ flex: "50%" }} direction="row" spacing={4}>
          <Button LinkComponent={NavLink} style={linkA} sx={linkS} to="/">
            Acceuil
          </Button>

          <Button LinkComponent={NavLink} style={linkA} sx={linkS} to="/apropos">
            A propos
          </Button>

          <Button LinkComponent={NavLink} style={linkA} sx={linkS} to="/contact">
            Contact
          </Button>
        </Stack>
        <Stack spacing={1} direction="row">
          <TabBoard />
          <Button
            LinkComponent={NavLink}
            style={ButtonA} 
            sx={ButtonS}
            to="/LogIn"
            onClick={test}
          >
            <Log />
          </Button>
          <Button
            LinkComponent={NavLink}
            style={ButtonA}
            sx={ButtonS}
            to={linkk}
          >
            <Profile />
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
