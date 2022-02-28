import React from "react";
import { ReactComponent as Database } from "assets/Database.svg";
import CrmTemplate from "components/crmTemplate/CrmTemplate";
import OrderInfo from "components/orderInfo/OrderInfo";

export default function Finances() {
  const headers = [
    { title: "ID", dataIndex: "id" },
    { title: "Имя и Фамилия", dataIndex: "name" },
    { title: "Номер телефона", dataIndex: "phone" },
    { title: "Почта", dataIndex: "email" },
    { title: "Дата регистрации", dataIndex: "date" },
    { title: "Последний вход", dataIndex: "lastLoginin" },
    { title: "Статус", dataIndex: "status" },
    { title: "Опции", dataIndex: "options" },
  ];
  const data = [
    {
      id: "56454564564",
      name: "nekoula",
      phone: "5456564",
      email: "mail.ru",
      date: "445454",
      lastLoginin: "dsad",
      status: "dsadsad",
      options: "...",
    },
    {
      id: "56454564564",
      name: "nekoula",
      phone: "5456564",
      email: "mail.ru",
      date: "445454",
      lastLoginin: "dsad",
      status: "dsadsad",
      options: "...",
    },
    {
      id: "56454564564",
      name: "nekoula",
      phone: "5456564",
      email: "mail.ru",
      date: "445454",
      lastLoginin: "dsad",
      status: "dsadsad",
      options: "...",
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
