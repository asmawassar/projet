import React, { useState, useContext } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../action/acces";

import {
  Paper,
  ListItemButton,
  MenuItem,
  MenuList,
  Toolbar,
  Divider,
} from "@mui/material";
function Barrages() {
  const { barrage, barrageState } = useContext(UserContext);

  const [Barrage, setBarrage] = useState([]);

  async function fetchData() {
    try {
      const res = await axios.get("http://localhost:5000/barrage/get");
      const data = res.data;
      const barrages = data.map((u) => {
        function change() {
          barrageState(u);
          console.log(barrage);
        }
        return (
          <div key={u.nomBarrage}>
            <MenuItem>
              <ListItemButton inset="true" onClick={change}>
                {u.nomBarrage}
              </ListItemButton>
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
          <ListItemButton inset="true" LinkComponent={NavLink} to="/Add">
            ajouter un barrage
          </ListItemButton>
        </MenuItem>
        <Divider />
      </MenuList>
    </Paper>
  );
}

export default Barrages;
