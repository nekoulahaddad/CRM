import React, { useEffect, useState } from "react";
import { ReactComponent as SearchIcon } from "assets/Search.svg";
import styles from "./Search.module.scss";
import { useDispatch } from "react-redux";
import { changeSearchTerm } from "store/filterSlice";
export default function Search({ placeholder }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.wrapper}>
      <input
        onChange={(e) => dispatch(changeSearchTerm(e.target.value))}
        placeholder={placeholder}
        className={styles.input}
        type="text"
      />
      <SearchIcon className={styles.icon} />
    </div>
  );
}
