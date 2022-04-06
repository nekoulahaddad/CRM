import React from "react";
import { ReactComponent as Database } from "assets/Database.svg";
import CrmTemplate from "components/crmTemplate/CrmTemplate";
import OrderInfo from "components/orderInfo/OrderInfo";

export default function Finances() {
  const headers = [
    {
      title: "№ Заказа",
      dataIndex: "orderNo",
      width: "176.5px",
      sorted: false,
    },
    { title: "Магазин", dataIndex: "shop", width: "185px", sorted: false },
    { title: "Клиент", dataIndex: "client", width: "298px", sorted: false },
    { title: "Сумма", dataIndex: "price", width: "158px", sorted: false },
    {
      title: "Адрес доставки",
      dataIndex: "address",
      width: "330px",
      sorted: false,
    },
    { title: "Дата и время", dataIndex: "date", width: "240px", sorted: true },
    { title: "Статус", dataIndex: "status", width: "172px", sorted: true },
  ];
  const data = [
    {
      _id: "00000234",
      orderNo: "00000234",
      shop: "Лента",
      client: "Смирнов Владимир",
      price: "1 987,00 руб",
      address: "Москва, ул Строителей, д18, к45",
      date: "12.08.2020, 14:00 - 14.30",
      status: "Доставлен",
    },
    {
      _id: "00000235",
      orderNo: "00000235",
      shop: "Лента",
      client: "Смирнов Владимир",
      price: "1 987,00 руб",
      address: "Москва, ул Строителей, д18, к45",
      date: "12.08.2020, 14:00 - 14.30",
      status: "Доставлен",
    },
    {
      _id: "00000236",
      orderNo: "00000236",
      shop: "Лента",
      client: "Смирнов Владимир",
      price: "1 987,00 руб",
      address: "Москва, ул Строителей, д18, к45",
      date: "12.08.2020, 14:00 - 14.30",
      status: "Доставлен",
    },
  ];

  const props = {
    icon: <Database />,
    title: "Финансы",
  };

  const placeholder = "Поиск по номеру заказа...";
  const componentProps = {
    headers,
    data,
    props,
    placeholder,
    OrderInfo: <OrderInfo />,
  };

  return <CrmTemplate componentProps={componentProps} />;
}
