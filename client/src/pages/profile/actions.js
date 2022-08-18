export const columns = [
  { field: "id", headerName: "ID", width: 50 },
  { field: "nom", headerName: "Nom ", width: 130 },
  { field: "prenom", headerName: "Prénom", width: 150 },
  {
    field: "birthdate",
    headerName: "birthdate",
    width: 100,
  },
  {
    field: "email",
    headerName: "Email",
    width: 300,
  },
  {
    field: "role",
    type: "singleSelect",
    valueOptions: ["user", "editor"],
    editable: true,
  },
  {
    field: "w",
    renderCell: () => {
      return (
        <div>
          <input type="submit" value="Save" />
        </div>
      );
    },
  },
];
/*
<NativeSelect
                  defaultValue={u.role}
                  onChange={(e) => {
                    updateRole({ role: e.target.value });
                    set_id(u._id);
                  }}
                >
                  <option value="user">user</option>
                  <option value="editor">editor</option>
                </NativeSelect>*/
/* return (
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
      }*/
