import { Toolbar, Typography } from "@mui/material";
import { imageStyle, text } from "./style";
function Acceuil() {
  return (
    <div id="Acceuil" style={imageStyle}>
      <Toolbar />
      <Typography align="center" sx={text}>
        <h1 className="font-effect-emboss" style={{ fontSize: "100px" }}>
          Bienvenue à notre
        </h1>{" "}
        <h1
          className="font-effect-emboss"
          style={{ fontSize: "100px", marginTop: "-120px" }}
        >
          {" "}
          site web
        </h1>
        <h2 className="font-effect-outline" style={{ marginTop: "-90px" }}>
          Prière de vous connecter pour pouvoir accéder au tableau de bord
        </h2>
      </Typography>
    </div>
  );
}
export default Acceuil;
