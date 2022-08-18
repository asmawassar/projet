import Barrages from "./barrages";
import Tableau from "./Tableau";
import { Toolbar, Box } from "@mui/material";
import { UserContext } from "../../action/acces";
import React, { useContext } from "react";
import { barrageS, tableauS } from "./style";
function Dashboard() {
  const { user } = useContext(UserContext);
  console.log(user);
  const { barrage } = useContext(UserContext);
  function test() {
    if (barrage !== "false") {
      return <Tableau />;
    }
    return <>choisir le barrage que vous voulez</>;
  }
  return (
    <>
      <Toolbar />
      <Box
        style={{
          display: "flex",
        }}
      >
        <Box style={barrageS}>
          <Barrages />
        </Box>
        <Box style={tableauS}>{test()}</Box>
      </Box>
    </>
  );
}
export default Dashboard;
