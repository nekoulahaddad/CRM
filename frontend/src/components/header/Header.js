import React from "react";
import styles from "./Header.module.scss";
import { ReactComponent as Logout } from "assets/Logout.svg";
import { useDispatch } from "react-redux";
import { logout } from "store/authSlice";
export default function Header({ props }) {
  const { icon, title } = props;
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.icon}>
        <div>{icon}</div>
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.logout}>
        <Logout onClick={() => handleLogout()} className={styles.logoutIcon} />
      </div>
    </div>
  );
}
