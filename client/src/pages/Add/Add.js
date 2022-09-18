import {
  TextField,
  Grid,
  Alert,
  Box,
  Paper,
  Typography,
  Button,
  CssBaseline,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { UserContext } from "../../action/acces";
import Header from "../../components/Header/Header3";
import axios from "axios";

import { Gender, Form } from "./actions";
import { formS, box, buttonS } from "../Change/style";
import { wallpaper } from "../Dashboard/style";
function Add() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [form, setForm] = Form();
  const [error, setError] = React.useState("");

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    setError(0);
    axios({
      method: "post",
      url: "http://localhost:5000/barrage/create",
      data: form,
    })
      .then(function () {
        navigate("/dashboard");
      })
      .catch(function (error) {
        setError(error.response.data.msg);
        console.log(error.response.data);
      });
  }

  return (
    <Box className="container" style={wallpaper}>
      <Header />
      <Grid container component="main" sx={{ width: "2000px" }}>
        <CssBaseline />
        <Grid
          item
          sm={8}
          md={5}
          component={Paper}
          sx={{
            background:
              "linear-gradient(rgb(212, 207, 198), rgb(212, 207, 198, 0.8))",
            marginTop: "15vh",
            marginBottom: "5vh",
          }}
          elevation={20}
        >
          <Box sx={box}>
            <Typography sx={{ color: "purple", fontSize: "18.5px" }}>
              <h2>
                <i>
                  Bienvenue {Gender()} {user.lastName.toUpperCase()}{" "}
                  {user.firstName.toUpperCase()} :
                </i>
              </h2>
            </Typography>
            <Box component="form" sx={{ mt: 1 }} noValidate onSubmit={onSubmit}>
              <TextField
                margin="normal"
                sx={{ width: "70%", ml: "15%", mb: 5 }}
                type="text"
                label="Nom Du Barrage"
                value={form.nomBarrage}
                onChange={(e) => updateForm({ nomBarrage: e.target.value })}
                required
              />{" "}
              <fieldset className="f2">
                <legend>Informations Générales</legend>
                <TextField
                  margin="normal"
                  sx={{ width: "45%", mr: "10%", mt: 3 }}
                  type="text"
                  label="Gouvernorat"
                  value={form.gouvernorat}
                  onChange={(e) => updateForm({ gouvernorat: e.target.value })}
                  required
                />
                <TextField
                  margin="normal"
                  sx={{ width: "45%", mt: 3 }}
                  type="text"
                  label="Cours D'eau"
                  required
                  value={form.coursEau}
                  onChange={(e) => updateForm({ coursEau: e.target.value })}
                />
                <TextField
                  margin="normal"
                  sx={{ width: "45%", mr: "10%", mt: 3 }}
                  type="text"
                  label="Capacité Initiale"
                  value={form.capaciteInitiale}
                  onChange={(e) =>
                    updateForm({ capaciteInitiale: e.target.value })
                  }
                  required
                />
                <TextField
                  margin="normal"
                  sx={{ width: "45%", mt: 3 }}
                  type="text"
                  label="Capacité Utile"
                  required
                  value={form.capaciteUtile}
                  onChange={(e) =>
                    updateForm({ capaciteUtile: e.target.value })
                  }
                />

                <TextField
                  margin="normal"
                  sx={{ width: "45%", mr: "10%", mt: 3 }}
                  type="text"
                  label="Date Du Début Des Travaux"
                  required
                  value={form.dateDebutTravaux}
                  onChange={(e) =>
                    updateForm({ dateDebutTravaux: e.target.value })
                  }
                />

                <TextField
                  margin="normal"
                  sx={{ width: "45%", mt: 3, mb: 3 }}
                  type="text"
                  label=" Date De La Fin Des Travaux "
                  required
                  value={form.dateMiseService}
                  onChange={(e) =>
                    updateForm({ dateMiseService: e.target.value })
                  }
                />
              </fieldset>
              <Box style={box}>
                <center>
                  {error && <Alert severity="error">{error}</Alert>}
                  <Button variant="contained" type="submit" sx={buttonS}>
                    Ajouter
                  </Button>
                </center>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Add;
