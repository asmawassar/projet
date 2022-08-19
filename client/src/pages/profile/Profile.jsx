import { UserContext } from "../../action/acces";
import React, { useContext } from "react";
import { Box, Toolbar } from "@mui/material";
import Admin from "./Admin";
import { admin, Infos } from "./style";
function Profile() {
  const { user } = useContext(UserContext);
  function notadmin() {
    return (
      <>{user.role === "editor" ? (<h1>editor</h1>) : (<h1>user</h1>)}</>)
  }
  const notAdmin = notadmin();
  return (
    <>
      <Toolbar />

      <Box
        style={{
          display: "flex",
        }}
      >
        <Box style={Infos}>
          <h1>personal infos: </h1>
          <h2>nom: {user.lastName.toUpperCase()}</h2>
          <h2>prenom: {user.firstName.toUpperCase()}</h2>
          <h2>date de naissance: {user.birthDate}</h2>
          <h2>sex: {user.sex}</h2>
          <h2>email: {user.email}</h2>
          <h2>role: {user.role}</h2>
        </Box>
        <Box style={admin}>
          {user.role === "admin" ? (<Admin />) : (<h1>{notAdmin}</h1>)}
        </Box>
      </Box>
    </>
  );
}

export default Profile;
