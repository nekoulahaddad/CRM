import React from "react";
import SideBar from "components/sideBar/SideBar";
import styles from "./Dashboard.module.scss";
import Header from "components/header/Header";
import { ReactComponent as DashboardIcon } from "assets/Dashboard.svg";
import DashboardBlock from "components/ui/dashboardui/DashboardBlock";
import ChartBlock from "components/ui/dashboardui/ChartBlock";
export default function Dashboard() {
  const props = {
    icon: <DashboardIcon />,
    title: "Дашборд",
  };

  const dataProps = {
    title: "12 864",
    info: "Кол-во партнеров",
    percent: -12,
  };
  const data1 = [...new Array(4)];
  const data2 = [...new Array(2)];
  const data3 = [...new Array(2)];

  return (
    <div className={styles.wrapper}>
      <SideBar />
      <div className={styles.container}>
        <Header props={props} />
        <div className={styles.blocksContainer}>
          <div className={styles.productsBlock}>
            <div className={styles.headerBlock}>Информация о партнерах:</div>
            {data1.map((element, i) => (
              <DashboardBlock key={i} props={dataProps} />
            ))}
          </div>
          <div className={styles.buyersBlock}>
            <div className={styles.headerBlock}>Информация о покупателях:</div>
            {data2.map((element, i) => (
              <DashboardBlock key={i} props={dataProps} />
            ))}
          </div>
          <div className={styles.subscriptionsBlock}>
            <div className={styles.headerBlock}>Информация о подписках:</div>
            <ChartBlock />
            <DashboardBlock props={dataProps} />
          </div>
        </div>
      </div>
    </div>
  );
}
