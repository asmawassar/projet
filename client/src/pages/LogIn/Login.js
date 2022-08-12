import { NavLink } from "react-router-dom";
import { useState } from "react";
import {AiOutlineEyeInvisible,AiOutlineEye} from 'react-icons/ai';

function LogIn() {

  const [state,setstate] =useState(false);
  const togglebtn = () => {
       setstate(prevState => !prevState);
  }
  return (
    <>
      <div className="center">
        <div className="content">
          <h1>Connexion</h1>
          <form method="post">
            <div className="txt">
              <label>Adresse Mail</label>
              <input type="email" required />
              <hr />
            </div>
            <div className="txt">
              <label>Mot de Passe</label>
              <input type={state ? "text" : "password"} required />
              <button className="btn" type='button' onClick={togglebtn}>
            {state ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
           </button>
              <hr />
            </div>
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
