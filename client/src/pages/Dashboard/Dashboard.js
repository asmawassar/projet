import Barrages from "./barrages";
import Tableau from "./Tableau";
import { Toolbar, Box } from "@mui/material";
import { UserContext } from "../../action/acces";
import React, { useContext } from "react";
import { box, barrageS, tableauS } from "./style";
function Head() {
  const { user } = useContext(UserContext);
  return (
    <>
      <Toolbar />
      <Box style={box}>
        <div style={barrageS}>
          <Barrages />
        </div>
        <div style={tableauS}>
          <Tableau />
        </div>
      </Box>
    </>
  );
}
export default Head;
