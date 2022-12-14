import Barrages from "./barrages";
import Tableau from "./Tableau";
import Tab from "./Tab";
import { Toolbar, Box } from "@mui/material";
import { UserContext } from "../../action/acces";
import React, { useContext } from "react";
import { barrageS, tableauS } from "./style";
import Wave from "./wave";
function Dashboard() {
  const { barrage } = useContext(UserContext);
  function test() {
    if (barrage !== "false") {
      return (
        <>
          {" "}
          <Tableau />
          <Tab />
        </>
      );
    }
    return <></>;
  }
  return (
    <>
      {" "}
      <Wave />
      <Box
        style={{
          display: "flex",
        }}
      >
        <Toolbar />
        <Box style={barrageS}>
          <Barrages />
        </Box>
        <Box style={tableauS}>{test()}</Box>
      </Box>
    </>
  );
}
export default Dashboard;
