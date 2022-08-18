import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(
  PointElement,
  LineElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function ChartBar(labels, value1, value2) {
  return {
    labels,
    datasets: [
      {
        label: "de l'anneé 2022 ",
        data: value1,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "de l'anneé 2021",
        data: value2,
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
}

export function ChartLine(labels, label, value) {
  return {
    labels,
    datasets: [
      {
        label: label,
        data: value,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
}

export function ChartLine2(labels, value1, value2) {
  return {
    labels,
    datasets: [
      {
        label: 2021,
        data: value1,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: 2022,
        data: value2,
        borderColor: "rgba(53, 162, 235, 0.5)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
}

export function ChartPie(name, value) {
  return {
    labels: [name],
    datasets: [
      {
        label: "# of Votes",
        data: [value, 100 - value],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
      },
    ],
  };
}

export function options(name) {
  return {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: name,
      },
    },
  };
}
