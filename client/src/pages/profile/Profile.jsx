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
import "./style.css";
function Profile() {
  const { user } = useContext(UserContext);
  return (
    <>
      <Header />
      <div class="context">
        <Grid container component="main" justifyContent="center">
          <CssBaseline />
          <Grid
            item
            sm={8}
            md={5}
            component={Paper}
            sx={{
              background:
                "linear-gradient(rgb(212, 207, 198,0.5), rgb(212, 207, 198, 0.8))",
              marginTop: "-35vh",
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
                  label="Prénom:"
                  defaultValue={`${user.firstName.toUpperCase()}`}
                  InputProps={{
                    readOnly: true,
                  }}
                />{" "}
                <TextField
                  margin="normal"
                  sx={{ width: "45%", mr: "10%" }}
                  label="Date De Naissance: "
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
                  label="Adresse Mail: "
                  defaultValue={`${user.email}`}
                  InputProps={{
                    readOnly: true,
                  }}
                />
                <TextField
                  margin="normal"
                  sx={{ width: "45%", mr: "10%" }}
                  label="Rôle: "
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
                  label="Numéro Tel: "
                  defaultValue={`${user.tel}`}
                  InputProps={{
                    readOnly: true,
                  }}
                />
                <TextField
                  margin="normal"
                  fullWidth
                  label="Entreprise: "
                  defaultValue={`${user.entreprise}`}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </div>
      <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
}

export default Profile;
