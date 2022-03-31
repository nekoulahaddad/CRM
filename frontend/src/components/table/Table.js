import React, { useState, useEffect } from "react";
import styles from "./Table.module.scss";
import { Link } from "react-router-dom";
import { ReactComponent as ThreeDots } from "assets/ThreeDots.svg";
import { ReactComponent as UPSort } from "assets/UPSort.svg";
import { ReactComponent as DownSort } from "assets/DownSort.svg";
import PopupOptions from "components/ui/popupOptions/PopupOptions";
import SwitchBotton from "components/ui/bottons/SwitchBotton";
import { changeSortField, changeSortDiection } from "store/filterSlice";
import { deleteClient } from "store/clientSlice";
import { useDispatch, useSelector } from "react-redux";
export default function Table({ componentProps }) {
  const [openOrder, setOpenOrder] = useState("");
  const [openedOptions, setOpenedOptions] = useState("");
  const [checkedRows, setCheckedRows] = useState([]);
  const { headers, data, props, PopupSubsicriptions, OrderInfo, setOpen } = componentProps;
  const dispatch = useDispatch();

  const handlePopUp = (id) => {
    openedOptions === id ? setOpenedOptions("") : setOpenedOptions(id);
  };

  const handleOrderPopUp = (id) => {
    openOrder !== "" ? setOpenOrder("") : setOpenOrder(id);
  };
  const handleCheckBoxOne = (checked, id) => {
    checked ? setCheckedRows((prevState) => [...prevState, id]) : setCheckedRows((prevState) => [...prevState].filter((item) => item !== id));
  };

  const handleCheckBoxAll = (checked) => {
    checked ? setCheckedRows(data.map((record) => record._id)) : setCheckedRows([]);
  };

  return (
    <div onClick={() => openedOptions && setOpenedOptions("")} className={styles.tableContainer}>
      <div onClick={handlePopUp} className={styles.cover}></div>
      <table className={openOrder !== "" ? styles.widthFlex : ""} id="tableId">
        <tbody>
          <tr>
            <th className={styles.boxInputContainer}>
              <input className={styles.boxInput} onClick={(e) => handleCheckBoxAll(e.target.checked)} type="checkbox" />
            </th>
            {headers.map((header, i) => (
              <th style={{ width: header.width }} key={header.title}>
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
            ))}
          </tr>
          {data &&
            data.map((record) => (
              <React.Fragment key={record._id}>
                <tr className={OrderInfo ? styles.curser : ""}>
                  <td className={styles.boxInputContainer}>
                    <label>
                      <input
                        onChange={(e) => handleCheckBoxOne(e.target.checked, record._id)}
                        className={styles.boxInput}
                        type="checkbox"
                        checked={checkedRows.includes(record._id)}
                      />
                    </label>
                  </td>
                  {headers.map((header, i) => (
                    <React.Fragment key={i}>
                      {header.dataIndex === "options" || header.dataIndex === "information" ? (
                        <td onClick={() => handlePopUp(record._id)} className={styles.ThreeDots}>
                          <ThreeDots />
                          {props && props.title !== "Подписки" && openedOptions === record._id ? (
                            <div className={styles.PopupOptions}>
                              <PopupOptions>
                                {props && props.title === "Модерация категорий" ? (
                                  <React.Fragment>
                                    <div onClick={() => setOpen(true)}>Посмотреть категорию</div>
                                    <div>Одобрить</div>
                                    <div>Отказать</div>
                                  </React.Fragment>
                                ) : (
                                  <React.Fragment>
                                    <Link className={styles.tableLink} to={`/clients/profile/${record._id}`}>
                                      Перейти в профиль
                                    </Link>
                                    <div onClick={() => dispatch(deleteClient(record._id))}>Удалить пользователя</div>
                                  </React.Fragment>
                                )}
                              </PopupOptions>
                            </div>
                          ) : null}
                        </td>
                      ) : (
                        <td
                          className={styles.tableCell}
                          title={typeof record[header.dataIndex] !== "boolean" ? record[header.dataIndex] : null}
                          onClick={() => handleOrderPopUp(record._id)}
                          key={i}
                        >
                          {typeof record[header.dataIndex] === "boolean" ? <SwitchBotton /> : null}
                          {record[header.dataIndex]}
                        </td>
                      )}
                    </React.Fragment>
                  ))}
                  {PopupSubsicriptions && openedOptions === record._id ? PopupSubsicriptions : null}
                </tr>

                {OrderInfo && openOrder === record._id ? (
                  <tr className={styles.orderInfoBlock}>
                    <td colSpan="8" className={styles.extra}>
                      {OrderInfo}
                    </td>
                  </tr>
                ) : null}
              </React.Fragment>
            ))}
        </tbody>
      </table>
    </div>
  );
}
