import React from "react";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { List, Button, ListItemText } from "@mui/material";
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

function Drawer() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
    </Box>
  );
}
export default Drawer;
