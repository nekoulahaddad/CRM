import React from "react";
import styles from "./Header.module.scss";
export default function Header({ props }) {
  console.log(props);
  const { icon, title } = props;
  return (
    <div className={styles.wrapper}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.title}>{title}</div>
    </div>
  );
}
