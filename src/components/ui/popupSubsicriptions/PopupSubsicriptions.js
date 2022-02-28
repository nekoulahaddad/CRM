import React from "react";
import styles from "./PopupSubsicriptions.module.scss";
export default function PopupSubsicriptions() {
  const subscriptions = [
    {
      type: "Стандартная",
      startDate: "12.08.2020, 14:00",
      endDate: "12.09.2020, 14:00",
    },
    {
      type: "Золотая",
      startDate: "12.08.2020, 14:00",
      endDate: "12.09.2020, 14:00",
    },
    {
      type: "Золотая",
      startDate: "12.08.2020, 14:00",
      endDate: "12.09.2020, 14:00",
    },
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div>ID магазина</div>
          <div>Название организации</div>
          <div>Магазин</div>
          <div>Подписка</div>
          <div>Статус</div>
        </div>
        <div className={styles.right}>
          <div>00000234</div>
          <div>ООО “Продукты”</div>
          <div>Лента</div>
          <div>Стандартная</div>
          <div>Оплачено</div>
        </div>
      </div>
      <div className={styles.title}>История подписок:</div>
      <table className={styles.popupTable}>
        <tr>
          <th>Тип подписки</th>
          <th>Дата покупки</th>
          <th>Дата окончания </th>
        </tr>
        {subscriptions.map((sub, i) => (
          <tr key={i}>
            <td>{sub.type}</td>
            <td>{sub.startDate}</td>
            <td>{sub.endDate}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
