import React from "react";
import styles from "./Pagination.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { changePage } from "store/filterSlice";
export default function Pagination({ numberOfPages }) {
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.filters);
  console.log(numberOfPages);
  const adjustPage = (amount) => {
    dispatch(changePage(page + amount));
  };

  return (
    <React.Fragment>
      {numberOfPages > 0 ? (
        <div className={styles.wrapper}>
          <div className={styles.container}>
            {page !== 0 ? <div onClick={() => adjustPage(-1)}>&lt;</div> : <div className={styles.disabled}>&lt;</div>}
            {page > 0 ? <div onClick={() => dispatch(changePage(0))}>1</div> : null}
            {page > 1 ? <div onClick={() => dispatch(changePage(1))}>2</div> : null}
            {page > 2 ? <div>...</div> : null}
            {page === numberOfPages - 1 && numberOfPages > 3 ? <div onClick={() => adjustPage(-1)}>{page}</div> : null}
            <div className={styles.active}>{page + 1}</div>
            {page < numberOfPages - 1 ? <div onClick={() => adjustPage(1)}>{page + 2}</div> : null}
            {page < numberOfPages - 1 ? <div onClick={() => adjustPage(1)}>&gt;</div> : <div className={styles.disabled}>&gt;</div>}
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
}
