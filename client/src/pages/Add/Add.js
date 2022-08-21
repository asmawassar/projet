import { TextField, Toolbar, Alert, Box, Stack, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { UserContext } from "../../action/acces";
import axios from "axios";
import { jourP, jourEtAnneP, Gender, anneeP, anneeC, Form, stocks } from "./actions";
import { formS, box, stack, field, buttonS } from "../Change/style";

function Add() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [form, setForm] = Form();
  const [error, setError] = React.useState("");
  const [next, setNext] = React.useState("");

  function nextF() {
    if (stocks(form.nomBarrage, form.stockBarrageC, form.stockBarrageP, form.pourcentageStock)) {
      setError("");
      if (next == "") setNext("next");
      if (next == "next") setNext("nextnext");
    }
    else (setError("remplir tous"))
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
        console.log(error.response.data)
      });
  }

  return (
    <Box className="container">
      <Toolbar />

      <h1>
        Bienvenue {Gender()} {user.lastName.toUpperCase()} {user.firstName}
      </h1>
      <h3>
        Veuillez remplir les cases suivantes avec les valeurs correspondantes :
      </h3>
      <h5>Ces Données sont observées à 7h {anneeC}</h5>
      <form className="formA" method="post" onSubmit={onSubmit} style={formS}>
        <Stack m={2} spacing={3} sx={stack}>
          {
            next === "" ? (
              <Stack >
                <TextField
                  type="text"
                  label=" Saisir votre barrage à ajouter"
                  value={form.nomBarrage}
                  onChange={(e) => updateForm({ nomBarrage: e.target.value })}
                  required
                />
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
                    <TextField
                      type="text"
                      label={`Pourcentage Du Plénitude Du ${anneeC}`}
                      value={form.pourcentageStock}
                      onChange={(e) =>
                        updateForm({ pourcentageStock: e.target.value })
                      }
                      required
                    />
                  </Stack>
                  <Button variant="contained" onClick={nextF} sx={buttonS}>
                    Next
                  </Button>
                </fieldset> </Stack>) : (
              <Stack>
                {next == "next" ? (<Stack>
                  <fieldset className="f2">
                    <legend>Lachers</legend>
                    <Stack m={2} spacing={3} sx={field}>
                      <TextField
                        type="text"
                        label={`Lachers Cumulées Du l'année ${jourEtAnneP}`}
                        value={form.lachersAnneeP}
                        onChange={(e) => updateForm({ lachersAnneeP: e.target.value })}
                        required
                      />
                      <TextField
                        type="text"
                        label={`Lachers Cumulées Du l'année au ${jourP}`}
                        value={form.lachersAnneeC}
                        onChange={(e) => updateForm({ lachersAnneeC: e.target.value })}
                      />
                      <TextField
                        type="text"
                        label={`Lachers Cumulées Du Mois au ${jourP}`}
                        required
                        value={form.lachersMoisC}
                        onChange={(e) => updateForm({ lachersMoisC: e.target.value })}
                      />
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
                    <Button variant="contained" onClick={backF} sx={buttonS}>
                      back
                    </Button>
                    <Button variant="contained" onClick={nextF} sx={buttonS}>
                      Next
                    </Button>

                  </fieldset>
                </Stack>) : (<Stack>
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
                        value={form.apportsCummuleP}
                        onChange={(e) =>
                          updateForm({ apportsCummuleP: e.target.value })
                        }
                      />
                      <TextField
                        type="text"
                        label={`Apports Cumulés Du 01/09/21 au ${jourP}`}
                        required
                        value={form.apportsCummuleC}
                        onChange={(e) =>
                          updateForm({ apportsCummuleC: e.target.value })
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
                    <Button variant="contained" onClick={backF} sx={buttonS}>
                      back
                    </Button>
                    <Button variant="contained" type="submit" sx={buttonS}>
                      Ajouter
                    </Button>
                  </Box></Stack>)}
              </Stack>
            )}
          {error && <Alert severity="error">{error}</Alert>}
        </Stack>
      </form>
    </Box>
  );
}

export default Add;
