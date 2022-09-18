import {
  TextField,
  Grid,
  Alert,
  Box,
  Paper,
  Typography,
  CssBaseline,
  Button,
} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { UserContext } from "../../action/acces";
import axios from "axios";
import Header from "../../components/Header/Header3";
import { box, buttonS } from "./style";
import SendIcon from "@mui/icons-material/Send";
import {
  jourP,
  jourEtAnneP,
  Gender,
  annee,
  mois,
  anneeC,
  FormC,
} from "../Add/actions";
import { wallpaper } from "../Dashboard/style";
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
    <Box className="container" style={wallpaper}>
      <Header />
      <Grid container component="main">
        <CssBaseline />
        <Grid
          item
          sm={12}
          md={6}
          component={Paper}
          sx={{
            background:
              "linear-gradient(rgb(212, 207, 198), rgb(212, 207, 198, 0.8))",
            marginTop: "15vh",
            marginBottom: "5vh",
          }}
          elevation={20}
        >
          <Box sx={box}>
            <Typography sx={{ color: "purple", fontSize: "18.5px" }}>
              <i>
                <h2>
                  Bienvenue {Gender()} {user.lastName.toUpperCase()}{" "}
                  {user.firstName.toUpperCase()}
                </h2>
                <h3>Update Barrage {barrage.nomBarrage} :</h3>
                <h5>Ces Données sont observées à 7h {anneeC}</h5>
              </i>
            </Typography>
            <Box component="form" sx={{ mt: 1 }} noValidate onSubmit={onSubmit}>
              <fieldset className="f2">
                <legend>Stocks Aux Barrages</legend>
                <TextField
                  type="text"
                  label={`Stocks Du ${jourP}`}
                  sx={{ width: "70%", ml: "15%", mb: 3, mt: 3 }}
                  value={form.stockBarrage}
                  onChange={(e) => updateForm({ stockBarrage: e.target.value })}
                  required
                />
              </fieldset>
              <fieldset className="f2">
                <legend>Lachers</legend>

                <TextField
                  type="text"
                  sx={{ width: "45%", mr: "10%", mt: 3 }}
                  label={`Lachers cumulée Du ${annee}`}
                  required
                  value={form.lachersAnnee}
                  onChange={(e) => updateForm({ lachersAnnee: e.target.value })}
                />
                <TextField
                  type="text"
                  sx={{ width: "45%", mt: 3 }}
                  label={`Lachers cumulée Du mois ${mois}`}
                  required
                  value={form.lachersMois}
                  onChange={(e) => updateForm({ lachersMois: e.target.value })}
                />
                <TextField
                  sx={{ width: "45%", mr: "10%", mt: 3, mb: 3 }}
                  type="text"
                  label={`Lachers Du ${jourEtAnneP}`}
                  required
                  value={form.lachersJour}
                  onChange={(e) => updateForm({ lachersJour: e.target.value })}
                />
                <TextField
                  sx={{ width: "45%", mt: 3, mb: 3 }}
                  type="text"
                  label="Lachers(*)"
                  required
                  value={form.probs}
                  onChange={(e) => updateForm({ probs: e.target.value })}
                />
              </fieldset>

              <fieldset className="f2">
                <legend>Apports</legend>

                <TextField
                  sx={{ width: "45%", mr: "10%", mt: 3, mb: 3 }}
                  type="text"
                  label=" Moyenne Période "
                  required
                  value={form.moyPeriode}
                  onChange={(e) => updateForm({ moyPeriode: e.target.value })}
                />
                <TextField
                  sx={{ width: "45%", mt: 3, mb: 3 }}
                  type="text"
                  label={`Apports cumulé Du ${annee}`}
                  required
                  value={form.apportsCummule}
                  onChange={(e) =>
                    updateForm({ apportsCummule: e.target.value })
                  }
                />

                <TextField
                  sx={{ width: "45%", mr: "10%", mb: 3 }}
                  type="text"
                  label="Moyenne Du Mois"
                  required
                  value={form.moyMois}
                  onChange={(e) => updateForm({ moyMois: e.target.value })}
                />
                <TextField
                  sx={{ width: "45%", mb: 3 }}
                  type="text"
                  label={`Apports Du mois ${mois}`}
                  required
                  value={form.apportMois}
                  onChange={(e) => updateForm({ apportMois: e.target.value })}
                />
                <TextField
                  sx={{ width: "70%", ml: "15%", mb: 3 }}
                  type="text"
                  label={`Apports Du ${jourP}`}
                  required
                  value={form.apportJour}
                  onChange={(e) => updateForm({ apportJour: e.target.value })}
                />
              </fieldset>

              <center>
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
              </center>
              <div>
                Si Vous Voulez Ajouter un autre barrage,{"   "}
                <NavLink className="ajouter" to="/Add">
                  Cliquer ici
                </NavLink>
              </div>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Change;
