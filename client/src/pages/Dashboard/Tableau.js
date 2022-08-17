import React, { useContext } from "react";
import { UserContext } from "../../action/acces";
import { Bar, Pie, Line } from "react-chartjs-2";
import { ChartBar, ChartLine, options, ChartPie } from "./action";
function Tableau() {
  const { barrage } = useContext(UserContext);
  const labels = barrage.date;
  const option = options("stock du barrage");
  const option1 = options("lachers du barrage");
  const option2 = options("Apports");
  const option3 = options("Test");

  const data = ChartBar(labels, barrage.stockBarrageC, barrage.stockBarrageP);
  const data1 = ChartBar(labels, barrage.lachersAnneeC, barrage.lachersAnneeP);
  const data2 = ChartBar(labels, barrage.lachersJourC, barrage.lachersJourP);
  const data4 = ChartLine(labels, "test", [0, barrage.apportJour]);
  const data3 = ChartPie("pourcentageStock", barrage.pourcentageStock);
  return (
    <>
      <div className="stocks">
        <h1>STOCKS</h1>
        <Bar options={option} data={data} />
        <Pie data={data3} />
      </div>
      <div className="Lachers">
        <h1>LACHERS</h1>
        <Bar options={option1} data={data1} />
        <Bar options={option2} data={data2} />
        <Line options={option3} data={data4} />
      </div>
    </>
  );
}
export default Tableau;
