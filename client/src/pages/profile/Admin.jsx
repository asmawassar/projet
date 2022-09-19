import {
  Alert,
  Box,
  Button,
  NativeSelect,
  Stack,
  Snackbar,
} from "@mui/material";
import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import Header from "../../components/Header/Header3";
import "./style.css";
function Admin() {
  const [Users, setUsers] = React.useState([]);
  const [role, setRole] = React.useState({ role: "", id: "" });
  const [open, setOpen] = React.useState(false);
  const [warning, setWarning] = React.useState(false);
  const [affiche, setAffiche] = React.useState(false);

  function updateRole(value) {
    return setRole((prev) => {
      return { ...prev, ...value };
    });
  }

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    setWarning(false);
  };

  async function onSubmit(e) {
    if (role == "") {
      setOpen(false);
      setWarning(true);
      return;
    }
    axios({
      method: "PUT",
      url: "http://localhost:5000/user/updateUser",
      data: role,
    })
      .then(function () {
        setOpen(true);
        setRole("");
      })
      .catch(function (error) {
        setWarning(true);
        console.log(error.response.data.message);
      });
  }

  async function fetchData() {
    setAffiche(true);
    try {
      const res = await axios.get("http://localhost:5000/user/getUsers");
      const data = res.data;
      var id = 0;
      const users = data.map((u) => {
        id++;
        return {
          _id: u._id,
          id: id,
          nom: u.lastName,
          prenom: u.firstName,
          sex: u.sex,
          birthdate: u.birthDate,
          email: u.email,
          role: u.role,
        };
      });

      setUsers(users);
    } catch (err) {
      console.log(err);
    }
  }

  const post = [
    { field: "_id", headerName: "ID data base", hide: true },
    { field: "id", headerName: "ID", width: 40 },
    { field: "nom", headerName: "Nom ", width: 130 },
    { field: "prenom", headerName: "Prénom", width: 145 },
    { field: "sex", headerName: "Sexe", width: 70 },
    { field: "birthdate", headerName: "Date De Naissance", width: 140 },
    { field: "email", headerName: "Adresse Mail", width: 285 },
    {
      field: "role",
      headerName: "Rôle",
      width: 100,
      renderCell: (u) => {
        return (
          <NativeSelect
            defaultValue={u.row.role}
            onChange={(e) => {
              updateRole({ role: e.target.value, id: u.row._id });
            }}
          >
            <option value="user">Utilisateur</option>
            <option value="editor">Editeur</option>
            <option value="admin">Admin</option>
          </NativeSelect>
        );
      },
    },
    {
      field: "save",
      headerName: "Enregistrer",
      width: 130,
      renderCell: () => {
        return (
          <div>
            <Button onClick={onSubmit}>Enregistrer</Button>
          </div>
        );
      },
    },
  ];
  useEffect(() => {
    fetchData();
  });

  return (
    <>
      <Header />
      <div class="context">
        <Box
          sx={{
            height: 600,
            width: "80%",
            marginTop: "-35vh",
            marginLeft: "10%",
            background:
              "linear-gradient(rgb(212, 207, 198), rgb(212, 207, 198, 0.8))",
          }}
        >
          <DataGrid
            rows={Users}
            columns={post}
            rowsPerPageOptions={[10, 20, 50, 100]}
            disableSelectionOnClick="true"
          />
          <Stack spacing={2} sx={{ width: "100%" }}>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
              <Alert onClose={handleClose} variant="filled" severity="success">
                Changements Enregistrés!
              </Alert>
            </Snackbar>
            <Snackbar
              open={warning}
              autoHideDuration={3000}
              onClose={handleClose}
            >
              <Alert onClose={handleClose} variant="filled" severity="error">
                Vous n'avez pas fait de modifications!
              </Alert>
            </Snackbar>
          </Stack>
        </Box>
      </div>
      <div class="area2">
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
export default Admin;
