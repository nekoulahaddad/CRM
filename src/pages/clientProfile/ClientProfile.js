import React from "react";
import SideBar from "components/sideBar/SideBar";
import styles from "./ClientProfile.module.scss";
import Header from "components/header/Header";
import Table from "components/table/Table";
import Pagination from "components/pagination/Pagination";
import ClientForm from "components/clientForm/ClientForm";
import { ReactComponent as People } from "assets/People.svg";
import { ReactComponent as ArrowBack } from "assets/ArrowBack.svg";
import { useNavigate } from "react-router-dom";
import SwitchBotton from "components/ui/bottons/SwitchBotton";
import OrderInfo from "components/orderInfo/OrderInfo";
export default function ClientProfile() {
  let navigate = useNavigate();

  const headers = [
    { title: "№ Заказа", dataIndex: "orderNo" },
    { title: "Дата и время", dataIndex: "date" },
    { title: "Статус", dataIndex: "status" },
    { title: "Магазин", dataIndex: "shop" },
    { title: "Сумма", dataIndex: "price" },
    { title: "Кол–во товаров", dataIndex: "quantity" },
    { title: "Адрес доставки", dataIndex: "address" },
    { title: "Доставка", dataIndex: "deliveryTime" },
  ];
  const data = [
    {
      orderNo: "564545645641",
      date: "Конcтантин Константинов",
      status: "5456564",
      shop: "mail.ru",
      price: "445454",
      quantity: "445454",
      address: "dsadsad",
      deliveryTime: "dsadsad",
    },
    {
      orderNo: "564545645641",
      date: "Конcтантин Константинов",
      status: "5456564",
      shop: "mail.ru",
      price: "445454",
      quantity: "445454",
      address: "dsadsad",
      deliveryTime: "dsadsad",
    },
    {
      orderNo: "564545645641",
      date: "Конcтантин Константинов",
      status: "5456564",
      shop: "mail.ru",
      price: "445454",
      quantity: "445454",
      address: "dsadsad",
      deliveryTime: "dsadsad",
    },
  ];
  const props = {
    icon: <People />,
    title: "Клиенты",
  };
  const componentProps = { headers, data, OrderInfo: <OrderInfo /> };

  return (
    <div className={styles.wrapper}>
      <SideBar />
      <div className={styles.container}>
        <Header props={props} />
        <div onClick={() => navigate("/clients/")} className={styles.back}>
          <ArrowBack /> Назад
        </div>
        <ClientForm />
        <div className={styles.status}>
          <div>
            <SwitchBotton />
          </div>
          <div className={styles.description}>
            При неактивном статусе клиент будет заблокирован*
          </div>
        </div>
        <div className={styles.title}>Заказы:</div>
        <Table componentProps={componentProps} />
        <Pagination />
      </div>
    </div>
  );
}
