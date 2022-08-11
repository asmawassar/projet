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
      url: "http://localhost:5000/user/signup",
      data: form,
    })
      .then(function () {
        setSuccess(true);
        window.alert(success);
      })
      .catch(function (error) {
        setError(error.response.data.message);
      });
  }

  return (
    <div className="center">
      <div className="content">
        <h1>SignUp</h1>
        <form onSubmit={onSubmit}>
          <div className="name">
            <div className="firstname">
              <label>First Name</label>
              <input
                value={form.firstName}
                onChange={(e) => updateForm({ firstName: e.target.value })}
                type="text"
                required
              />
              <hr />
            </div>
            <div className="lastname">
              <label>Last Name</label>
              <input
                value={form.lastName}
                onChange={(e) => updateForm({ lastName: e.target.value })}
                type="text"
                required
              />
              <hr />
            </div>
          </div>
          <div className="email">
            <label>Email</label>
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
              <label>Password</label>
              <input
                value={form.password}
                onChange={(e) => updateForm({ password: e.target.value })}
                type="password"
                required
              />
              <hr />
            </div>
            <div className="reenterPass">
              <label>Verify password</label>
              <input type="password" required />
              <hr />
            </div>
          </div>
          <div className="Date-sex">
            <div className="Date">
              <label>Date of Birth</label>
              <input
                value={form.birthDate}
                onChange={(e) => updateForm({ birthDate: e.target.value })}
                type="date"
                required
              />
            </div>
            <div className="sex">
              <label>Sex</label>
              <select onChange={(e) => updateForm({ sex: e.target.value })}>
                <option value={"male"}>Male</option>
                <option value={"female"}>Female</option>
              </select>
            </div>
          </div>
          {error && <Alert severity="error">{error}</Alert>}
          {success ? (
            <Alert severity="success">
              your account has been created plz log in
            </Alert>
          ) : (
            <input type="submit" value="Signup" />
          )}

          <div className="login_link">
            You have an account?{" "}
            <NavLink className="login" to="/LogIn">
              Login?
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
