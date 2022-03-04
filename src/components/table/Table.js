import React, { useState, useRef } from "react";
import styles from "./Table.module.scss";
import { Link } from "react-router-dom";
import { ReactComponent as ThreeDots } from "assets/ThreeDots.svg";
import PopupOptions from "components/ui/popupOptions/PopupOptions";
export default function Table({ componentProps }) {
  const [openOrder, setOpenOrder] = useState("");
  const [openedOptions, setOpenedOptions] = useState("");
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
  return (
    <div
      onClick={() => openedOptions && setOpenedOptions("")}
      className={styles.tableContainer}
    >
      <div onClick={() => setOpenedOptions("")} className={styles.cover}></div>
      <table id="tableId">
        <tr>
          {headers.map((header, i) => (
            <th key={header.title}>{header.title}</th>
          ))}
          {props && props.title !== "Финансы" ? <th>Опции</th> : null}
        </tr>
        {data &&
          data.map((record, i) => (
            <React.Fragment>
              <tr
                className={OrderInfo && styles.curser}
                onClick={() => handleOrderPopUp(i)}
                key={i}
              >
                {headers.map((header, i) => (
                  <td key={i}>{record[header.dataIndex]}</td>
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
                            to={"/clients/profile/123"}
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
