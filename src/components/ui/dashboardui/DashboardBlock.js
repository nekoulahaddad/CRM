import React from "react";
import styles from "./DashboardBlock.module.scss";
import { ReactComponent as ArrowUp } from "assets/ArrowUp.svg";
import { ReactComponent as ArrowDown } from "assets/ArrowDown.svg";
export default function DashboardBlock({ props }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.description}>
          <span className={styles.info}>{props.info}</span>
          <span
            className={
              props.percent > 0
                ? styles.percent
                : `${styles.percent} ${styles.orange}`
            }
          >
            {props.percent > 0 ? <ArrowUp /> : <ArrowDown />}
            {props.percent}%
          </span>
        </div>
      </div>
    </div>
  );
}
