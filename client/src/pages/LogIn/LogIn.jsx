import axios from "axios";
import Header from "../../components/Header/Header2";
import React, { useContext } from "react";
import {
  Alert,
  Box,
  Checkbox,
  Button,
  TextField,
  Avatar,
  Grid,
  CssBaseline,
  FormControlLabel,
  Paper,
  Typography,
} from "@mui/material";
import { useNavigate, NavLink } from "react-router-dom";
import { UserContext } from "../../action/acces";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { box, imageStyle } from "./style";

function LogIn() {
  const { userState } = useContext(UserContext);
  const [error, setError] = React.useState("");
  const navigate = useNavigate();
  const [data, setData] = React.useState({
    email: "",
    password: "",
  });

  function handleChange(value) {
    return setData((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    const userData = {
      email: data.email,
      password: data.password,
      role: " ",
    };
    userState("false");
    setError("");
    axios({
      method: "post",
      url: "http://localhost:5000/user/login",
      data: userData,
    })
      .then(function (res) {
        userState(res.data.user);
        navigate("/dashboard");
      })
      .catch(function (error) {
        setError(error.response.data.message);
      });
  }

  return (
    <div style={imageStyle}>
      <Header />
      <Grid container component="main" justifyContent="center">
        <CssBaseline />
        <Grid
          item
          sm={8}
          md={5}
          component={Paper}
          sx={{
            background:
              "linear-gradient(rgb(212, 207, 198), rgb(212, 207, 198, 0.8))",
            marginTop: "7vw",
          }}
          elevation={20}
        >
          <Box sx={box}>
            <Avatar sx={{ m: 5, bgcolor: "primary.dark" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Connecxion
            </Typography>
            <Box component="form" noValidate onSubmit={onSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                type="email"
                label="Adresse Mail"
                value={data.email}
                onChange={(e) => handleChange({ email: e.target.value })}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                type="password"
                label="Mot de passe"
                value={data.password}
                onChange={(e) => handleChange({ password: e.target.value })}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              {error && <Alert severity="error">{error}</Alert>}
              <Button
                variant="contained"
                type="submit"
                fullWidth
                color="primary"
                sx={{ mt: 3, mb: 2 }}
              >
                Se connecter
              </Button>
              <Grid container>
                <Grid item>
                  Pas Encore un Membre?{" "}
                  <NavLink className="signup" to="/SignUp">
                    Inscrivez-vous
                  </NavLink>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
export default LogIn;
