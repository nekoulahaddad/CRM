import React from "react";
import SideBar from "components/sideBar/SideBar";
import styles from "./CrmTemplate.module.scss";
import Header from "components/header/Header";
import ControlBotton from "components/ui/bottons/ControlBotton";
import Search from "components/ui/search/Search";
import Table from "components/table/Table";
import Pagination from "components/pagination/Pagination";
import Printer, { print } from "react-pdf-print";
import * as XLSX from "xlsx";
import { ExportSheet } from "react-xlsx-sheet";

export default function CrmTemplate({ componentProps }) {
  const { headers, data, props, placeholder, PopupSubsicriptions } =
    componentProps;

  const ids = ["1"];
  return (
    <div className={styles.wrapper}>
      <SideBar />
      <div className={styles.container}>
        <Header props={props} />
        <div className={styles.controlSection}>
          <Search placeholder={placeholder} />
          <div className={styles.downloadLink} data={data} headers={headers}>
            <ControlBotton title="Сортировать" />
          </div>
          <div className={styles.downloadLink} data={data} headers={headers}>
            <ExportSheet
              header={headers}
              fileName={props.title}
              dataSource={data}
              xlsx={XLSX}
            >
              <button className={styles.controlBotton}>Экспорт в Excel</button>
            </ExportSheet>
          </div>
          <div
            onClick={() => print(ids)}
            className={styles.downloadLink}
            data={data}
            headers={headers}
          >
            <ControlBotton title="Экспорт в PDF" />
          </div>
          <div
            onClick={() => window.print()}
            className={styles.downloadLink}
            data={data}
            headers={headers}
          >
            <ControlBotton title="Распечатать" />
          </div>
        </div>
        <Table componentProps={componentProps} />
        <div style={{ position: "absolute", left: -9999 }}>
          <Printer>
            <div
              id={ids[0]}
              style={{
                width: "210mm",
                height: "297mm",
              }}
            >
              <Table componentProps={componentProps} />
            </div>
          </Printer>
        </div>
        <Pagination />
      </div>
    </div>
  );
}
