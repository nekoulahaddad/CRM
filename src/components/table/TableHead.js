import React from 'react';
import styles from './Table.module.scss'
import { ReactComponent as UPSort } from "../../assets/UPSort.svg";
import {changeSortDiection, changeSortField} from "../../store/filterSlice";
import { ReactComponent as DownSort } from "../../assets/DownSort.svg";
import { useDispatch } from "react-redux";

function TableHead({ headers, handleCheckBoxAll }) {
  const dispatch = useDispatch();

  return (
    <tr>
      <th className={styles.boxInputContainer}>
        <input className={styles.boxInput} onClick={(e) => handleCheckBoxAll(e.target.checked)} type="checkbox" />
      </th>

      {
        headers.map((header, i) => (
          <th style={{ width: header.width }} key={header.title + i * Math.random()}>
            {header.title}
            {header.sorted ? (
              <div className={styles.sortIcon}>
                <UPSort
                  onClick={() => {
                    dispatch(changeSortField(header.dataIndex));
                    dispatch(changeSortDiection("asc"));
                  }}
                  className={styles.sortUp}
                />
                <DownSort
                  onClick={() => {
                    dispatch(changeSortField(header.dataIndex));
                    dispatch(changeSortDiection("desc"));
                  }}
                  className={styles.sortDown}
                />
              </div>
            ) : null}
          </th>
        ))
      }
    </tr>
  );
}

export default TableHead;
