import React, { useState } from "react";
import styles from "./Table.module.scss";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as ThreeDots } from "assets/ThreeDots.svg";
import PopupOptions from "components/ui/popupOptions/PopupOptions";
import SwitchBotton from "components/ui/bottons/SwitchBotton";
import { deleteClient } from "store/clientSlice";
import { useDispatch } from "react-redux";
import TableHead from "./TableHead";

export default function Table({ componentProps }) {

  const [openOrder, setOpenOrder] = useState("");
  const [openedOptions, setOpenedOptions] = useState("");
  const [checkedRows, setCheckedRows] = useState([]);
  const { headers, data, props, PopupSubsicriptions, OrderInfo, setOpen } = componentProps;
  const dispatch = useDispatch();
  const location = useLocation();

  const handlePopUp = (id) => {
    openedOptions === id ? setOpenedOptions("") : setOpenedOptions(id);
  };

  const handleOrderPopUp = (id) => {
    openOrder !== "" ? setOpenOrder("") : setOpenOrder(id);
  };

  const handleCheckBoxOne = (checked, id) => {
    checked
      ? setCheckedRows((prevState) => [...prevState, id])
      : setCheckedRows((prevState) => [...prevState].filter((item) => item !== id));
  };

  const handleCheckBoxAll = (checked) => {
    checked ? setCheckedRows(data.map((record) => record._id)) : setCheckedRows([]);
  };

  return (
    <div onClick={() => openedOptions && setOpenedOptions("")} className={styles.tableContainer}>
      <div onClick={handlePopUp} className={styles.cover}></div>
      <table className={openOrder !== "" ? styles.widthFlex : ""} id="tableId">
        <tbody>
          <TableHead
            headers={headers}
            data={data}
            handleCheckBoxAll={handleCheckBoxAll}
          />

          {
            data &&
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
                    <React.Fragment key={i * Math.random()}>
                      {header.dataIndex === "options" || header.dataIndex === "information" ? (
                        <td onClick={() => handlePopUp(record._id)} className={styles.ThreeDots}>
                          <ThreeDots />
                          {props && props.title !== "Подписки" && openedOptions === record._id ? (
                            <div className={styles.PopupOptions}>
                              <PopupOptions>
                                {props && props.title === "Модерация" ? (
                                  <React.Fragment>
                                    <div onClick={() => setOpen(true)}>Посмотреть категорию</div>
                                    <div>Одобрить</div>
                                    <div>Отказать</div>
                                  </React.Fragment>
                                ) : (
                                  <React.Fragment>
                                    <Link
                                      className={styles.tableLink}
                                      to={location.pathname === '/partners'
                                        ? `/partners/profile/${record._id}`
                                        : `/clients/profile/${record._id}`
                                      }>
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

                  { PopupSubsicriptions && openedOptions === record._id ? PopupSubsicriptions : null }
                </tr>

                {OrderInfo && openOrder === record._id ? (
                  <tr className={styles.orderInfoBlock}>
                    <td colSpan="8" className={styles.extra}>
                      {OrderInfo}
                    </td>
                  </tr>
                ) : null}
              </React.Fragment>
            ))
          }

        </tbody>
      </table>
    </div>
  );
}
