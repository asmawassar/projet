import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

function SignUp() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState("");

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const url = "http://localhost:5000/user/signup";
      const { form: res } = await axios.post(url, form);
      navigate("/logIn");
      console.log(res.message);
    } catch (err) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.form.message);
      }
    }

    setForm({ firstName: "", lastName: "", email: "", password: "" });
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
              <input type="date" required />
            </div>
            <div className="sex">
              <label>Sex</label>
              <select>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
          </div>
          {error && <div>{error}</div>}
          <input type="submit" value="Signup" />
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
