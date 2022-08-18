import { UserContext } from "../../action/acces";
import React, { useContext } from "react";
import { Box, Toolbar } from "@mui/material";
import Admin from "./Admin";
import { admin, Infos } from "./style";
function Profile() {
  const { user } = useContext(UserContext);
  return (
    <>
      <Toolbar />
      <Box
        style={{
          display: "flex",
        }}
      >
        <Box style={Infos}>
          <h1>personal infos : </h1>
          <h2>nom: {user.lastName}</h2>
          <h2>prenom: {user.firstName}</h2>
          <h2>date de naissance: {user.birthDate}</h2>
          <h2>sex: {user.sex}</h2>
          <h2>email: {user.email}</h2>
        </Box>
        <Box style={admin}>
          <Admin />
        </Box>
      </Box>
    </>
  );
}

export default Profile;
