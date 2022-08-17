import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import axios from "axios";
import React, { useContext, useState } from "react";
import { Alert, Stack, Button, TextField, MenuItem } from "@mui/material";
import { useNavigate, NavLink } from "react-router-dom";
import { UserContext } from "../../action/acces";

function LogIn() {
  const { userState } = useContext(UserContext);
  const [state, setstate] = useState(false);
  const togglebtn = () => {
    setstate((prevState) => !prevState);
  };
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = React.useState("");

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
        const users = res.data.user;
        userState(users);
        navigate("/dashboard");
      })
      .catch(function (error) {
        setError(error.response.data.message);
      });
  }

  return (
    <>
      <div className="center">
        <div className="content">
          <h1>Connexion</h1>
          <form method="post" onSubmit={onSubmit}>
            <Stack m={2} spacing={3}>
              <TextField
                type="mail"
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
              <input type="submit" value="Se Connecter" />
              <div className="signup_link">
                Pas Encore un Membre?{" "}
                <NavLink className="signup" to="/SignUp">
                  Inscrivez-vous
                </NavLink>
              </div>
            </Stack>
          </form>
        </div>
      </div>
    </>
  );
}

export default LogIn;
