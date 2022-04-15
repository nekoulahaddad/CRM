import React from "react";
import styles from "./Botton.module.scss";
import { ReactComponent as ArrowDownWhite } from "assets/ArrowDownWhite.svg";
import PopupOptions from "../popupOptions/PopupOptions";
import { useSelector, useDispatch } from "react-redux";
import { changeLimit } from "store/filterSlice";
export default function ControlBotton({ title, openSort }) {
  const dispatch = useDispatch();
  return (
    <div style={{ position: "relative" }}>
      <div className={styles.controlBotton}>
        {title}
        {title === "Сортировать" ? <ArrowDownWhite className={styles.sortIcon} /> : null}
      </div>
      {title === "Сортировать" && openSort ? (
        <div style={{ position: "absolute", zIndex: "+15", right: "1.7px", top: "60px" }}>
          <PopupOptions>
            <div className={styles.sortOption} onClick={() => dispatch(changeLimit(10))}>
              По 10
            </div>
            <div className={styles.sortOption} onClick={() => dispatch(changeLimit(20))}>
              По 20
            </div>
            <div className={styles.sortOption} onClick={() => dispatch(changeLimit(50))}>
              По 50
            </div>
          </PopupOptions>
        </div>
      ) : null}
    </div>
  );
}
