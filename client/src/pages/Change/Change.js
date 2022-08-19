import { TextField, Toolbar, Alert, Box, Stack, Button } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { UserContext } from "../../action/acces";
import axios from "axios";
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
      <Toolbar />
      <h1>
        Bienvenue {Gender()} {user.lastName.toUpperCase()} {user.firstName.toUpperCase()}
      </h1>
      <h3>update barrage {barrage.nomBarrage} :</h3>
      <h5>Ces Données sont observées à 7h {anneeC}</h5>
      <form className="formA" method="post" onSubmit={onSubmit} style={formS}>
        <Stack m={2} spacing={3} sx={stack} value="true">
          <fieldset className="f2">
            <legend>Stocks Aux Barrages</legend>
            <Stack m={2} spacing={3} sx={field}>
              <TextField
                type="text"
                label={`Stocks Du ${anneeP}`}
                value={form.stockBarrageC}
                onChange={(e) => updateForm({ stockBarrageC: e.target.value })}
                required
              />
              <TextField
                type="text"
                label={` Stocks Du ${anneeC}`}
                value={form.stockBarrageP}
                onChange={(e) => updateForm({ stockBarrageP: e.target.value })}
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
                value={form.lachersJourP}
                onChange={(e) => updateForm({ lachersJourP: e.target.value })}
              />
              <TextField
                type="text"
                label={`Lachers au ${jourP}`}
                required
                value={form.lachersJourC}
                onChange={(e) => updateForm({ lachersJourC: e.target.value })}
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
                label="Moyenne Du Mois"
                required
                value={form.moyMois}
                onChange={(e) => updateForm({ moyMois: e.target.value })}
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
              update
            </Button>
          </Box>
          <div>
            Si Vous Voulez Ajouter un autre indicateur,{"   "}
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
