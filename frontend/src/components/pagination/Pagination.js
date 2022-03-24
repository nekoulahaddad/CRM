import React from "react";
import styles from "./Pagination.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { changePage } from "store/filterSlice";
export default function Pagination() {
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.filters);
  const { numberOfPages, limit } = useSelector((state) => state.clients);
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const currentPage = 1;

  return (
    <React.Fragment>
      {numberOfPages > 0 ? (
        <div className={styles.wrapper}>
          <div className={styles.container}>
            {page === 0 ? (
              <div className={`${styles.before} ${styles.disabled}`}>&lt;</div>
            ) : (
              <div
                onClick={() => dispatch(changePage(page - 1))}
                className={styles.before}
              >
                &lt;
              </div>
            )}
            {page > 1 ? (
              <div
                onClick={() => dispatch(changePage(1))}
                className={styles.afterCurrent}
              >
                1
              </div>
            ) : null}
            <div
              onClick={() => dispatch(changePage(page + 1))}
              className={`${styles.current} ${styles.active}`}
            >
              {page + 1}
            </div>
            {numberOfPages > 5 ? (
              <div className={styles.filler}>...</div>
            ) : null}
            {numberOfPages > 5 ? (
              <>
                <div
                  onClick={() => dispatch(changePage(numberOfPages - 2))}
                  className={styles.beforeLast}
                >
                  {numberOfPages - 1}
                </div>

                <div
                  onClick={() => dispatch(changePage(numberOfPages - 1))}
                  className={styles.last}
                >
                  {numberOfPages}
                </div>
              </>
            ) : null}
            <div className={styles.after}>&gt;</div>
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
}
