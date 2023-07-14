import React, { useContext } from "react";
import { Box, IconButton, useTheme, Typography } from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";

import { NavLink } from "react-router-dom";

const TopBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        sx={{
          display: "flex",
          backgroundColor: colors.primary[400],
          borderRadius: "3px",
        }}
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex">
        {/* <Space size={10} style={{ lineHeight: 0 }}>
          <NavLink to="/">
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "white" }}>
              About Team
            </Text>
          </NavLink>

          <NavLink to="/">
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Settings</Text>
          </NavLink>

          <NavLink to="/">
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Account</Text>
          </NavLink>
        </Space> */}
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        {/* <Typography
          variant="h6"
          color={colors.primary}
          style={{ marginTop: "3%", marginLeft: "5%" }}
        >
          Notifications
        </Typography> */}
        <IconButton size="large">
          <NotificationsOutlinedIcon />
        </IconButton>
        {/* <Typography
          variant="h6"
          color={colors.primary}
          style={{ marginTop: "3%", marginLeft: "5%" }}
        >
          Settings
        </Typography> */}
        <IconButton size="large">
          <SettingsOutlinedIcon />
        </IconButton>
        {/* <Typography
          variant="h6"
          color={colors.primary}
          style={{ marginTop: "3%", marginLeft: "5%" }}
        >
          About
        </Typography> */}
        <IconButton size="large">
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TopBar;
