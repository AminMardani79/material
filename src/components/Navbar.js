import styled from "@emotion/styled";
import {
  AppBar,
  Avatar,
  Badge,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { Language, Mail, Notifications } from "@mui/icons-material";
import React, { useState } from "react";
import { Box } from "@mui/system";
// images
import avatar from "../styles/images/avatar.jpg";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "#FFFFFF",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));
const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Amin Dev
        </Typography>
        <Language sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search..." sx={{ color: "black" }} />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{
              width: "28px",
              height: "28px",
              bgcolor: "skyblue",
              cursor: "pointer",
            }}
            onClick={(e) => setOpen(true)}
            src={avatar}
          ></Avatar>
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{
              width: "28px",
              height: "28px",
              bgcolor: "skyblue",
              cursor: "pointer",
            }}
            src={avatar}
          ></Avatar>
          <Typography variant="h6" sx={{ fontSize: "15px" }}>
            Amin Mardani
          </Typography>
        </UserBox>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={(e) => setOpen(false)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
          <MenuItem>Profile</MenuItem>
        </Menu>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
