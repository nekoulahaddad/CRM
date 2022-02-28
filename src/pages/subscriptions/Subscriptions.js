import React from "react";
import { ReactComponent as Notifications } from "assets/Notifications.svg";
import CrmTemplate from "components/crmTemplate/CrmTemplate";
import PopupSubsicriptions from "components/ui/popupSubsicriptions/PopupSubsicriptions";
export default function Subscriptions() {
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
    icon: <Notifications />,
    title: "Подписки",
  };
  const ids = ["1"];

  const placeholder = "Поиск по ID партнёра...";
  const componentProps = {
    headers,
    data,
    props,
    placeholder,
    PopupSubsicriptions: <PopupSubsicriptions />,
  };

  return <CrmTemplate componentProps={componentProps} />;
}
