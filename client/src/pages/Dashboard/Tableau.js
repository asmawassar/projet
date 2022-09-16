import React, { useContext } from "react";
import { UserContext } from "../../action/acces";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { Stack } from "@mui/material";
import { cadre } from "./style";

function Tableau() {
  const [Barrage, setBarrage] = React.useState([]);
  const { barrage } = useContext(UserContext);
  async function fetchData() {
    try {
      const res = await axios({
        method: "get",
        url: "http://localhost:5000/barrage/gets",
        params: { nomBarrage: barrage.nomBarrage },
      });
      const info = res.data;
      setBarrage(info);
    } catch (err) {
      console.log(err);
    }
  }
  const col = [
    { field: "id", headerName: "id", width: 150, hide: "true" },
    { field: "date", headerName: "date", width: 100 },
    { field: "mois", headerName: "mois", width: 50 },
    { field: "annee", headerName: "annee", width: 65 },
    { field: "stockBarrage", headerName: "stock du barrage", width: 150 },
    { field: "lachersAnnee", headerName: "lachersAnnee ", width: 150 },
    { field: "lachersMois", headerName: "lachersMois", width: 150 },
    { field: "lachersJour", headerName: "lachersJour", width: 150 },
    { field: "probs", headerName: "*", width: 50 },
    { field: "moyPeriode", headerName: " moyPeriode", width: 150 },
    { field: "apportsCummule", headerName: " apportsCummule", width: 150 },
    { field: "moyMois", headerName: " moyMois ", width: 150 },
    { field: "apportMois", headerName: "apportMois", width: 150 },
    { field: "apportJour", headerName: "apportJour", width: 150 },
  ];

  function rows() {
    const len = barrage.stockBarrage.length;
    var row = [];
    for (var i = 0; i < len; i++) {
      row.unshift({
        id: i,
        date: barrage.date[i],
        mois: barrage.mois[i],
        annee: barrage.annee[i],
        stockBarrage: barrage.stockBarrage[i],
        lachersAnnee: barrage.lachersAnnee[i],
        lachersMois: barrage.lachersMois[i],
        lachersJour: barrage.lachersJour[i],
        moyPeriode: barrage.lachersAnnee[i],
        probs: barrage.probs[i],
        apportsCummule: barrage.apportsCummule[i],
        moyMois: barrage.moyMois[i],
        apportMois: barrage.apportMois[i],
        apportJour: barrage.apportJour[i],
      });
    }
    return row;
  }
  fetchData();
  const row = rows();
  return (
    <>
      <Stack sx={cadre} style={{ marginTop: "40vh" }}>
        <h1>Description Générale</h1>
        <h2>
          Barrage {Barrage.nomBarrage} est situé dans le gouvernorat du{" "}
          {Barrage.gouvernorat}. Les travaux nécessaires pour la construction
          ont été commencés en {Barrage.dateDebutTravaux}.En{" "}
          {Barrage.dateMiseService},{Barrage.nomBarrage} a été mis en service
          avec une capacité initiale de {Barrage.capaciteInitiale} qui se situe
          actuellement à une capacité de {Barrage.capaciteUtile} .Le cours d'eau
          du ce barrage est dirigé vers le {Barrage.coursEau}.
        </h2>
      </Stack>
      <Stack sx={cadre}>
        <DataGrid
          autoHeight="true"
          rows={row}
          columns={col}
          density="comfortable"
          pageSize={7}
          rowsPerPageOptions={[7]}
        />
      </Stack>
    </>
  );
}
export default Tableau;
