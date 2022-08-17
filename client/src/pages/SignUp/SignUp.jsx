import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import { formS, stack } from "../LogIn/style";

import {
  Alert,
  Box,
  Stack,
  Button,
  Toolbar,
  MenuItem,
  TextField,
} from "@mui/material";

function SignUp() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    birthDate: "1999-01-01",
    sex: "Homme",
    password: "",
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
    <>
      <Toolbar />
      <Box sx={formS}>
        <form onSubmit={onSubmit}>
          <Stack m={2} spacing={3} sx={stack}>
            <h1>Inscription</h1>
            <TextField
              type="text"
              label="Nom"
              value={form.lastName}
              onChange={(e) => updateForm({ lastName: e.target.value })}
              required
            />
            <TextField
              type="text"
              label="Prénom"
              value={form.firstName}
              onChange={(e) => updateForm({ firstName: e.target.value })}
              required
            />
            <TextField
              type="email"
              label="Adresse Mail"
              value={form.email}
              onChange={(e) => updateForm({ email: e.target.value })}
              required
            />
            <TextField
              type="password"
              label="Mot de passe"
              value={form.password}
              onChange={(e) => updateForm({ password: e.target.value })}
              required
            />
            <TextField
              type="password"
              label="Confirmer mot de passe"
              value={form.passwordCheck}
              onChange={(e) => updateForm({ passwordCheck: e.target.value })}
              required
            />
            <TextField
              type="date"
              label="date"
              value={form.birthDate}
              onChange={(e) => updateForm({ birthDate: e.target.value })}
              required
            />
            <TextField
              select
              label="sexe"
              value={form.sex }
              onChange={(e) => updateForm({ sex: e.target.value })}
            >
              <MenuItem value="Homme">Homme</MenuItem>
              <MenuItem value="Femme">Femme</MenuItem>
            </TextField>
            {error && <Alert severity="error">{error}</Alert>}
            {success ? (
              <Alert severity="success">
                Votre conmpte à été creée, Connectez-vous!!
              </Alert>
            ) : (
              <Button variant="contained" type="submit">
                Sign up
              </Button>
            )}
            <div className="login_link">
              Vous Avez un Compte?{" "}
              <NavLink className="login" to="/LogIn">
                Connectez-vous.
              </NavLink>
            </div>
          </Stack>
        </form>
      </Box>
    </>
  );
}
export default SignUp;
