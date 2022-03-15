import React from "react";
import styles from "./OrderInfo.module.scss";
export default function OrderInfo() {
  const delivery = {
    id: "0000265154523",
    address: "г. Москва, пр. Ленина, д.1 кв 15А",
    date: "10.11.2021",
    price: "30 900 ₽",
  };
  const product = {
    pic: "https://static.re-store.ru/upload/resize_cache/iblock/14a/350_350_1/14abccf37898c2bab6241ccb87e4f2e3.jpg",
    name: "Смартфон Apple iPhone SE 64GB / MHGP3 (черный)",
    vendorCode: "164718",
    quantity: "1",
    price: "26 900₽",
  };
  const deliveryInfo = {
    method: "Курьером до клиента - 0,00₽",
    address: "Москва, ул Старостройная, д 30, кв18",
    phone: "Тел: +7 (915) ХХХ-ХХ-ХХ",
    pay: "Безналичный",
    sum: "29 900₽",
    status: "Доставлен",
  };
  return (
    <div className={styles.container}>
      <div className={styles.firstBlock}>
        <div className={styles.title}>Информация о заказе:</div>
        <div className={styles.deliveryInfo}>
          <div>{delivery.id}</div>
          <div>{delivery.address}</div>
          <div>{delivery.date}</div>
          <div>{delivery.price}</div>
        </div>
        <div className={styles.productInfo}>
          <img
            src={product.pic}
            alt={product.name}
            className={styles.productPic}
          />
          <div className={styles.productName}>
            <div className={styles.firstLine}>
              <div className={styles.name}>{product.name}</div>
              <div className={styles.quantity}>{product.quantity} шт</div>
              <div className={styles.price}>{product.price} </div>
            </div>
            <div className={styles.vendorCode}>
              Артикул: {product.vendorCode}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.secondBlock}>
        <div className={styles.delivery}>
          <div className={styles.header}>Доставка:</div>
          <div className={styles.deliveryMethod}>{deliveryInfo.method}</div>
          <div className={styles.deliveryAddress}>{deliveryInfo.address}</div>
          <div className={styles.deliveryPhone}>{deliveryInfo.phone}</div>
        </div>
        <div className={styles.payMethod}>
          <div className={styles.header}>Способ оплаты:</div>
          <div className={styles.method}>{deliveryInfo.pay}</div>
        </div>
        <div className={styles.priceSum}>
          <div className={styles.header}>Итого:</div>
          <div className={styles.sum}>{deliveryInfo.sum}</div>
        </div>
        <div className={styles.deliveryStatus}>
          <div className={styles.header}>Статус доставки:</div>
          <div className={styles.status}>{deliveryInfo.status}</div>
        </div>
      </div>
    </div>
  );
}
