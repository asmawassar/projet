import React, { useContext } from "react";
import { Box } from "@mui/system";
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
    { field: "date", headerName: "date", width: 150 },
    { field: "mois", headerName: "mois", width: 70 },
    { field: "annee", headerName: "annee", width: 100 },
  ];

  function rows() {
    const len = barrage.stockBarrage.length;
    var row = [];
    for (var i = 0; i < len; i++) {
      row.unshift({
        id: i,
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
        date: barrage.date[i],
        mois: barrage.mois[i],
        annee: barrage.annee[i],
      });
    }
    return row;
  }
  fetchData();
  const row = rows();
  return (
    <>
      <Stack sx={cadre}>
        <h1>description generale</h1>
        <h2> nom du Barrage: {Barrage.nomBarrage}</h2>
        <h2> gouvernorat: {Barrage.gouvernorat}</h2>
        <h2> date de debut des Travaux: {Barrage.dateDebutTravaux}</h2>
        <h2> date Mise en Service: {Barrage.dateMiseService}</h2>
        <h2> cours d'eau: {Barrage.coursEau}</h2>
        <h2> capacite Initiale: {Barrage.capaciteInitiale}</h2>
        <h2> capacite Utile: {Barrage.capaciteUtile}</h2>
        <h2> description: {Barrage.description}</h2>
      </Stack>
      <Stack sx={cadre}>
        <Box sx={{ width: "100%" }}>
          <DataGrid
            autoHeight="true"
            rows={row}
            columns={col}
            density="comfortable"
            pageSize={7}
            rowsPerPageOptions={[7]}
          />
        </Box>
      </Stack>
    </>
  );
}
export default Tableau;
