import { NavLink } from "react-router-dom";

function LogIn() {
  return (
    <>
      <div className="center">
        <div className="content">
          <h1>Login</h1>
          <form method="post">
            <div className="txt">
              <label>Email</label>
              <input type="email" required />
              <hr />
            </div>
            <div className="txt">
              <label>Password</label>
              <input type="password" required />
              <hr />
            </div>
            <input type="submit" value="Login" />
            <div className="signup_link">
              Not a member?{" "}
              <NavLink className="signup" to="/SignUp">
                Sign up
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LogIn;
