import React from "react";
import styles from "./SideBar.module.scss";
import { ReactComponent as Logo } from "assets/Logo.svg";
import { ReactComponent as People } from "assets/People.svg";
import { ReactComponent as Notifications } from "assets/Notifications.svg";
import { ReactComponent as Database } from "assets/Database.svg";
import { ReactComponent as Dashboard } from "assets/Dashboard.svg";
import { ReactComponent as Connect } from "assets/Connect.svg";
import { NavLink } from "react-router-dom";

export default function SideBar() {
  const navLinks = [
    {
      icon: <People />,
      url: "/clients",
    },
    {
      icon: <Connect />,
      url: "/partners",
    },
    {
      icon: <Notifications />,
      url: "/subscriptions",
    },
    {
      icon: <Database />,
      url: "/finances",
    },
    {
      icon: <Dashboard />,
      url: "/dashboard",
    },
  ];
  return (
    <div className={styles.wrapper}>
      <div>
        <Logo className={styles.logo} />
      </div>
      <div className={styles.navLinksWrapper}>
        {navLinks.map((navlink, i) => (
          <div key={i} className={styles.NavLinkContainer}>
            <NavLink
              to={navlink.url}
              className={({ isActive }) =>
                isActive
                  ? `${styles.active} ${styles.navlink}`
                  : `${styles.navlink}`
              }
            >
              {navlink.icon}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}
