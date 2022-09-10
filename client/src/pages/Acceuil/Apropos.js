import { Toolbar, Box, Typography } from "@mui/material";
import image from "../../images/test.jpeg";
import { imageStyle2, left, right } from "./style";

function Apropos() {
  return (
    <div id="Apropos">
      <Toolbar />
      <Typography>
        <Box
          style={{
            display: "flex",
            marginTop: "100px",
          }}
        >
          <Box style={left}>
            <img src={image} style={imageStyle2} />
          </Box>
          <Box style={right}>
            <h1>qui somme nous?</h1>
            <p>
              BarrageService est un site web creé par des etudiants de l'école
              Nationale des sciences de l'informatique au cadre d'un stage
              d'été.
            </p>
            <h1>notre mission</h1>
            <p>
              Les buts de la creation de ce site est les suivants: <br />
              <ul>
                <li>
                  Mettre en place un systeme d'information fiable permettant
                  d'analyser la situation des barrages à travers des indicateurs
                </li>
                <li>
                  Collecter les informations et les données nationales liés aux
                  barrages tunisiens
                </li>
                <li>Sauvgarder les informations de tous les anneés donneés</li>
              </ul>
            </p>
          </Box>
        </Box>
      </Typography>
    </div>
  );
}
export default Apropos;
