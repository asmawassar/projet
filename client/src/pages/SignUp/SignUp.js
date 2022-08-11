import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import { Alert } from "@mui/material";

function SignUp() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    birthDate: "",
    sex: "",
    password: "",
    passwordCheck: "",
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
    if (form.password !== form.passwordCheck) {
      setError("Passwords do not match");
      setSuccess(false);
      return;
    }
    axios({
      method: "post",
      url: "http://localhost:5000/user/signup",
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
    <div className="center">
      <div className="content">
        <h1>Inscription</h1>
        <form onSubmit={onSubmit}>
          <div className="name">
          <div className="lastname">
              <label>Nom</label>
              <input
                value={form.lastName}
                onChange={(e) => updateForm({ lastName: e.target.value })}
                type="text"
                required
              />
              <hr />
            </div>
            <div className="firstname">
              <label>Prénom</label>
              <input
                value={form.firstName}
                onChange={(e) => updateForm({ firstName: e.target.value })}
                type="text"
                required
              />
              <hr />
            </div>
          </div>
          <div className="email">
            <label>Adresse Mail</label>
            <input
              value={form.email}
              onChange={(e) => updateForm({ email: e.target.value })}
              type="email"
              required
            />
            <hr />
          </div>
          <div className="password">
            <div className="enterPass">
              <label>Mot de passe</label>
              <input
                value={form.password}
                onChange={(e) => updateForm({ password: e.target.value })}
                type="password"
                required
              />
              <hr />
            </div>
            <div
              value={form.passwordCheck}
              onChange={(e) => updateForm({ passwordCheck: e.target.value })}
              className="reenterPass"
            >
              <label>Confirmer Mot de passe</label>
              <input type="password" required />
              <hr />
            </div>
          </div>
          <div className="Date-sex">
            <div className="Date">
              <label>Date de Naissance</label>
              <input
                value={form.birthDate}
                onChange={(e) => updateForm({ birthDate: e.target.value })}
                type="date"
                required
              />
            </div>
            <div className="sex">
              <label>Sexe</label>
              <select onChange={(e) => updateForm({ sex: e.target.value })}>
                <option value={"male"}>Homme</option>
                <option value={"female"}>Femme</option>
              </select>
            </div>
          </div>
          {error && <Alert severity="error">{error}</Alert>}
          {success ? (
            <Alert severity="success">
              Vous Avez Déjà un Compte, Connectez-vous!!
            </Alert>
          ) : (
            <input type="submit" value="Signup" />
          )}

          <div className="login_link">
          Vous Avez un Compte?{" "}
            <NavLink className="login" to="/LogIn">
            Connectez-vous.
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
