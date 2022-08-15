import { UserContext } from "../../action/acces";
import React, { useContext } from "react";
import Admin from "./Admin";
function Profile() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <div>
        <h1>personal infos : </h1>
        <h2>nom: {user.lastName}</h2>
        <h2>prenom: {user.firstName}</h2>
        <h2>date de naissance: {user.birthDate}</h2>
        <h2>sex: {user.sex}</h2>
        <h2>email: {user.email}</h2>
      </div>
      <Admin />
    </div>
  );
}

export default Profile;
