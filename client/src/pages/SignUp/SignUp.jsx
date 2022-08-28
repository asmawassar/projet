import { Alert, Box,Stack,Button,Toolbar, MenuItem, TextField,} from "@mui/material";
import { formS, stack, row } from "../LogIn/style";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

function SignUp() {
  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    email: "",
    naissance: "",
    sexe: "Homme",
    password: "",
    gouvernorat:"",
    occupation:"",
    entreprise:"",
    tel:"",
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
    console.log(form)
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
    < >
      <Toolbar />
      <Box  sx={formS}>
        <form onSubmit={onSubmit}> 
          <Stack m={2} spacing={3} sx={stack}>
            <h1>Inscription</h1>
            <Stack {...row}>
            <TextField
              type="text"
              label="Nom"
              value={form.prenom}
              onChange={(e) => updateForm({ prenom: e.target.value })}
              required
            />
            <TextField
              type="text"
              label="Prénom"
              value={form.nom}
              onChange={(e) => updateForm({ nom: e.target.value })}
              required
            /></Stack>
            <TextField
              type="email"
              label="Adresse Mail"
              value={form.email}
              onChange={(e) => updateForm({ email: e.target.value })}
              required
            />
              <Stack {...row}>
            <TextField
              type="text"
              label="gouvernorat"
              value={form.gouvernorat}
              onChange={(e) => updateForm({ gouvernorat: e.target.value })}
              required
            />
            <TextField
              type="text"
              label="entreprise"
              value={form.entreprise}
              onChange={(e) => updateForm({ entreprise: e.target.value })}
              required
            /></Stack> 
             <Stack {...row}>
            <TextField
              type="text"
              label="occupation"
              value={form.occupation}
              onChange={(e) => updateForm({ occupation: e.target.value })}
              required
            />
            <TextField
              type="text"
              label="numero de tel"
              value={form.tel}
              onChange={(e) => updateForm({ tel: e.target.value })}
              required
            /></Stack> 
            <Stack {...row}>
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
            /></Stack> <Stack {...row}>
            <TextField
              type="date"
              label="date"
              InputLabelProps={{ shrink:true}}
              value={form.naissance}
              onChange={(e) => updateForm({ naissance: e.target.value })}
              required
            />
           
            <TextField
              select
              label="sexee"
              value={form.sexe }
              onChange={(e) => updateForm({ sexe: e.target.value })}
              required
            >
              <MenuItem value="Homme">Homme</MenuItem>
              <MenuItem value="Femme">Femme</MenuItem>
            </TextField></Stack>
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
