import React, { useContext } from "react";
import { cadre } from "./style";
import { Stack, Table, TableBody, TableCell, TableHead } from "@mui/material";
import { Box } from "@mui/system";
import { UserContext } from "../../action/acces";
import { Stocks, Lachers, Apports } from "./dessin";

function Tableau() {
  const { barrage } = useContext(UserContext);

  return (
    <>
      <Stack sx={cadre}>
        <h1>STOCKS</h1>
        {Stocks()}
      </Stack>

      <Stack sx={cadre}>
        <h1>LACHERS</h1>
        {Lachers()}
        <h1>(*):{barrage.probs}</h1>
      </Stack>

      <Stack sx={cadre}>
        <h1>APPORT</h1>
        {Apports()}
        <Table>
          <TableHead>
            <TableCell>Moyenne du période</TableCell>
            <TableCell>Moyenne du mois</TableCell>
            <TableCell>Valeur du jour</TableCell>
          </TableHead>
          <TableBody>
            <TableCell>{barrage.moyPeriode}</TableCell>
            <TableCell>{barrage.moyMois}</TableCell>
            <TableCell>{barrage.apportJour}</TableCell>
          </TableBody>
        </Table>
      </Stack>
    </>
  );
}
export default Tableau;
