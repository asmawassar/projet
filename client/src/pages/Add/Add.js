import { TextField, Toolbar, Alert, Box, Stack, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { UserContext } from "../../action/acces";
import axios from "axios";
import {
  jourP,
  jourEtAnneP,
  Gender,
  anneeP,
  anneeC,
  Form,
  stocks,
} from "./actions";
import { formS, box, stack, field, buttonS } from "../Change/style";

function Add() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [form, setForm] = Form();
  const [error, setError] = React.useState("");
  const [next, setNext] = React.useState("");

  function nextF() {
    if (
      stocks(
        form.nomBarrage,
        form.stockBarrageC,
        form.stockBarrageP,
        form.pourcentageStock
      )
    ) {
      setError("");
      if (next == "") setNext("next");
      if (next == "next") setNext("nextnext");
    } else setError("remplir tous");
  }
  function backF() {
    if (next == "next") setNext("");
    if (next == "nextnext") setNext("next");
  }
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
      url: "http://localhost:5000/barrage/addBarrage",
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
      <h5>Ces Données sont observées à 7h {anneeC}</h5>
      <form className="formA" method="post" onSubmit={onSubmit} style={formS}>
        <Stack m={2} spacing={3} sx={stack}>
          <Stack>
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
            </fieldset>{" "}
          </Stack>

          <Stack>
            <Stack>
              <fieldset className="f2">
                <legend>Lachers</legend>
                <Stack m={2} spacing={3} sx={field}>
                  <TextField
                    type="text"
                    label={`Lachers Cumulées Du l'année ${jourEtAnneP}`}
                    value={form.lachersAnnee}
                    onChange={(e) =>
                      updateForm({ lachersAnnee: e.target.value })
                    }
                    required
                  />
                  <TextField
                    type="text"
                    label={`Lachers Cumulées Du Mois au ${jourP}`}
                    required
                    value={form.lachersMois}
                    onChange={(e) =>
                      updateForm({ lachersMois: e.target.value })
                    }
                  />
                  <TextField
                    type="text"
                    label={`Lachers Du ${jourEtAnneP}`}
                    required
                    value={form.lachersJour}
                    onChange={(e) =>
                      updateForm({ lachersJour: e.target.value })
                    }
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
            </Stack>
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
                  label={`  Apports Cumulés Du 01/09/20 au ${jourEtAnneP}`}
                  required
                  value={form.apportsCummule}
                  onChange={(e) =>
                    updateForm({ apportsCummule: e.target.value })
                  }
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
                  label={` Apports Du Mois au ${jourP}`}
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
            <Box style={box}>
              {error && <Alert severity="error">{error}</Alert>}
              <Button variant="contained" type="submit" sx={buttonS}>
                Ajouter
              </Button>
            </Box>
          </Stack>
        </Stack>
      </form>
    </Box>
  );
}

export default Add;
