import React, { useState, useContext } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../action/acces";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {
  List,
  MenuItem,
  Button,
  IconButton,
  Menu,
  ListItemText,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import DesktopWindowsOutlinedIcon from "@mui/icons-material/DesktopWindowsOutlined";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const drawerWidth = 240;

function Barrages() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl1, setAnchorEl1] = React.useState(null);

  const open = Boolean(anchorEl);
  const open1 = Boolean(anchorEl1);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl1(null);
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
        function graph() {
          barrageState(u);
          handleClose();
        }
        return (
          <ListItem key={u.nomBarrage}>
            <MenuItem>
              <ListItem onClick={change}>
                <ListItemButton>{u.nomBarrage}</ListItemButton>
              </ListItem>{" "}
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
                <MenuItem onClick={change}>
                  <Button>afficher</Button>
                </MenuItem>
                <MenuItem onClick={change}>
                  <Button LinkComponent={NavLink} to="/Change">
                    update
                  </Button>
                </MenuItem>
                <MenuItem onClick={graph}>graph</MenuItem>
              </Menu>
            </MenuItem>
            <Divider />
          </ListItem>
        );
      });
      setBarrage(barrages);
    } catch (err) {
      console.log(err);
    }
  }
  fetchData();
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Tableau de bord
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <DesktopWindowsOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText secondary=" Tableau de bord" />
                </ListItemButton>
              </ListItem>
            </AccordionSummary>
            <AccordionDetails>
              {Barrage}
              <Divider />
              {user.role === "editor" || user.role === "admin" ? (
                <Button LinkComponent={NavLink} to="/Add">
                  ajouter un barrage
                  <Divider />
                </Button>
              ) : (
                <></>
              )}
            </AccordionDetails>
          </Accordion>
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}

export default Barrages;
