import { AppBar, Stack, Button, Link, Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Bar, ButtonS, linkS } from "./style";
import image from "../../images/barrage.png";
import { imageStyle } from "./style";
function Header() {
  return (
    <AppBar sx={Bar}>
      <Toolbar>
        <img src={image} style={imageStyle} alt="" />{" "}
        <Stack sx={{ flex: "50%", marginLeft: 12 }} direction="row" spacing={4}>
          <Link underline="hover" sx={linkS} href="#Acceuil">
            Acceuil
          </Link>

          <Link underline="hover" sx={linkS} href="#Apropos">
            A propos
          </Link>

          <Link underline="hover" sx={linkS} href="#Contact">
            Contact
          </Link>
        </Stack>
        <Stack spacing={1} direction="row">
          <Button LinkComponent={NavLink} sx={ButtonS} to="/login">
            Connexion/Inscription
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
