import Header from "../../components/Header/Header3";
import { UserContext } from "../../action/acces";
import React, { useContext } from "react";
import {
  Box,
  TextField,
  CssBaseline,
  Typography,
  Avatar,
  Grid,
  Paper,
} from "@mui/material";
import { box } from "../LogIn/style";
function Profile() {
  const { user } = useContext(UserContext);
  return (
    <>
      <Header />
      <Grid container component="main" justifyContent="center">
        <CssBaseline />
        <Grid
          item
          sm={8}
          md={5}
          component={Paper}
          sx={{
            background:
              "linear-gradient(rgb(212, 207, 198), rgb(212, 207, 198, 0.8))",
            marginTop: "30vh",
            marginBottom: "15vh",
          }}
          elevation={20}
        >
          <Box sx={box}>
            <Avatar
              sx={{ m: 3, width: 50, height: 50, bgcolor: "secondary.dark" }}
            ></Avatar>
            <Typography component="h1" variant="h5">
              Informations Personelles:
            </Typography>
            <Box component="form" sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                sx={{ width: "45%", mr: "10%" }}
                label="Nom:"
                defaultValue={`${user.lastName.toUpperCase()}`}
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                margin="normal"
                sx={{ width: "45%" }}
                label="Prenom:"
                defaultValue={`${user.firstName.toUpperCase()}`}
                InputProps={{
                  readOnly: true,
                }}
              />{" "}
              <TextField
                margin="normal"
                sx={{ width: "45%", mr: "10%" }}
                label="Date de naissance: "
                defaultValue={`${user.birthDate}`}
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                margin="normal"
                sx={{ width: "45%" }}
                label="Sexe: "
                defaultValue={`${user.sex}`}
                InputProps={{
                  readOnly: true,
                }}
              />{" "}
              <TextField
                margin="normal"
                fullWidth
                label="Email: "
                defaultValue={`${user.email}`}
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                margin="normal"
                sx={{ width: "45%", mr: "10%" }}
                label="Role: "
                defaultValue={`${user.role}`}
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                margin="normal"
                sx={{ width: "45%" }}
                label="Occupation: "
                defaultValue={`${user.occupation}`}
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                margin="normal"
                sx={{ width: "45%", mr: "10%" }}
                label="Gouvernorat "
                defaultValue={`${user.gouvernorat}`}
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                margin="normal"
                sx={{ width: "45%" }}
                label="Numéro tel: "
                defaultValue={`${user.tel}`}
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                margin="normal"
                fullWidth
                label="entreprise: "
                defaultValue={`${user.entreprise}`}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Profile;
