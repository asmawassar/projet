import { NavLink } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";
import { Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";

function LogIn() {
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
    };
    setError("");
    axios({
      method: "post",
      url: "http://localhost:5000/user/login",
      data: userData,
    })
      .then(function () {
        sessionStorage.setItem("token", "token");
        navigate("/Acceuil");
      })
      .catch(function (error) {
        setError(error.response.data.message);
        window.alert(error.response.data.message);
      });
  }

  return (
    <>
      <div className="center">
        <div className="content">
          <h1>Connexion</h1>
          <form method="post" onSubmit={onSubmit}>
            <div className="txt">
              <label>Adresse Mail</label>
              <input
                type="email"
                value={data.email}
                onChange={(e) => handleChange({ email: e.target.value })}
                required
              />
              <hr />
            </div>
            <div className="txt">
              <label>Mot de Passe</label>
              <input
                type="password"
                value={data.password}
                onChange={(e) => handleChange({ password: e.target.value })}
                required
              />
              <hr />
            </div>
            {error && <Alert severity="error">{error}</Alert>}
            <input type="submit" value="Se Connecter" />
            <div className="signup_link">
              Pas Encore un Membre?{" "}
              <NavLink className="signup" to="/SignUp">
                Inscrivez-vous
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LogIn;
