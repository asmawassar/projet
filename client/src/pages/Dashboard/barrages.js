import React, { useState } from "react";
import axios from "axios";
import { Alert, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";

function Barrages() {
  const [barrage, setBarrage] = useState([]);

  async function fetchData() {
    try {
      const res = await axios.get("http://localhost:5000/barrage/get");
      const data = res.data;
      const barrages = data.map((u) => {
        return (
          <Button variant="contained" key={u._id}>
            {u.nomBarrage}
          </Button>
        );
      });
      setBarrage(barrages);
    } catch (err) {
      console.log(err);
    }
  }
  fetchData();
  return (
    <div>
      <Stack spacing={0.5} width={"20%"}>
        {barrage}

        <Button variant="contained" LinkComponent={NavLink} to="/Add">
          ajouter un barrage
        </Button>
      </Stack>
    </div>
  );
}

export default Barrages;
