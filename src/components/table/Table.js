import React, { useState } from "react";
import styles from "./Table.module.scss";
export default function Table({ componentProps }) {
  const [open, setOpen] = useState(false);
  const { headers, data, PopupSubsicriptions, OrderInfo } = componentProps;
  console.log(headers);
  return (
    <div className={styles.tableContainer}>
      <table>
        <tr>
          {headers.map((header, i) => (
            <th key={header.title}>{header.title}</th>
          ))}
        </tr>
        {data &&
          data.map((record, i) => (
            <React.Fragment>
              <tr onClick={() => setOpen(!open)} key={i}>
                {headers.map((header, i) => (
                  <td key={i}>{record[header.dataIndex]}</td>
                ))}
                {PopupSubsicriptions && i == 2 ? PopupSubsicriptions : null}
              </tr>
              {OrderInfo && open ? (
                <tr className={styles.orderInfoBlock}>
                  <td className={styles.extra}>{OrderInfo}</td>
                </tr>
              ) : null}
            </React.Fragment>
          ))}
      </table>
    </div>
  );
}
