import axios from "axios";
import React, { useContext } from "react";
import { Alert, Box, Stack, Button, Toolbar, TextField } from "@mui/material";
import { useNavigate, NavLink } from "react-router-dom";
import { UserContext } from "../../action/acces";
import { formS, stack } from "./style";

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
    <>
      <Toolbar />
      <Box sx={formS}>
        <form method="post" onSubmit={onSubmit}>
          <Stack m={2} spacing={3} sx={stack}>
            <h1>Connexion</h1>
            <TextField
              type="email"
              label="Adresse Mail"
              value={data.email}
              onChange={(e) => handleChange({ email: e.target.value })}
              required
            />
            <TextField
              type="password"
              label="Mot de passe"
              value={data.password}
              onChange={(e) => handleChange({ password: e.target.value })}
              required
            />
            {error && <Alert severity="error">{error}</Alert>}
            <Button variant="contained" type="submit">
              Se connecter
            </Button>
            <div className="signup_link">
              Pas Encore un Membre?{" "}
              <NavLink className="signup" to="/SignUp">
                Inscrivez-vous
              </NavLink>
            </div>
          </Stack>
        </form>
      </Box>
    </>
  );
}
export default LogIn;
