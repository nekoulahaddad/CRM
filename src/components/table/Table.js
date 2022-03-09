import React, { useState, useEffect } from "react";
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

  const handlePopUp = (id) => {
    openedOptions === id ? setOpenedOptions("") : setOpenedOptions(id);
  };

  const handleOrderPopUp = (id) => {
    openOrder !== "" ? setOpenOrder("") : setOpenOrder(id);
  };
  const handleCheckBoxOne = (checked, id) => {
    checked
      ? setCheckedRows((prevState) => [...prevState, id])
      : setCheckedRows((prevState) =>
          [...prevState].filter((item) => item !== id)
        );
  };

  const handleCheckBoxAll = (checked) => {
    checked
      ? setCheckedRows(data.map((record) => record.id))
      : setCheckedRows([]);
  };

  useEffect(() => {
    console.log(checkedRows);
  }, [checkedRows]);
  return (
    <div
      onClick={() => openedOptions && setOpenedOptions("")}
      className={styles.tableContainer}
    >
      <div onClick={handlePopUp} className={styles.cover}></div>
      <table className={openOrder !== "" && styles.widthFlex} id="tableId">
        <tr>
          <th className={styles.boxInputContainer}>
            <input
              className={styles.boxInput}
              onClick={(e) => handleCheckBoxAll(e.target.checked)}
              type="checkbox"
            />
          </th>
          {headers.map((header, i) => (
            <th style={{ width: header.width }} key={header.title}>
              {header.title}
            </th>
          ))}
        </tr>
        {data &&
          data.map((record, id) => (
            <React.Fragment>
              <tr className={OrderInfo && styles.curser} key={id}>
                <td className={styles.boxInputContainer}>
                  <label>
                    <input
                      onChange={(e) =>
                        handleCheckBoxOne(e.target.checked, record.id)
                      }
                      className={styles.boxInput}
                      type="checkbox"
                      checked={checkedRows.includes(record.id)}
                    />
                  </label>
                </td>
                {headers.map((header, i) => (
                  <React.Fragment>
                    {header.dataIndex === "options" ||
                    header.dataIndex === "information" ? (
                      <td
                        onClick={() => handlePopUp(id)}
                        className={styles.ThreeDots}
                        key={id}
                      >
                        <ThreeDots />
                        {props &&
                        props.title !== "Подписки" &&
                        openedOptions === id ? (
                          <div className={styles.PopupOptions}>
                            <PopupOptions>
                              <Link
                                className={styles.tableLink}
                                to={`/clients/profile/${record.id}`}
                              >
                                Перейти в профиль
                              </Link>
                              <div>Удалить пользователя</div>
                            </PopupOptions>
                          </div>
                        ) : null}
                      </td>
                    ) : (
                      <td
                        className={styles.tableCell}
                        title={record[header.dataIndex]}
                        onClick={() => handleOrderPopUp(id)}
                        key={i}
                      >
                        {typeof record[header.dataIndex] === "boolean" ? (
                          <SwitchBotton />
                        ) : null}
                        {record[header.dataIndex]}
                      </td>
                    )}
                  </React.Fragment>
                ))}
                {PopupSubsicriptions && openedOptions === id
                  ? PopupSubsicriptions
                  : null}
              </tr>

              {OrderInfo && openOrder === id ? (
                <tr className={styles.orderInfoBlock}>
                  <td colSpan="8" className={styles.extra}>
                    {OrderInfo}
                  </td>
                </tr>
              ) : null}
            </React.Fragment>
          ))}
      </table>
    </div>
  );
}
