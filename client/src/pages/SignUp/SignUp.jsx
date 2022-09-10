import { box, imageStyle2 } from "../LogIn/style";
import { NavLink } from "react-router-dom";
import Header from "../../components/Header/Header2";
import React, { useState } from "react";
import axios from "axios";
import {
  Alert,
  Box,
  Button,
  TextField,
  Avatar,
  Grid,
  CssBaseline,
  Paper,
  Stack,
  MenuItem,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

function SignUp() {
  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    email: "",
    naissance: "",
    sexe: "Homme",
    password: "",
    gouvernorat: "",
    occupation: "",
    entreprise: "",
    tel: "",
    passwordCheck: "",
  });
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState(false);
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    console.log(form);
    setError("");
    setSuccess(false);
    if (form.password !== form.passwordCheck) {
      setError("Passwords do not match");
      setSuccess(false);
      return;
    }
    axios({
      method: "post",
      url: "http://localhost:5000/user/signup",
      data: form,
    })
      .then(function () {
        setSuccess(true);
      })
      .catch(function (error) {
        setError(error.response.data.message);
      });
  }
  return (
    <div style={imageStyle2}>
      <Header />
      <Grid container component="main" justifyContent="center">
        <CssBaseline />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          sx={{
            background:
              "linear-gradient(rgb(212, 207, 198), rgb(212, 207, 198, 0.8))",
            marginTop: "7vw",
          }}
          elevation={20}
        >
          <Box sx={box}>
            <Avatar sx={{ mt: 5, mb: 2, bgcolor: "primary.dark" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Inscription
            </Typography>
            <Box component="form" noValidate onSubmit={onSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                type="text"
                label="Nom"
                sx={{ width: "45%", mr: "10%" }}
                value={form.prenom}
                onChange={(e) => updateForm({ prenom: e.target.value })}
                required
              />
              <TextField
                margin="normal"
                sx={{ width: "45%" }}
                type="text"
                label="Prénom"
                value={form.nom}
                onChange={(e) => updateForm({ nom: e.target.value })}
                required
              />

              <TextField
                fullWidth
                margin="normal"
                type="email"
                label="Adresse Mail"
                value={form.email}
                onChange={(e) => updateForm({ email: e.target.value })}
                required
              />

              <TextField
                type="text"
                sx={{ width: "45%", mr: "10%" }}
                margin="normal"
                label="gouvernorat"
                value={form.gouvernorat}
                onChange={(e) => updateForm({ gouvernorat: e.target.value })}
                required
              />
              <TextField
                margin="normal"
                sx={{ width: "45%" }}
                type="text"
                label="entreprise"
                value={form.entreprise}
                onChange={(e) => updateForm({ entreprise: e.target.value })}
                required
              />

              <TextField
                sx={{ width: "45%", mr: "10%" }}
                margin="normal"
                type="text"
                label="occupation"
                value={form.occupation}
                onChange={(e) => updateForm({ occupation: e.target.value })}
                required
              />
              <TextField
                sx={{ width: "45%" }}
                margin="normal"
                type="text"
                label="numero de tel"
                value={form.tel}
                onChange={(e) => updateForm({ tel: e.target.value })}
                required
              />

              <TextField
                sx={{ width: "45%", mr: "10%" }}
                margin="normal"
                type="password"
                label="Mot de passe"
                value={form.password}
                onChange={(e) => updateForm({ password: e.target.value })}
                required
              />
              <TextField
                sx={{ width: "45%" }}
                margin="normal"
                type="password"
                label="Confirmer mot de passe"
                value={form.passwordCheck}
                onChange={(e) => updateForm({ passwordCheck: e.target.value })}
                required
              />

              <TextField
                sx={{ width: "45%", mr: "10%" }}
                margin="normal"
                type="date"
                label="date"
                InputLabelProps={{ shrink: true }}
                value={form.naissance}
                onChange={(e) => updateForm({ naissance: e.target.value })}
                required
              />

              <TextField
                select
                sx={{ width: "45%" }}
                margin="normal"
                label="sexe"
                value={form.sexe}
                onChange={(e) => updateForm({ sexe: e.target.value })}
                required
              >
                <MenuItem value="Homme">Homme</MenuItem>
                <MenuItem value="Femme">Femme</MenuItem>
              </TextField>

              {error && (
                <Alert variant="filled" severity="error">
                  {error}
                </Alert>
              )}
              {success ? (
                <Alert severity="success">
                  Votre conmpte à été creée, Connectez-vous!!
                </Alert>
              ) : (
                <Button
                  variant="contained"
                  type="submit"
                  fullWidth
                  color="primary"
                  sx={{ mt: 3, mb: 2 }}
                >
                  s’enregistrer
                </Button>
              )}
              <Grid container>
                <Grid item>
                  avez-vous un compte?
                  <NavLink className="login" to="/LogIn">
                    Connectez-vous
                  </NavLink>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
export default SignUp;
