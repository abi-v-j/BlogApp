"use client";
import React, { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/NavLink";

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
  const [open, setOpen] = useState(false);

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
      <button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}>Menu</button>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link, key) => (
            <NavLink item={link} key={key} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
