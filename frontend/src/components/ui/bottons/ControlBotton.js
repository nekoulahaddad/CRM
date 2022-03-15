import React from "react";
import styles from "./Botton.module.scss";
export default function ControlBotton({ title }) {
  return <div className={styles.controlBotton}>{title}</div>;
}
