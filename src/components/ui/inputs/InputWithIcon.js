import React from "react";
import styles from "./Inputs.module.scss";
export default function InputWithIcon({ props }) {
  const { icon, value } = props;
  return (
    <div className={styles.wrapper}>
      <div className={styles.Container}>
        <input type="text" className={styles.inputWithIcon} />
      </div>
    </div>
  );
}
