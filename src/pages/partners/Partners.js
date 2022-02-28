import React from "react";
import { ReactComponent as Connect } from "assets/Connect.svg";
import CrmTemplate from "components/crmTemplate/CrmTemplate";
export default function Partners() {
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
    icon: <Connect />,
    title: "Партнеры",
  };
  const placeholder = "Поиск по ID партнёра...";
  const componentProps = {
    headers,
    data,
    props,
    placeholder,
  };
  return <CrmTemplate componentProps={componentProps} />;
}
