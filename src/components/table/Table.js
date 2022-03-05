import React, { useState, useRef } from "react";
import styles from "./Table.module.scss";
import { Link } from "react-router-dom";
import { ReactComponent as ThreeDots } from "assets/ThreeDots.svg";
import PopupOptions from "components/ui/popupOptions/PopupOptions";
import SwitchBotton from "components/ui/bottons/SwitchBotton";
export default function Table({ componentProps }) {
  const [openOrder, setOpenOrder] = useState("");
  const [openedOptions, setOpenedOptions] = useState("");
  const [checkedRows, setCheckedRows] = useState([]);
  const { headers, data, props, PopupSubsicriptions, OrderInfo } =
    componentProps;
  console.log(headers);

  const handlePopUp = (id) => {
    openedOptions === id ? setOpenedOptions("") : setOpenedOptions(id);
  };

  const handleOrderPopUp = (id) => {
    console.log(id);
    openOrder !== "" ? setOpenOrder("") : setOpenOrder(id);
  };
  const handleCheckBoxOne = (checked, id) => {
    setCheckedRows();
  };
  return (
    <div
      onClick={() => openedOptions && setOpenedOptions("")}
      className={styles.tableContainer}
    >
      <div onClick={() => setOpenedOptions("")} className={styles.cover}></div>
      <table id="tableId">
        <tr>
          <th className={styles.boxInputContainer}>
            <input className={styles.boxInput} type="checkbox" />
          </th>
          {headers.map((header, i) => (
            <th style={{ width: header.width }} key={header.title}>
              {header.title}
            </th>
          ))}
          {props && props.title !== "Финансы" ? (
            <th
              style={
                props && props.title === "Подписки" ? { width: "236px" } : {}
              }
            >
              Опции
            </th>
          ) : null}
        </tr>
        {data &&
          data.map((record, i) => (
            <React.Fragment>
              <tr
                className={OrderInfo && styles.curser}
                onClick={() => handleOrderPopUp(i)}
                key={i}
              >
                <td className={styles.boxInputContainer}>
                  <label>
                    <input
                      onChange={(e) => handleCheckBoxOne(e.target.checked, i)}
                      className={styles.boxInput}
                      type="checkbox"
                    />
                  </label>
                </td>
                {headers.map((header, i) => (
                  <td
                    className={styles.tableCell}
                    title={record[header.dataIndex]}
                    key={i}
                  >
                    {typeof record[header.dataIndex] === "boolean" ? (
                      <SwitchBotton />
                    ) : null}
                    {record[header.dataIndex]}
                  </td>
                ))}
                {props && props.title !== "Финансы" ? (
                  <td
                    onClick={() => handlePopUp(i)}
                    className={styles.ThreeDots}
                    key={i}
                  >
                    <ThreeDots />
                    {props &&
                    props.title !== "Подписки" &&
                    openedOptions === i ? (
                      <div className={styles.PopupOptions}>
                        <PopupOptions>
                          <Link
                            className={styles.tableLink}
                            to={"/clients/profile/456"}
                          >
                            Перейти в профиль
                          </Link>
                          <div>Удалить пользователя</div>
                        </PopupOptions>
                      </div>
                    ) : null}
                  </td>
                ) : null}
                {PopupSubsicriptions && openedOptions === i
                  ? PopupSubsicriptions
                  : null}
              </tr>

              {OrderInfo && openOrder === i ? (
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
