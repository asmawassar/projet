import React, { useContext } from "react";
import { UserContext } from "../../action/acces";
import { DataGrid } from "@mui/x-data-grid";
import {
  Stack,
  Box,
  TextField,
  CssBaseline,
  Typography,
  Grid,
  Paper,
} from "@mui/material";
import { box } from "../LogIn/style";

function Tableau() {
  const { barrage, indicateur } = useContext(UserContext);
  const col = [
    { field: "id", headerName: "id", width: 150, hide: "true" },
    { field: "date", headerName: "date", width: 100 },
    { field: "mois", headerName: "mois", width: 50, hide: "true" },
    { field: "annee", headerName: "annee", width: 65, hide: "true" },
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
              <Typography sx={{ marginTop: 4 }}>
                <h1
                  className="font-effect-shadow-multiple"
                  style={{ fontSize: "40px", color: "rgb(156, 39, 176)" }}
                >
                  Barrage {indicateur.nomBarrage}:
                </h1>
              </Typography>
              <Box component="form" sx={{ mt: 1 }}>
                <TextField
                  color="secondary"
                  focused
                  margin="normal"
                  sx={{
                    marginLeft: "7.5%",
                    width: "35%",
                    mr: "15%",
                    marginBottom: 4,
                  }}
                  label="Gouvernorat:"
                  value={`${indicateur.gouvernorat}`}
                  InputProps={{
                    readOnly: true,
                  }}
                />
                <TextField
                  color="secondary"
                  focused
                  margin="normal"
                  sx={{ width: "35%" }}
                  label="Cours D'eau: "
                  value={`${indicateur.coursEau}`}
                  InputProps={{
                    readOnly: true,
                  }}
                />
                <TextField
                  color="secondary"
                  focused
                  margin="normal"
                  sx={{
                    marginLeft: "7.5%",
                    width: "35%",
                    mr: "15%",
                    marginBottom: 4,
                  }}
                  label="Date Du Debut Des Travaux:"
                  value={`${indicateur.dateDebutTravaux}`}
                  InputProps={{
                    readOnly: true,
                  }}
                />{" "}
                <TextField
                  color="secondary"
                  focused
                  margin="normal"
                  sx={{
                    width: "35%",
                  }}
                  label="Date De La Mise En Service: "
                  value={`${indicateur.dateMiseService}`}
                  InputProps={{
                    readOnly: true,
                  }}
                />
                <TextField
                  color="secondary"
                  focused
                  margin="normal"
                  sx={{
                    marginLeft: "7.5%",
                    width: "35%",
                    mr: "15%",
                    marginBottom: 5,
                  }}
                  label="Capacité Initiale: "
                  value={`${indicateur.capaciteInitiale}`}
                  InputProps={{
                    readOnly: true,
                  }}
                />
                <TextField
                  color="secondary"
                  focused
                  margin="normal"
                  sx={{
                    width: "35%",
                  }}
                  label="Capacité Utile: "
                  value={`${indicateur.capaciteUtile}`}
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
