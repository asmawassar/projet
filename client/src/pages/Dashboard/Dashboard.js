import Barrages from "./barrages";
import Tableau from "./Tableau";
import { Toolbar, Box } from "@mui/material";
import { UserContext } from "../../action/acces";
import React, { useContext } from "react";
import { box, barrageS, tableauS } from "./style";
function Dashboard() {
  const { user } = useContext(UserContext);
  const { barrage } = useContext(UserContext);
  function test() {
    if (barrage !== "false") {
      return <Tableau />;
    }
    return <>choisir le barrage que vous voulez</>;
  }
  const Test = test();
  return (
    <>
      <Toolbar />
      <Box style={box}>
        <div style={barrageS}>
          <Barrages />
        </div>
        <div style={tableauS}>{Test}</div>
      </Box>
    </>
  );
}
export default Dashboard;
