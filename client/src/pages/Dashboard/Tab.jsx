import React, { useContext } from "react";
import { cadre } from "./style";
import {
  Stack,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
} from "@mui/material";
import { UserContext } from "../../action/acces";
import { Stocks, Lachers, Apports } from "./dessin";

function Tab() {
  const { barrage } = useContext(UserContext);
  const len = barrage.probs.length;
  return (
    <>
      <Stack sx={cadre}>
        <h1>STOCKS</h1>
        {Stocks()}
      </Stack>

      <Stack sx={cadre}>
        <h1>LACHERS</h1>
        {Lachers()}
        <h1>(*):{barrage.probs[len - 1]}</h1>
      </Stack>

      <Stack sx={cadre}>
        <h1>APPORTS</h1>
        {Apports()}
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Moyenne du période</TableCell>
              <TableCell>Moyenne du mois</TableCell>
              <TableCell>Valeur du jour</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{barrage.moyPeriode[len - 1]}</TableCell>
              <TableCell>{barrage.moyMois[len - 1]}</TableCell>
              <TableCell>{barrage.apportJour[len - 1]}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Stack>
    </>
  );
}
export default Tab;
