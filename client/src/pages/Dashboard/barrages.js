import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import {
  Paper,
  ListItemButton,
  MenuItem,
  MenuList,
  Toolbar,
  Divider,
} from "@mui/material";
function Barrages() {
  const [Barrage, setBarrage] = useState([]);
  async function fetchData() {
    try {
      const res = await axios.get("http://localhost:5000/barrage/get");
      const data = res.data;
      const barrages = data.map((u) => {
        return (
          <div key={u.nomBarrage}>
            <MenuItem>
              <ListItemButton inset>{u.nomBarrage}</ListItemButton>
            </MenuItem>
            <Divider />
          </div>
        );
      });
      setBarrage(barrages);
    } catch (err) {
      console.log(err);
    }
  }
  fetchData();
  return (
    <Paper sx={{ width: "100%", height: "100%" }}>
      <Toolbar />
      <MenuList>
        {Barrage}
        <MenuItem>
          <ListItemButton inset LinkComponent={NavLink} to="/Add">
            ajouter un barrage
          </ListItemButton>
        </MenuItem>
        <Divider />
      </MenuList>
    </Paper>
  );
}

export default Barrages;
