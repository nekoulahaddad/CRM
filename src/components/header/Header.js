import React from "react";
import styles from "./Header.module.scss";
export default function Header({ props }) {
  const { icon, title } = props;
  return (
    <div className={styles.wrapper}>
      <div className={styles.icon}>
        <div>{icon}</div>
      </div>
      <div className={styles.title}>{title}</div>
    </div>
  );
}
