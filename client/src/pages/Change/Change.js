import { TextField, Toolbar, Alert, Box, Stack, Button } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { UserContext } from "../../action/acces";
import axios from "axios";
import Header from "../../components/Header/Header3";
import { formS, box, stack, field, buttonS } from "./style";
import SendIcon from "@mui/icons-material/Send";
import {
  jourP,
  jourEtAnneP,
  Gender,
  anneeP,
  anneeC,
  FormC,
} from "../Add/actions";
function Change() {
  const navigate = useNavigate();
  const { user, barrage } = useContext(UserContext);
  const [form, setForm] = FormC();
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
      method: "put",
      url: "http://localhost:5000/barrage/update",
      data: form,
    })
      .then(function () {
        navigate("/dashboard");
      })
      .catch(function (error) {
        setError(error.response.data.message);
      });
  }

  return (
    <Box className="container">
      <Header />
      <Toolbar />
      <form className="formA" method="post" onSubmit={onSubmit} style={formS}>
        <Stack m={2} spacing={3} sx={stack} value="true">
          <h2>
            Bienvenue {Gender()} {user.lastName.toUpperCase()}{" "}
            {user.firstName.toUpperCase()}
          </h2>
          <h3>Update Barrage {barrage.nomBarrage} :</h3>
          <h5>Ces Données sont observées à 7h {anneeC}</h5>
          <fieldset className="f2">
            <legend>Stocks Aux Barrages</legend>
            <Stack m={2} spacing={3} sx={field}>
              <TextField
                type="text"
                label={`Stocks Du ${anneeP}`}
                value={form.stockBarrage}
                onChange={(e) => updateForm({ stockBarrage: e.target.value })}
                required
              />
            </Stack>
          </fieldset>
          <fieldset className="f2">
            <legend>Lachers</legend>
            <Stack m={2} spacing={3} sx={field}>
              <TextField
                type="text"
                label={`Lachers Du ${jourEtAnneP}`}
                required
                value={form.lachersAnnee}
                onChange={(e) => updateForm({ lachersAnnee: e.target.value })}
              />
              <TextField
                type="text"
                label={`Lachers Du ${jourEtAnneP}`}
                required
                value={form.lachersMois}
                onChange={(e) => updateForm({ lachersMois: e.target.value })}
              />
              <TextField
                type="text"
                label={`Lachers Du ${jourEtAnneP}`}
                required
                value={form.lachersJour}
                onChange={(e) => updateForm({ lachersJour: e.target.value })}
              />
              <TextField
                type="text"
                label="Lachers(*)"
                required
                value={form.probs}
                onChange={(e) => updateForm({ probs: e.target.value })}
              />
            </Stack>
          </fieldset>

          <fieldset className="f2">
            <legend>Apports</legend>
            <Stack m={2} spacing={3} sx={field}>
              <TextField
                type="text"
                label=" Moyenne Période "
                required
                value={form.moyPeriode}
                onChange={(e) => updateForm({ moyPeriode: e.target.value })}
              />
              <TextField
                type="text"
                label={`Apports Du ${jourP}`}
                required
                value={form.apportsCummule}
                onChange={(e) => updateForm({ apportsCummule: e.target.value })}
              />

              <TextField
                type="text"
                label="Moyenne Du Mois"
                required
                value={form.moyMois}
                onChange={(e) => updateForm({ moyMois: e.target.value })}
              />
              <TextField
                type="text"
                label={`Apports Du ${jourP}`}
                required
                value={form.apportMois}
                onChange={(e) => updateForm({ apportMois: e.target.value })}
              />
              <TextField
                type="text"
                label={`Apports Du ${jourP}`}
                required
                value={form.apportJour}
                onChange={(e) => updateForm({ apportJour: e.target.value })}
              />
            </Stack>
          </fieldset>

          {error && <Alert severity="error">{error}</Alert>}
          <Box style={box}>
            <Button
              variant="contained"
              type="submit"
              sx={buttonS}
              endIcon={<SendIcon />}
            >
              Mettre à jour
            </Button>
          </Box>
          <div>
            Si Vous Voulez Ajouter un autre barrage,{"   "}
            <NavLink className="ajouter" to="/Add">
              Cliquer ici
            </NavLink>
          </div>
        </Stack>
      </form>
    </Box>
  );
}

export default Change;
