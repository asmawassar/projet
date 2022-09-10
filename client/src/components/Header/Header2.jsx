import { AppBar, Stack, Button, Link, Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Bar, ButtonS, linkS } from "./style";

function Header2() {
  return (
    <AppBar sx={Bar}>
      <Toolbar>
        <Stack sx={{ flex: "50%" }} direction="row" spacing={4}>
          <Link underline="hover" sx={linkS} href="/">
            Acceuil
          </Link>
        </Stack>
        <Stack spacing={1} LinkComponent={NavLink} sx={ButtonS} to="/">
          <Button LinkComponent={NavLink} sx={ButtonS} to="/login">
            login/signup
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
export default Header2;
