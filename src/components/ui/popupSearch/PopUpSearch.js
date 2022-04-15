import React from "react";
import styles from "./PopUpSearch.module.scss";

export default function PopUpSearch({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.option}>{children}</div>
    </div>
  );
}
