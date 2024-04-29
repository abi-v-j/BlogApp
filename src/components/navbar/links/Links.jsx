"use client";
import React, { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/NavLink";
import { Box, IconButton, Popover, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];
const Links = () => {
  // const [open, setOpen] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  //TEMP
  const session = true;
  const isAdmin = true;
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link, key) => (
          <NavLink item={link} key={key} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className={styles.logout}>LogOut</button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      {/* <IconButton className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}><MenuIcon/></IconButton> */}
      <IconButton className={styles.menuButton} onClick={handleClick}>
        <MenuIcon />
      </IconButton>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
         <Box className={styles.mobileLinks}>
            {links.map((link, key) => (
              <NavLink item={link} key={key} />
            ))} 
      </Box>
      </Popover>
    </div>
  );
};

export default Links;
