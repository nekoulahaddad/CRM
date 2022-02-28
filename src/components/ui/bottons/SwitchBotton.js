import React, { useState } from "react";
import styles from "./Botton.module.scss";
export default function SwitchBotton() {
  const [checked, setChecked] = React.useState(true);

  return (
    <div>
      <label className={styles.switch}>
        <input
          onChange={(e) => e.target.checked === false}
          type="checkbox"
          defaultChecked={checked}
        />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
    </div>
  );
}
