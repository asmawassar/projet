import axios from "axios";
import { Alert, Box } from "@mui/material";
import React, { useState } from "react";
import NativeSelect from "@mui/material/NativeSelect";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import { DataGrid } from "@mui/x-data-grid";
import { columns } from "./actions";

function Admin() {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState([]);

  const [role, setRole] = useState({ role: "", id: "" });
  const [open, setOpen] = React.useState(false);

  const set_id = (value) => {
    role.id = value;
  };

  function updateRole(value) {
    return setRole((prev) => {
      return { ...prev, ...value };
    });
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  async function onSubmit(e) {
    setOpen(false);
    console.log(role);

    axios({
      method: "PUT",
      url: "http://localhost:5000/user/updateUser",
      data: role,
    })
      .then(function () {
        setOpen(true);
      })
      .catch(function (error) {
        console.log(error.response.data.message);
      });
  }

  async function fetchData() {
    try {
      const res = await axios.get("http://localhost:5000/user/getUsers");
      const data = res.data;
      var _id = 0;
      const users = data.map((u) => {
        _id++;
        return {
          id: _id,
          nom: u.lastName,
          prenom: u.firstName,
          birthdate: u.birthDate,
          email: u.email,
          role: u.role,
        };
      });
      const done = data.map((u) => {
        return (
          <div>
            <NativeSelect
              defaultValue={u.role}
              onChange={(e) => {
                updateRole({ role: e.target.value });
                set_id(u._id);
              }}
            >
              <option value="user">user</option>
              <option value="editor">editor</option>
            </NativeSelect>

            <input type="submit" onClick={onSubmit} value="Save" />
            <Stack spacing={2} sx={{ width: "100%" }}>
              <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
              >
                <Alert onClose={handleClose} severity="success">
                  changes saved!
                </Alert>
              </Snackbar>
            </Stack>
          </div>
        );
      });
      setPosts(users);
      setPost(done);
    } catch (err) {
      console.log(err);
    }
  }
  const rows = fetchData();

  return (
    <Box sx={{ height: 520, width: "100%" }}>
      {" "}
      <DataGrid
        rows={posts}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
      />
      {post}
    </Box>
  );
}
export default Admin;
