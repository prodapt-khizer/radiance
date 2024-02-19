import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "./SideBar.css";
import ATT_LOGO from "../../assets/images/AT&T_logo_2016.png";
import { Avatar } from "@mui/material";
import Home_Icon from "../../assets/images/Home 3.png";
import Service_Icon_Active from "../../assets/images/Discovery_Active.png";
import Tracking_Icon from "../../assets/images/Bag 4.png";
import Billing_Icon from "../../assets/images/Wallet.png";
import Reports_Icon from "../../assets/images/Paper.png";
import Support_Icon from "../../assets/images/Work.png";
import { useNavigate } from "react-router";

const drawerWidth = 120;
function ResponsiveDrawer(props) {
  const navigate = useNavigate();

  const sideBarPages = [
    {
      name: "Dashboard",
      activeicon: Home_Icon,
      icon: Home_Icon,
    },
    {
      name: "Service",
      icon: Service_Icon_Active,
      activeicon: Service_Icon_Active,
      path: "/service",
    },
    {
      name: "Tracking",
      icon: Tracking_Icon,
      activeicon: Tracking_Icon,
      path: "/tracking",
    },
    {
      name: "Billing",
      icon: Billing_Icon,
      activeicon: Billing_Icon,
    },
    {
      name: "Reports",
      icon: Reports_Icon,
      activeicon: Reports_Icon,
    },
    {
      name: "Support",
      icon: Support_Icon,
      activeicon: Support_Icon,
    },
  ];
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    props.updateDrawerStatus();
  };

  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }
  const handleNavigate = (path) => {
    if (path) {
      navigate(path);
    }
  };

  const drawer = (
    <div className="sidebar-container">
      <div className="sidebar-top">
        <div className="sidebar-head">
          <img className="siderbar-logo" src={ATT_LOGO} />
        </div>
        <Divider style={{ backgroundColor: "rgba(102, 102, 102, 1)" }} />
        <div className="sidebar-content">
          {sideBarPages.map((page) => {
            return (
              <div
                className={`${
                  props?.currentTab?.toLowerCase() === page?.name?.toLowerCase()
                    ? "sidebar-item-selected"
                    : ``
                } text-center sidebar-item pointer`}
                onClick={() => handleNavigate(page?.path)}
              >
                <div>
                  <img
                    className="sidebar-option_icon"
                    src={
                      props?.currentTab?.toLowerCase() ===
                      page?.name?.toLowerCase()
                        ? page.activeicon
                        : page.icon
                    }
                  />
                </div>
                <div
                  className={
                    props?.currentTab?.toLowerCase() ===
                    page?.name?.toLowerCase()
                      ? `sidebar-active`
                      : ``
                  }
                >
                  {page.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="sidebar-bottom">
        <Avatar className="siderbar-avatar" {...stringAvatar("Ashwin Anto")} />
      </div>
    </div>
  );

  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          display: { sm: "none" },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {props.currentTab}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
