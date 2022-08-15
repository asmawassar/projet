import React, { useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
function Tableau() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Stocks aux barrages",
      },
    },
  };
  const [barrage, setBarrage] = useState([]);
  const [labels, setLabel] = useState([]);
  const [stockJour, setSj] = useState([]);
  const [stockJourP, setSjP] = useState([]);

  async function fetchData() {
    try {
      const res = await axios.get("http://localhost:5000/barrage/get");
      const data = res.data[1];
      setLabel(res.data[1].date);
      setSj(data.stockBarrageC);
      setSjP(data.stockBarrageP);
    } catch (err) {
      console.log(err);
    }
  }
  fetchData();

  const data = {
    labels,
    datasets: [
      {
        label: "du ",
        data: labels.map(() => stockJour),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: labels.map(() => stockJourP),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return <Bar options={options} data={data} />;
}
export default Tableau;
