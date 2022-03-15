import React from "react";
import { ReactComponent as SearchIcon } from "assets/Search.svg";
import styles from "./Search.module.scss";
export default function Search({ placeholder }) {
  return (
    <div className={styles.wrapper}>
      <input placeholder={placeholder} className={styles.input} type="text" />
      <SearchIcon className={styles.icon} />
    </div>
  );
}
