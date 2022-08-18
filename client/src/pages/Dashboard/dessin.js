import { ChartBar, ChartLine, ChartLine2, options, ChartPie } from "./action";
import { UserContext } from "../../action/acces";
import React, { useContext } from "react";
import { bar, pie } from "./style";
import { Bar, Pie, Line } from "react-chartjs-2";
import { Box } from "@mui/system";

const mois = new Date().getMonth() + 1;
export const jour = new Date().getDate() - 1;

function Labels() {
  const { barrage } = useContext(UserContext);
  return barrage.date;
}

export function Stocks() {
  const { barrage } = useContext(UserContext);
  const data = ChartBar(Labels(), barrage.stockBarrageC, barrage.stockBarrageP);
  const data1 = ChartPie("pourcentageStock", barrage.pourcentageStock);
  return (
    <Box style={{ display: "flex" }}>
      <Box style={bar}>
        <Bar options={options("stock du barrage")} data={data} />
      </Box>
      <Box style={pie}>
        <Pie data={data1} />
      </Box>
    </Box>
  );
}

export function Lachers() {
  const { barrage } = useContext(UserContext);
  const data = ChartBar(Labels(), barrage.lachersJourC, barrage.lachersJourP);
  const data1 = ChartLine(
    Labels(),
    `valeur des Lachers du mois ${mois}`,
    barrage.lachersMoisC
  );
  const data2 = ChartLine2(
    Labels(),
    barrage.achersAnneeC,
    barrage.achersAnneeP
  );
  return (
    <>
      <Box style={{ display: "flex" }}>
        <Box style={bar}>
          <Bar options={options(`les lachers du jour : ${jour}`)} data={data} />
        </Box>
        <Box style={bar}>
          <Line data={data1} />
        </Box>
      </Box>
      <Box style={bar}>
        <Line options={options("les lachers cummulées")} data={data2} />
      </Box>
    </>
  );
}

export function Apports() {
  const { barrage } = useContext(UserContext);
  const data = ChartLine(
    Labels(),
    `valeur des Apports du mois ${mois}`,
    barrage.apportsMoisC
  );
  const data1 = ChartLine2(
    Labels(),
    barrage.apportsCummuleC,
    barrage.apportsCummuleP
  );
  return (
    <Box style={{ display: "flex" }}>
      <Box style={bar}>
        <Line data={data} />
      </Box>
      <Box style={bar}>
        <Line options={"les Apports cummulées"} data={data1} />
      </Box>
    </Box>
  );
}
