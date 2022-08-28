import { TextField, Toolbar, Alert, Box, Stack, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { UserContext } from "../../action/acces";
import axios from "axios";
import { row } from "../LogIn/style";
import { Gender } from "../Add/actions";
import { formS, box, stack, buttonS } from "../Change/style";

function Add() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [form, setForm] = React.useState({
    nomBarrage: "",
    gouvernorat: "",
    capaciteInitiale: "",
    capaciteUtile: "",
    coursEau: "",
    dateDebutTravaux: "",
    dateMiseService: "",
    description: "",
  });
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
    <Box className="container">
      <Toolbar />

      <h1>
        Bienvenue {Gender()} {user.lastName} {user.firstName}
      </h1>
      <h3>
        Veuillez remplir les cases suivantes avec les valeurs correspondantes :
      </h3>
      <form className="formA" method="post" onSubmit={onSubmit} style={formS}>
        <Stack m={2} spacing={3} sx={stack}>
          <Stack {...row}>
            <TextField
              type="text"
              label="nom du barrage"
              value={form.nomBarrage}
              onChange={(e) => updateForm({ nomBarrage: e.target.value })}
              required
            />
            <TextField
              type="text"
              label="gouvernorat"
              value={form.gouvernorat}
              onChange={(e) => updateForm({ gouvernorat: e.target.value })}
              required
            />
          </Stack>
          <Stack {...row}>
            <TextField
              type="text"
              label="capacité initiale"
              value={form.capaciteInitiale}
              onChange={(e) => updateForm({ capaciteInitiale: e.target.value })}
              required
            />
            <TextField
              type="text"
              label="capacité Utile"
              required
              value={form.capaciteUtile}
              onChange={(e) => updateForm({ capaciteUtile: e.target.value })}
            />
          </Stack>
          <Stack {...row}>
            <TextField
              type="text"
              label="cours d'eau"
              required
              value={form.coursEau}
              onChange={(e) => updateForm({ coursEau: e.target.value })}
            />
            <TextField
              type="text"
              label="date de debut de traveaux"
              value={form.dateDebutTravaux}
              onChange={(e) => updateForm({ dateDebutTravaux: e.target.value })}
            />
          </Stack>
          <Stack {...row}>
            <TextField
              type="text"
              label="date mise en service"
              required
              value={form.dateMiseService}
              onChange={(e) => updateForm({ dateMiseService: e.target.value })}
            />
            <TextField
              type="text"
              label="description"
              value={form.description}
              onChange={(e) => updateForm({ description: e.target.value })}
            />
          </Stack>

          <Box style={box}>
            {error && <Alert severity="error">{error}</Alert>}
            <Button variant="contained" type="submit" sx={buttonS}>
              Ajouter
            </Button>
          </Box>
        </Stack>
      </form>
    </Box>
  );
}

export default Add;
