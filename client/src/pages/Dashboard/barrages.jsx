import React, { useState, useContext } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../action/acces";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import {
  List,
  MenuItem,
  Button,
  IconButton,
  Menu,
  ListItemText,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import DesktopWindowsOutlinedIcon from "@mui/icons-material/DesktopWindowsOutlined";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";
import image from "../../images/barrage.png";
import { Bar } from "../../components/Header/style";

const drawerWidth = 240;

function Barrages() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { userState, pageState } = useContext(UserContext);
  const navigate = useNavigate();

  function logout() {
    userState("false");
    navigate("/");
  }
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { user, barrageState, indicateurState } = useContext(UserContext);
  const [Barrage, setBarrage] = useState([]);

  async function fetchData2(barrage) {
    try {
      const res = await axios({
        method: "get",
        url: "http://localhost:5000/barrage/gets",
        params: { nomBarrage: barrage.nomBarrage },
      });
      const info = res.data;
      indicateurState(info);
    } catch (err) {
      console.log(err);
    }
  }
  async function fetchData() {
    try {
      const res = await axios.get("http://localhost:5000/barrage/get");
      const data = res.data;
      const barrages = data.map((u) => {
        function change() {
          fetchData2(u);
          barrageState(u);
          pageState("tableau");
          handleClose();
        }
        return (
          <ListItem key={u.nomBarrage}>
            <MenuItem>
              <ListItem onClick={change} style={{ width: "12vw" }}>
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
              {user.role === "editor" || user.role === "admin" ? (
                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "fade-button",
                  }}
                >
                  <MenuItem>
                    <Button fullWidth LinkComponent={NavLink} to="/Change">
                      mettre à jour
                    </Button>
                  </MenuItem>
                </Menu>
              ) : (
                <></>
              )}
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

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar sx={Bar}>
          <img src={image} style={{ height: "8.5vh" }} alt="" />{" "}
        </Toolbar>
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
                  <ListItemText primary=" Tableau de bord" />
                </ListItemButton>
              </ListItem>
            </AccordionSummary>
            <AccordionDetails>{Barrage}</AccordionDetails>
          </Accordion>
          <ListItem>
            {user.role === "editor" || user.role === "admin" ? (
              <Button fullWidth LinkComponent={NavLink} to="/Add">
                <ListItemText primary=" ajouter un barrage" />
              </Button>
            ) : (
              <></>
            )}
          </ListItem>
          <ListItem>
            <Button fullWidth LinkComponent={NavLink} to="/profile">
              <ListItemText primary="Profile" />
            </Button>
          </ListItem>
          {user.role === "admin" ? (
            <ListItem>
              <Button fullWidth LinkComponent={NavLink} to="/admin">
                <ListItemText primary="Admin" />
              </Button>
            </ListItem>
          ) : (
            <></>
          )}
          <ListItem>
            <Button
              fullWidth
              button="true"
              onclick={logout}
              LinkComponent={NavLink}
              to="/"
            >
              <ListItemText primary="Deconnexion" />
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}

export default Barrages;
