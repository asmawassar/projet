import { NavLink } from "react-router-dom";

function Change() {
  return (
    <div class="container">
      <div className="head">
        <h1>Bienvenue Mr/Mrs ... dans l'interface des indicateurs</h1>
        <h3>
          Veuillez remplir les cases suivantes avec les valeurs correspondantes
          :{" "}
        </h3>
        <h5>Ces Données sont observées à 7h "aujourdhui"</h5>
      </div>
      <form method="post">
        <fieldset className="f1">
          <legend>
            <strong>Apports Et Lachers Des Barrages</strong>
          </legend>
          <fieldset className="f2">
            <legend>Stocks Aux Barrages</legend>
            <div class="row">
              <div class="col1">
                <label for="ind1">Stocks Du "aujourd'hui 3amnewel" :</label>
              </div>
              <div class="col2">
                <input
                  type="number"
                  id="ind1"
                  name="ind1"
                  placeholder="Saisir une valeur..."
                ></input>
              </div>
            </div>
            <div class="row">
              <div class="col1">
                <label for="ind2">Stocks Du "aujourd'hui " :</label>
              </div>
              <div class="col2">
                <input
                  type="number"
                  id="ind2"
                  name="ind2"
                  placeholder="Saisir une valeur..."
                ></input>
              </div>
            </div>
            <div class="row">
              <div class="col1">
                <label for="ind3">
                  Pourcentage Du Plénitude Du "aujourdhui" :
                </label>
              </div>
              <div class="col2">
                <input
                  type="number"
                  id="ind3"
                  name="ind3"
                  placeholder="Saisir une valeur..."
                ></input>
              </div>
            </div>
          </fieldset>
          <fieldset className="f2">
            <legend>Apports</legend>
            <div class="row">
              <div class="col1">
                <label for="ind4">Apports Du "jour precendent" :</label>
              </div>
              <div class="col2">
                <input
                  type="number"
                  id="ind4"
                  name="ind4"
                  placeholder="Saisir une valeur..."
                ></input>
              </div>
            </div>
            <div class="row">
              <div class="col1">
                <label for="ind5">Apports Du Mois au "jour precendent" :</label>
              </div>
              <div class="col2">
                <input
                  type="number"
                  id="ind5"
                  name="ind5"
                  placeholder="Saisir une valeur..."
                ></input>
              </div>
            </div>
            <div class="row">
              <div class="col1">
                <label for="ind6">Moyenne Du Mois :</label>
              </div>
              <div class="col2">
                <input
                  type="number"
                  id="ind6"
                  name="ind6"
                  placeholder="Saisir une valeur..."
                ></input>
              </div>
            </div>
            <div class="row">
              <div class="col1">
                <label for="ind7">
                  Apports Cumulés Du 01/09/21 au "02/08/22=jour precendent" :
                </label>
              </div>
              <div class="col2">
                <input
                  type="number"
                  id="ind7"
                  name="ind7"
                  placeholder="Saisir une valeur..."
                ></input>
              </div>
            </div>
            <div class="row">
              <div class="col1">
                <label for="ind8">
                  Apports Cumulés Du 01/09/20 au "02/08/21=jour precendent" :
                </label>
              </div>
              <div class="col2">
                <input
                  type="number"
                  id="ind8"
                  name="ind8"
                  placeholder="Saisir une valeur..."
                ></input>
              </div>
            </div>
            <div class="row">
              <div class="col1">
                <label for="ind9">Moyenne Période :</label>
              </div>
              <div class="col2">
                <input
                  type="number"
                  id="ind9"
                  name="ind9"
                  placeholder="Saisir une valeur..."
                ></input>
              </div>
            </div>
          </fieldset>
          <fieldset className="f2">
            <legend>Lachers</legend>
            <div class="row">
              <div class="col1">
                <label for="ind10">
                  Lachers Du "jour precendent du this year" :
                </label>
              </div>
              <div class="col2">
                <input
                  type="number"
                  id="ind10"
                  name="ind10"
                  placeholder="Saisir une valeur..."
                ></input>
              </div>
            </div>
            <div class="row">
              <div class="col1">
                <label for="ind11">
                  Lachers au "jour precendent du year ago" :
                </label>
              </div>
              <div class="col2">
                <input
                  type="number"
                  id="ind11"
                  name="ind11"
                  placeholder="Saisir une valeur..."
                ></input>
              </div>
            </div>
            <div class="row">
              <div class="col1">
                <label for="ind12">Lachers(*) :</label>
              </div>
              <div class="col2">
                <input
                  type="text"
                  id="ind12"
                  name="ind12"
                  placeholder="Saisir un symbole..."
                ></input>
              </div>
            </div>
            <div class="row">
              <div class="col1">
                <label for="ind13">
                  Lachers Cumulées Du Mois au "02/08/22=jour precendent" :
                </label>
              </div>
              <div class="col2">
                <input
                  type="number"
                  id="ind13"
                  name="ind13"
                  placeholder="Saisir une valeur..."
                ></input>
              </div>
            </div>
            <div class="row">
              <div class="col1">
                <label for="ind14">
                  Lachers Cumulées Du l'année au "02/08/21=jour precendent" :
                </label>
              </div>
              <div class="col2">
                <input
                  type="number"
                  id="ind14"
                  name="ind14"
                  placeholder="Saisir une valeur..."
                ></input>
              </div>
            </div>
            <div class="row">
              <div class="col1">
                <label for="ind15">
                  Lachers Cumulées Du l'année prec au "02/08/21=jour precendent"
                  :
                </label>
              </div>
              <div class="col2">
                <input
                  type="number"
                  id="ind15"
                  name="ind15"
                  placeholder="Saisir une valeur..."
                ></input>
              </div>
            </div>
          </fieldset>
        </fieldset>
        <fieldset className="f1">
          <legend>
            <strong>Situation Hydraulique des Barrages Du jour-ji</strong>
          </legend>
          <div class="row">
            <div class="col1">
              <label for="ind16" class="uniq">
                Bassin versant(Km²) :
              </label>
            </div>
            <div class="col2">
              <input
                type="number"
                id="ind16"
                name="ind16"
                placeholder="Saisir une valeur..."
              ></input>
            </div>
          </div>
          <fieldset className="f2">
            <legend>Apports</legend>
            <div class="row">
              <div class="col1">
                <label for="ind17">Apport Annuel Moyen(M m3) :</label>
              </div>
              <div class="col2">
                <input
                  type="number"
                  id="ind17"
                  name="ind17"
                  placeholder="Saisir une valeur..."
                ></input>
              </div>
            </div>
            <div class="row">
              <div class="col1">
                <label for="ind18">Apport Min depuis mise en eau(M m3) :</label>
              </div>
              <div class="col2">
                <input
                  type="number"
                  id="ind18"
                  name="ind18"
                  placeholder="Saisir une valeur..."
                ></input>
              </div>
            </div>
          </fieldset>
          <fieldset className="f2">
            <legend>Retenue Noramle</legend>
            <div class="row">
              <div class="col1">
                <label for="ind19">Côte(m):</label>
              </div>
              <div class="col2">
                <input
                  type="number"
                  id="ind19"
                  name="ind19"
                  placeholder="Saisir une valeur..."
                ></input>
              </div>
            </div>
            <div class="row">
              <div class="col1">
                <label for="ind20">Cap totale initiale(M m3) :</label>
              </div>
              <div class="col2">
                <input
                  type="number"
                  id="ind20"
                  name="ind20"
                  placeholder="Saisir une valeur..."
                ></input>
              </div>
            </div>
            <div class="row">
              <div class="col1">
                <label for="ind21">Cap utile actuelle(M m3) :</label>
              </div>
              <div class="col2">
                <input
                  type="number"
                  id="ind21"
                  name="ind21"
                  placeholder="Saisir une valeur..."
                ></input>
              </div>
            </div>
          </fieldset>
          <div class="row">
            <div class="col1">
              <label for="ind22" class="uniq">
                Volume Régul Calculé(M m3) :
              </label>
            </div>
            <div class="col2">
              <input
                type="number"
                id="ind22"
                name="ind22"
                placeholder="Saisir une valeur..."
              ></input>
            </div>
          </div>
          <div class="row">
            <div class="col1">
              <label for="ind23" class="uniq">
                Débits max Evacué(m3/s)
              </label>
            </div>
            <div class="col2">
              <input
                type="number"
                id="ind23"
                name="ind23"
                placeholder="Saisir une valeur..."
              ></input>
            </div>
          </div>
          <fieldset className="f2">
            <legend>Envasement des retenues</legend>
            <div class="row">
              <div class="col1">
                <label for="ind24">
                  Envasement des retenues mesuré(M m3) :
                </label>
              </div>
              <div class="col2">
                <input
                  type="number"
                  id="ind24"
                  name="ind24"
                  placeholder="Saisir une valeur..."
                ></input>
              </div>
            </div>
            <div class="row">
              <div class="col1">
                <label for="ind25">Envasement des retenues annuel(M m3):</label>
              </div>
              <div class="col2">
                <input
                  type="number"
                  id="ind25"
                  name="ind25"
                  placeholder="Saisir une valeur..."
                ></input>
              </div>
            </div>
            <div class="row">
              <div class="col1">
                <label for="ind26">Pourcentage d'Envasement(%) :</label>
              </div>
              <div class="col2">
                <input
                  type="number"
                  id="ind26"
                  name="ind26"
                  placeholder="Saisir une valeur..."
                ></input>
              </div>
            </div>
            <div class="row">
              <div class="col1">
                <label for="ind27">Erosion du BV(mm/an) :</label>
              </div>
              <div class="col2">
                <input
                  type="number"
                  id="ind27"
                  name="ind27"
                  placeholder="Saisir une valeur..."
                ></input>
              </div>
            </div>
          </fieldset>
          <div class="row">
            <div class="col1">
              <label for="ind28" class="uniq">
                Cap utile calculé(M m3) :
              </label>
            </div>
            <div class="col2">
              <input
                type="number"
                id="ind28"
                name="ind28"
                placeholder="Saisir une valeur..."
              ></input>
            </div>
          </div>
          <fieldset className="f2">
            <legend>Année Hydraulique Précédente</legend>
            <div class="row">
              <div class="col1">
                <label for="ind29">Plan d'eau(m) :</label>
              </div>
              <div class="col2">
                <input
                  type="number"
                  id="ind29"
                  name="ind29"
                  placeholder="Saisir une valeur..."
                ></input>
              </div>
            </div>
            <div class="row">
              <div class="col1">
                <label for="ind30">Volume(M m3):</label>
              </div>
              <div class="col2">
                <input
                  type="number"
                  id="ind30"
                  name="ind30"
                  placeholder="Saisir une valeur..."
                ></input>
              </div>
            </div>
            <div class="row">
              <div class="col1">
                <label for="ind31">Apport(M m3) :</label>
              </div>
              <div class="col2">
                <input
                  type="number"
                  id="ind31"
                  name="ind31"
                  placeholder="Saisir une valeur..."
                ></input>
              </div>
            </div>
            <div class="row">
              <div class="col1">
                <label for="ind32">Soutirage(M m3) :</label>
              </div>
              <div class="col2">
                <input
                  type="number"
                  id="ind32"
                  name="ind32"
                  placeholder="Saisir une valeur..."
                ></input>
              </div>
            </div>
          </fieldset>
          <div class="row">
            <div class="col1">
              <label for="ind33" class="uniq">
                Côte plan d'eau(m) :
              </label>
            </div>
            <div class="col2">
              <input
                type="number"
                id="ind33"
                name="ind33"
                placeholder="Saisir une valeur..."
              ></input>
            </div>
          </div>
          <div class="row">
            <div class="col1">
              <label for="ind34" class="uniq">
                Volume correspondant(M m3) :
              </label>
            </div>
            <div class="col2">
              <input
                type="number"
                id="ind34"
                name="ind34"
                placeholder="Saisir une valeur..."
              ></input>
            </div>
          </div>
          <div class="row">
            <div class="col1">
              <label for="ind35" class="uniq">
                Volume correspondant utilisable(M m3) :
              </label>
            </div>
            <div class="col2">
              <input
                type="number"
                id="ind35"
                name="ind35"
                placeholder="Saisir une valeur..."
              ></input>
            </div>
          </div>
          <div class="row">
            <div class="col1">
              <label for="ind36" class="uniq">
                Soutirage du "jour prec"(M m3) :
              </label>
            </div>
            <div class="col2">
              <input
                type="number"
                id="ind36"
                name="ind36"
                placeholder="Saisir une valeur..."
              ></input>
            </div>
          </div>
          <div class="row">
            <div class="col1">
              <label for="ind37" class="uniq">
                Apport du "jour prec"(M m3) :
              </label>
            </div>
            <div class="col2">
              <input
                type="number"
                id="ind37"
                name="ind37"
                placeholder="Saisir une valeur..."
              ></input>
            </div>
          </div>
          <div class="row">
            <div class="col1">
              <label for="ind38" class="uniq">
                Apport du mois au "jour prec"(M m3) :
              </label>
            </div>
            <div class="col2">
              <input
                type="number"
                id="ind38"
                name="ind38"
                placeholder="Saisir une valeur..."
              ></input>
            </div>
          </div>
          <div class="row">
            <div class="col1">
              <label for="ind39" class="uniq">
                Pluv(mm) :
              </label>
            </div>
            <div class="col2">
              <input
                type="number"
                id="ind39"
                name="ind39"
                placeholder="Saisir une valeur..."
              ></input>
            </div>
          </div>
          <div class="row">
            <div class="col1">
              <label for="ind40" class="uniq">
                R.S.(g/l) :
              </label>
            </div>
            <div class="col2">
              <input
                type="number"
                id="ind40"
                name="ind40"
                placeholder="Saisir une valeur..."
              ></input>
            </div>
          </div>
        </fieldset>
        <div class="row">
          <div class="sumbit">
            <input
              type="Submit"
              id="sub"
              name="sub"
              value="Enregistrer"
            ></input>
          </div>
        </div>
      </form>
      <h3>Si Vous Voulez Ajouter un autre indicateur,</h3>{" "}
      <NavLink className="ajouter" to="/Add">
        <h3>Cliquer ici</h3>
      </NavLink>
      .
    </div>
  );
}

export default Change;
