import React, { useEffect, useState } from "react";
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
import { useParams } from "react-router-dom";
import { fetchClient } from "store/clientSlice";
import { useDispatch, useSelector } from "react-redux";
export default function ClientProfile() {
  const { client } = useSelector((state) => state.clients);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { id } = useParams();
  const headers = [
    { title: "№ Заказа", dataIndex: "orderNo", width: "197px", sorted: false },
    { title: "Дата и время", dataIndex: "date", width: "199px", sorted: false },
    { title: "Статус", dataIndex: "status", width: "195px", sorted: false },
    { title: "Магазин", dataIndex: "shop", width: "197px", sorted: false },
    { title: "Сумма", dataIndex: "price", width: "197px", sorted: false },
    {
      title: "Кол–во товаров",
      dataIndex: "quantity",
      width: "197px",
      sorted: false,
    },
    {
      title: "Адрес доставки",
      dataIndex: "address",
      width: "220px",
      sorted: false,
    },
    {
      title: "Доставка",
      dataIndex: "deliveryTime",
      width: "171px",
      sorted: false,
    },
  ];
  const data = [
    {
      id: "00000234",
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
      id: "00000235",
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
      id: "00000236",
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
      id: "00000237",
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
      id: "00000238",
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
  useEffect(() => {
    console.log(id);
    dispatch(fetchClient({ id }));
  }, []);
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
          <div className={styles.description}>При неактивном статусе клиент будет заблокирован*</div>
        </div>
        <div className={styles.title}>Заказы:</div>
        <Table componentProps={componentProps} />
        <Pagination />
      </div>
    </div>
  );
}
