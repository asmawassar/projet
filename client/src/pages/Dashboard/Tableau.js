import React, { useContext } from "react";
import { UserContext } from "../../action/acces";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import {
  Stack,
  Box,
  Toolbar,
  TextField,
  CssBaseline,
  Typography,
  Avatar,
  Grid,
  Paper,
} from "@mui/material";
import { cadre } from "./style";
import { box } from "../LogIn/style";

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
      <Stack
        sx={{
          margin: 10,
          padding: "10px",
          borderColor: "transparent",
        }}
        style={{ marginTop: "40vh" }}
      >
        <Grid container component="main" justifyContent="center">
          <CssBaseline />
          <Grid
            item
            component={Paper}
            sx={{
              background:
                "linear-gradient(rgb(78, 60, 73,0.7), rgb(78, 60, 73, 0.1))",
            }}
            elevation={20}
          >
            <Box sx={box}>
              <Typography sx={{ marginTop: 7 }}>
                <h1
                  className="font-effect-shadow-multiple"
                  style={{ fontSize: "40px", color: "rgb(78, 60, 173)" }}
                >
                  Barrage {Barrage.nomBarrage}:
                </h1>
              </Typography>
              <Box component="form" sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  sx={{
                    marginLeft: "7.5%",
                    width: "35%",
                    mr: "15%",
                    marginBottom: 4,
                  }}
                  label="Gouvernorat:"
                  defaultValue={`${Barrage.gouvernorat}`}
                  InputProps={{
                    readOnly: true,
                  }}
                />
                <TextField
                  margin="normal"
                  sx={{ width: "35%" }}
                  label="cours d'eau: "
                  defaultValue={`${Barrage.coursEau}`}
                  InputProps={{
                    readOnly: true,
                  }}
                />{" "}
                <TextField
                  margin="normal"
                  sx={{
                    marginLeft: "7.5%",
                    width: "35%",
                    mr: "15%",
                    marginBottom: 4,
                  }}
                  label="Debut des Traveaux:"
                  defaultValue={`${Barrage.dateDebutTravaux}`}
                  InputProps={{
                    readOnly: true,
                  }}
                />{" "}
                <TextField
                  margin="normal"
                  sx={{
                    width: "35%",
                  }}
                  label="Date de mise en service: "
                  defaultValue={`${Barrage.dateMiseService}`}
                  InputProps={{
                    readOnly: true,
                  }}
                />
                <TextField
                  margin="normal"
                  sx={{
                    marginLeft: "7.5%",
                    width: "35%",
                    mr: "15%",
                    marginBottom: 5,
                  }}
                  label="Capacité initiale: "
                  defaultValue={`${Barrage.capaciteInitiale}`}
                  InputProps={{
                    readOnly: true,
                  }}
                />
                <TextField
                  margin="normal"
                  sx={{
                    width: "35%",
                  }}
                  label="Capacité utile: "
                  defaultValue={`${Barrage.capaciteUtile}`}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Stack>
      <Stack
        sx={{
          margin: 10,
          padding: "10px",
          borderColor: "transparent",
        }}
      >
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
