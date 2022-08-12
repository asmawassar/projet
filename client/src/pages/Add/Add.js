import { TextField } from "@mui/material";
import { NavLink } from "react-router-dom";

function Add() {
  const jour = new Date().getDate();
  const mois = new Date().getMonth() + 1;
  const annee = new Date().getFullYear();
  const anneeP = `${jour}/${mois}/${annee - 1}`;
  const anneeC = `${jour}/${mois}/${annee}`;
  const jourP = `${jour - 1}/${mois}/${annee - 1}`;
  const jourC = `${jour}/${mois}/${annee - 1}`;
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
      <form className="formA" method="post">
        <div className="row">
          <div className="col1">
            <label className="labelA" for="ajout">
              Saisir votre barrage à ajouter :
            </label>
          </div>
          <div className="col2">
            <TextField
              type="text"
              label="Saisir votre indicateur à ajouter"
              variant="outlined"
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
                <TextField type="text" label="Lacher" variant="outlined" />
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
                />
              </div>
            </div>
          </fieldset>
        </fieldset>

        <fieldset className="f1">
          <legend>
            <strong>Situation Hydraulique des Barrages Du {anneeC}</strong>
          </legend>
          <div className="row">
            <div className="col1">
              <label className="labelA" for="ind16">
                Bassin versant(Km²) :
              </label>
            </div>
            <div className="col2">
              <TextField
                type="text"
                label="ajouter valeur"
                variant="outlined"
              />
            </div>
          </div>
          <fieldset className="f2">
            <legend>Apports</legend>
            <div className="row">
              <div className="col1">
                <label className="labelA" for="ind17">
                  Apport Annuel Moyen(M m3) :
                </label>
              </div>
              <div className="col2">
                <TextField
                  type="text"
                  label="ajouter valeur"
                  variant="outlined"
                />
              </div>
            </div>
            <div className="row">
              <div className="col1">
                <label className="labelA" for="ind18">
                  Apport Min depuis mise en eau(M m3) :
                </label>
              </div>
              <div className="col2">
                <TextField
                  type="text"
                  label="ajouter valeur"
                  variant="outlined"
                />
              </div>
            </div>
          </fieldset>
          <fieldset className="f2">
            <legend>Retenue Noramle</legend>
            <div className="row">
              <div className="col1">
                <label className="labelA" for="ind19">
                  Côte(m):
                </label>
              </div>
              <div className="col2">
                <TextField
                  type="text"
                  label="ajouter valeur"
                  variant="outlined"
                />
              </div>
            </div>
            <div className="row">
              <div className="col1">
                <label className="labelA" for="ind20">
                  Cap totale initiale(M m3) :
                </label>
              </div>
              <div className="col2">
                <TextField
                  type="text"
                  label="ajouter valeur"
                  variant="outlined"
                />
              </div>
            </div>
            <div className="row">
              <div className="col1">
                <label className="labelA" for="ind21">
                  Cap utile actuelle(M m3) :
                </label>
              </div>
              <div className="col2">
                <TextField
                  type="text"
                  label="ajouter valeur"
                  variant="outlined"
                />
              </div>
            </div>
          </fieldset>
          <div className="row">
            <div className="col1">
              <label className="labelA" for="ind22">
                Volume Régul Calculé(M m3) :
              </label>
            </div>
            <div className="col2">
              <TextField
                type="text"
                label="ajouter valeur"
                variant="outlined"
              />
            </div>
          </div>
          <div className="row">
            <div className="col1">
              <label className="labelA" for="ind23">
                Débits max Evacué(m3/s)
              </label>
            </div>
            <div className="col2">
              <TextField
                type="text"
                label="ajouter valeur"
                variant="outlined"
              />
            </div>
          </div>
          <fieldset className="f2">
            <legend>Envasement des retenues</legend>
            <div className="row">
              <div className="col1">
                <label className="labelA" for="ind24">
                  Envasement des retenues mesuré(M m3) :
                </label>
              </div>
              <div className="col2">
                <TextField
                  type="text"
                  label="ajouter valeur"
                  variant="outlined"
                />
              </div>
            </div>
            <div className="row">
              <div className="col1">
                <label className="labelA" for="ind25">
                  Envasement des retenues annuel(M m3):
                </label>
              </div>
              <div className="col2">
                <TextField
                  type="text"
                  label="ajouter valeur"
                  variant="outlined"
                />
              </div>
            </div>
            <div className="row">
              <div className="col1">
                <label className="labelA" for="ind26">
                  Pourcentage d'Envasement(%) :
                </label>
              </div>
              <div className="col2">
                <TextField
                  type="text"
                  label="ajouter valeur"
                  variant="outlined"
                />
              </div>
            </div>
            <div className="row">
              <div className="col1">
                <label className="labelA" for="ind27">
                  Erosion du BV(mm/an) :
                </label>
              </div>
              <div className="col2">
                <TextField
                  type="text"
                  label="ajouter valeur"
                  variant="outlined"
                />
              </div>
            </div>
          </fieldset>
          <div className="row">
            <div className="col1">
              <label className="labelA" for="ind28">
                Cap utile calculé(M m3) :
              </label>
            </div>
            <div className="col2">
              <TextField
                type="text"
                label="ajouter valeur"
                variant="outlined"
              />
            </div>
          </div>
          <fieldset className="f2">
            <legend>Année Hydraulique Précédente</legend>
            <div className="row">
              <div className="col1">
                <label className="labelA" for="ind29">
                  Plan d'eau(m) :
                </label>
              </div>
              <div className="col2">
                <TextField
                  type="text"
                  label="ajouter valeur"
                  variant="outlined"
                />
              </div>
            </div>
            <div className="row">
              <div className="col1">
                <label className="labelA" for="ind30">
                  Volume(M m3):
                </label>
              </div>
              <div className="col2">
                <TextField
                  type="text"
                  label="ajouter valeur"
                  variant="outlined"
                />
              </div>
            </div>
            <div className="row">
              <div className="col1">
                <label className="labelA" for="ind31">
                  Apport(M m3) :
                </label>
              </div>
              <div className="col2">
                <TextField
                  type="text"
                  label="ajouter valeur"
                  variant="outlined"
                />
              </div>
            </div>
            <div className="row">
              <div className="col1">
                <label className="labelA" for="ind32">
                  Soutirage(M m3) :
                </label>
              </div>
              <div className="col2">
                <TextField
                  type="text"
                  label="ajouter valeur"
                  variant="outlined"
                />
              </div>
            </div>
          </fieldset>
          <div className="row">
            <div className="col1">
              <label className="labelA" for="ind33">
                Côte plan d'eau(m) :
              </label>
            </div>
            <div className="col2">
              <TextField
                type="text"
                label="ajouter valeur"
                variant="outlined"
              />
            </div>
          </div>
          <div className="row">
            <div className="col1">
              <label className="labelA" for="ind34">
                Volume correspondant(M m3) :
              </label>
            </div>
            <div className="col2">
              <TextField
                type="text"
                label="ajouter valeur"
                variant="outlined"
              />
            </div>
          </div>
          <div className="row">
            <div className="col1">
              <label className="labelA" for="ind35">
                Volume correspondant utilisable(M m3) :
              </label>
            </div>
            <div className="col2">
              <TextField
                type="text"
                label="ajouter valeur"
                variant="outlined"
              />
            </div>
          </div>
          <div className="row">
            <div className="col1">
              <label className="labelA" for="ind36">
                Soutirage du {anneeC} (M m3) :
              </label>
            </div>
            <div className="col2">
              <TextField
                type="text"
                label="ajouter valeur"
                variant="outlined"
              />
            </div>
          </div>
          <div className="row">
            <div className="col1">
              <label className="labelA" for="ind37">
                Apport du "jour prec"(M m3) :
              </label>
            </div>
            <div className="col2">
              <TextField
                type="text"
                label="ajouter valeur"
                variant="outlined"
              />
            </div>
          </div>
          <div className="row">
            <div className="col1">
              <label className="labelA" for="ind38">
                Apport du mois au "jour prec"(M m3) :
              </label>
            </div>
            <div className="col2">
              <TextField
                type="text"
                label="ajouter valeur"
                variant="outlined"
              />
            </div>
          </div>
          <div className="row">
            <div className="col1">
              <label className="labelA" for="ind39">
                Pluv(mm) :
              </label>
            </div>
            <div className="col2">
              <TextField
                type="text"
                label="ajouter valeur"
                variant="outlined"
              />
            </div>
          </div>
          <div className="row">
            <div className="col1">
              <label className="labelA" for="ind40">
                R.S.(g/l) :
              </label>
            </div>
            <div className="col2">
              <TextField
                type="text"
                label="ajouter valeur"
                variant="outlined"
              />
            </div>
          </div>
        </fieldset>
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
