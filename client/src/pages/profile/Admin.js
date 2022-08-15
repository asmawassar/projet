import axios from "axios";
import { Alert } from "@mui/material";
import React, { useState } from "react";
import NativeSelect from "@mui/material/NativeSelect";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";

function Admin() {
  const [posts, setPosts] = useState([]);
  const [role, setRole] = useState({ role: "", id: "" });
  const [open, setOpen] = React.useState(false);

  const set_id = (value) => {
    role.id = value;
  };

  function roles(value) {
    if (value !== "user") return "user";
    else return "editor";
  }
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
      const users = data.map((u) => {
        return (
          <thead key={u._id}>
            <tr>
              <td>{u.firstName}</td>
              <td>{u.lastName}</td>
              <td>{u.email}</td>
              <td>
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
              </td>
              <td>
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
              </td>
            </tr>
          </thead>
        );
      });
      setPosts(users);
    } catch (err) {
      console.log(err);
    }
  }
  fetchData();

  return <table border={"2px "}>{posts}</table>;
}
export default Admin;
