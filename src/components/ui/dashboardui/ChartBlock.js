import React from "react";
import styles from "./DashboardBlock.module.scss";
import ChartSvg from "./ChartSvg";
export default function ChartBlock() {
  const chartData = {
    labels: [
      "Беслатные подписки",
      "Золотые подписки",
      "Стандартные подписки",
      "Премиум подписки",
    ],
    data: [25, 25, 25, 25],
    dataOff: function () {
      const final = [0];
      console.log(this);
      const result = this.data.reduce((accu, item, i, arr) => {
        accu = parseInt(accu) + item;
        final.push(-accu);
        return accu;
      }, 0);
      return final;
    },
    colors: ["#00A1DF", "#FA9812", "#78C2DD", "#F13F17"],
    borderWidth: 5,
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.chartContainer}>
        <div className={styles.chart}>
          <ChartSvg chartData={chartData} />
          <div className={styles.centerChart}>2134</div>
        </div>
        <div className={styles.chartLabels}>
          <div className={styles.title}>Кол-во подписок</div>
          <div className={styles.labels}>
            {chartData.labels.map((label, i) => (
              <div className={styles.labelContainer} key={i}>
                <div
                  style={{ backgroundColor: chartData.colors[i] }}
                  className={styles.colorBlock}
                ></div>
                <div className={styles.label}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
