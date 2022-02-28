import React from "react";
import styles from "./Pagination.module.scss";
export default function Pagination() {
  //const testNumbers = [1, 2, 3, 4];
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  //const numbers = testNumbers;
  const currentPage = 1;
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {currentPage === 1 ? (
          <div className={`${styles.before} ${styles.disabled}`}>&lt;</div>
        ) : (
          <div className={styles.before}>&lt;</div>
        )}
        <div className={`${styles.current} ${styles.active}`}>
          {currentPage}
        </div>
        <div className={styles.afterCurrent}>{currentPage + 1}</div>
        {numbers.length > 5 ? <div className={styles.filler}>...</div> : null}
        <div className={styles.beforeLast}>{numbers.length - 1}</div>
        <div className={styles.last}>{numbers.length}</div>
        <div className={styles.after}>&gt;</div>
      </div>
    </div>
  );
}
