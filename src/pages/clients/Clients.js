import React from "react";
import { ReactComponent as People } from "assets/People.svg";
import CrmTemplate from "components/crmTemplate/CrmTemplate";

export default function Clients() {
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
      id: "564545645641",
      name: "nekoula",
      phone: "5456564",
      email: "mail.ru",
      date: "445454",
      lastLoginin: "dsad",
      status: "dsadsad",
      options: "...",
    },
    {
      id: "564545645643",
      name: "nekoula",
      phone: "5456564",
      email: "mail.ru",
      date: "445454",
      lastLoginin: "dsad",
      status: "dsadsad",
      options: "...",
    },
    {
      id: "564545645644",
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
    icon: <People />,
    title: "Клиенты",
  };
  const placeholder = "Поиск по номеру телефона";
  const componentProps = {
    headers,
    data,
    props,
    placeholder,
  };

  return (
    <React.Fragment>
      {componentProps ? <CrmTemplate componentProps={componentProps} /> : null}
    </React.Fragment>
  );
}
