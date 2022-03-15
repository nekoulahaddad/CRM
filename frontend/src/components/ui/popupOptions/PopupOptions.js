import React from "react";
import styles from "./PopupOptions.module.scss";
export default function PopupOptions({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.option}>{children}</div>
    </div>
  );
}
