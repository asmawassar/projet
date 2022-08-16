import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { Button, Drawer, Box, Toolbar, Divider } from "@mui/material";
function Barrages() {
  const [Barrage, setBarrage] = useState([]);
  async function fetchData() {
    try {
      const res = await axios.get("http://localhost:5000/barrage/get");
      const data = res.data;
      const barrages = data.map((u) => {
        return (
          <>
            <Button key={u._id}>{u.nomBarrage}</Button>
            <Divider />
          </>
        );
      });
      setBarrage(barrages);
    } catch (err) {
      console.log(err);
    }
  }
  fetchData();

  const drawerWidth = 240;
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        {Barrage}
        <Button LinkComponent={NavLink} to="/Add">
          ajouter un barrage
        </Button>
      </Drawer>
    </Box>
  );
}

export default Barrages;
