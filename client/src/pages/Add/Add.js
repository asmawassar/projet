import { TextField } from "@mui/material";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { Alert } from "@mui/material";
import axios from "axios";

function Add() {
  const jour = new Date().getDate();
  const mois = new Date().getMonth() + 1;
  const annee = new Date().getFullYear();
  const anneeP = `${jour}/${mois}/${annee - 1}`;
  const anneeC = `${jour}/${mois}/${annee}`;
  const jourP = `${jour - 1}/${mois}/${annee - 1}`;
  const jourC = `${jour}/${mois}/${annee - 1}`;

  const [form, setForm] = useState({
    nomBarrage: "",
    StockJour: "",
    StockBarrage: "",
    pourcentageStock: "",
    LacherJour: "",
    LacherJourL: "",
    LacherLastYear: "",
    LacherThisYear: "",
    LacherMois: "",
    probs: "",
    MoyPeriode: "",
    cumuleLastYear: "",
    cumuleThisYear: "",
    moyMois: "",
    apportMois: "",
    apportJour: "",
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

    axios({
      method: "post",
      url: "http://localhost:5000/barrage/addBarrage",
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
    <div className="container">
      <div className="head">
        <h1>Bienvenue Mr/Mrs ... dans l'interface des indicateurs</h1>
        <h3>
          Veuillez remplir les cases suivantes avec les valeurs correspondantes
          :{" "}
        </h3>
        <h5>Ces Données sont observées à 7h {anneeC}</h5>
      </div>
      <form className="formA" method="post" onSubmit={onSubmit}>
        <div className="row">
          <div className="col1">
            <label className="labelA" for="ajout">
              Saisir votre indicateur à ajouter :
            </label>
          </div>
          <div className="col2">
            <TextField
              type="text"
              label="Saisir votre indicateur à ajouter"
              variant="outlined"
              value={form.nomBarrage}
              onChange={(e) => updateForm({ nomBarrage: e.target.value })}
            />
          </div>
        </div>

        <fieldset className="f1">
          <legend>
            <strong>Apports Et Lachers Des Barrages</strong>
          </legend>

          <fieldset className="f2">
            <legend>Stocks Aux Barrages</legend>

            <div className="row">
              <div className="col1">
                <label className="labelA" for="ind1">
                  Stocks Du {anneeP} :
                </label>
              </div>

              <div className="col2">
                <TextField
                  type="text"
                  label="ajouter valeur"
                  variant="outlined"
                  value={form.StockJour}
                  onChange={(e) => updateForm({ StockJour: e.target.value })}
                />
              </div>
            </div>

            <div className="row">
              <div className="col1">
                <label className="labelA" for="ind2">
                  Stocks Du {anneeC} :
                </label>
              </div>
              <div className="col2">
                <TextField
                  type="text"
                  label="ajouter valeur"
                  variant="outlined"
                  value={form.StockBarrage}
                  onChange={(e) => updateForm({ StockBarrage: e.target.value })}
                />
              </div>
            </div>

            <div className="row">
              <div className="col1">
                <label className="labelA" for="ind3">
                  Pourcentage Du Plénitude Du {anneeC} :
                </label>
              </div>
              <div className="col2">
                <TextField
                  type="text"
                  label="ajouter valeur"
                  variant="outlined"
                  value={form.pourcentageStock}
                  onChange={(e) =>
                    updateForm({ pourcentageStock: e.target.value })
                  }
                />
              </div>
            </div>
          </fieldset>

          <fieldset className="f2">
            <legend>Apports</legend>

            <div className="row">
              <div className="col1">
                <label className="labelA" for="ind4">
                  Apports Du {anneeP} :
                </label>
              </div>
              <div className="col2">
                <TextField
                  type="text"
                  label="ajouter valeur"
                  variant="outlined"
                  value={form.apportJour}
                  onChange={(e) => updateForm({ apportJour: e.target.value })}
                />
              </div>
            </div>

            <div className="row">
              <div className="col1">
                <label className="labelA" for="ind5">
                  Apports Du Mois au {anneeP} :
                </label>
              </div>
              <div className="col2">
                <TextField
                  type="text"
                  label="ajouter valeur"
                  variant="outlined"
                  value={form.apportMois}
                  onChange={(e) => updateForm({ apportMois: e.target.value })}
                />
              </div>
            </div>

            <div className="row">
              <div className="col1">
                <label className="labelA" for="ind6">
                  Moyenne Du Mois :
                </label>
              </div>
              <div className="col2">
                <TextField
                  type="text"
                  label="ajouter valeur"
                  variant="outlined"
                  value={form.moyMois}
                  onChange={(e) => updateForm({ moyMois: e.target.value })}
                />
              </div>
            </div>

            <div className="row">
              <div className="col1">
                <label className="labelA" for="ind7">
                  Apports Cumulés Du 01/09/21 au {anneeC} :
                </label>
              </div>
              <div className="col2">
                <TextField
                  type="text"
                  label="ajouter valeur"
                  variant="outlined"
                  value={form.cumuleThisYear}
                  onChange={(e) =>
                    updateForm({ cumuleThisYear: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="row">
              <div className="col1">
                <label className="labelA" for="ind8">
                  Apports Cumulés Du 01/09/20 au {anneeP} :
                </label>
              </div>
              <div className="col2">
                <TextField
                  type="text"
                  label="ajouter valeur"
                  variant="outlined"
                  value={form.cumuleLastYear}
                  onChange={(e) =>
                    updateForm({ cumuleLastYear: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="row">
              <div className="col1">
                <label className="labelA" for="ind9">
                  Moyenne Période :
                </label>
              </div>
              <div className="col2">
                <TextField
                  type="text"
                  label="ajouter valeur"
                  variant="outlined"
                  value={form.MoyPeriode}
                  onChange={(e) => updateForm({ MoyPeriode: e.target.value })}
                />
              </div>
            </div>
          </fieldset>
          <fieldset className="f2">
            <legend>Lachers</legend>

            <div className="row">
              <div className="col1">
                <label className="labelA" for="ind10">
                  Lachers Du {anneeC} :
                </label>
              </div>
              <div className="col2">
                <TextField
                  type="text"
                  label="ajouter valeur"
                  variant="outlined"
                  value={form.LacherLastYear}
                  onChange={(e) =>
                    updateForm({ LacherLastYear: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="row">
              <div className="col1">
                <label className="labelA" for="ind11">
                  Lachers au {anneeP} :
                </label>
              </div>
              <div className="col2">
                <TextField
                  type="text"
                  label="ajouter valeur"
                  variant="outlined"
                  value={form.LacherThisYear}
                  onChange={(e) =>
                    updateForm({ LacherThisYear: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="row">
              <div className="col1">
                <label className="labelA" for="ind12">
                  Lachers(*) :
                </label>
              </div>
              <div className="col2">
                <TextField
                  type="text"
                  label="Lacher"
                  variant="outlined"
                  value={form.probs}
                  onChange={(e) => updateForm({ probs: e.target.value })}
                />
              </div>
            </div>

            <div className="row">
              <div className="col1">
                <label className="labelA" for="ind13">
                  Lachers Cumulées Du Mois au {anneeP} :
                </label>
              </div>
              <div className="col2">
                <TextField
                  type="text"
                  label="ajouter valeur"
                  variant="outlined"
                  value={form.LacherMois}
                  onChange={(e) => updateForm({ LacherMois: e.target.value })}
                />
              </div>
            </div>

            <div className="row">
              <div className="col1">
                <label className="labelA" for="ind14">
                  Lachers Cumulées Du l'année au {anneeC} :
                </label>
              </div>
              <div className="col2">
                <TextField
                  type="text"
                  label="ajouter valeur"
                  variant="outlined"
                  value={form.LacherJour}
                  onChange={(e) => updateForm({ LacherJour: e.target.value })}
                />
              </div>
            </div>

            <div className="row">
              <div className="col1">
                <label className="labelA" for="ind15">
                  Lachers Cumulées Du l'année prec au {anneeC}:
                </label>
              </div>
              <div className="col2">
                <TextField
                  type="text"
                  label="ajouter valeur"
                  variant="outlined"
                  value={form.LacherJourL}
                  onChange={(e) => updateForm({ LacherJourL: e.target.value })}
                />
              </div>
            </div>
          </fieldset>
        </fieldset>
        {error && <Alert severity="error">{error}</Alert>}
        {success ? (
          <Alert severity="success">
            Vous Avez Déjà un Compte, Connectez-vous!!
          </Alert>
        ) : (
          <div className="row">
            <div className="sumbit">
              <input
                className="submitA"
                type="Submit"
                id="sub"
                name="sub"
                value="Ajouter"
              ></input>
            </div>
          </div>
        )}
      </form>
      <h3>Si Vous Voulez Modifier les valeurs d'un indicateur,</h3>{" "}
      <NavLink className="modifier" to="/Change">
        <h3>Cliquer ici</h3>
      </NavLink>
      .
    </div>
  );
}

export default Add;
