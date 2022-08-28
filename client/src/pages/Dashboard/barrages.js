import React, { useState, useContext } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../action/acces";
import { SearchAppBar } from "../Add/boutons";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Paper,
  IconButton,
  MenuItem,
  ListItem,
  Menu,
  MenuList,
  Divider,
  Button,
} from "@mui/material";
function Barrages() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { user, barrageState } = useContext(UserContext);
  const [Barrage, setBarrage] = useState([]);

  async function fetchData() {
    try {
      const res = await axios.get("http://localhost:5000/barrage/get");
      const data = res.data;
      const barrages = data.map((u) => {
        function change() {
          barrageState(u);
          handleClose();
        }

        return (
          <div key={u.nomBarrage}>
            <MenuItem>
              <ListItem onClick={change}>{u.nomBarrage}</ListItem>{" "}
              <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? "fade-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleClick}
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "fade-button",
                }}
              >
                <MenuItem onClick={change}>afficher</MenuItem>
                <MenuItem onClick={change}>
                  <Button LinkComponent={NavLink} to="/Change">
                    update
                  </Button>
                </MenuItem>
              </Menu>
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
      {SearchAppBar()}
      <MenuList>
        {Barrage}
        <MenuItem>
          {user.role === "editor" || user.role === "admin" ? (
            <Button LinkComponent={NavLink} to="/Add">
              ajouter un barrage
              <Divider />
            </Button>
          ) : (
            <></>
          )}
        </MenuItem>
      </MenuList>
    </Paper>
  );
}

export default Barrages;
