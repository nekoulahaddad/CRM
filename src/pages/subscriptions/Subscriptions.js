import React from "react";
import { ReactComponent as Notifications } from "assets/Notifications.svg";
import CrmTemplate from "components/crmTemplate/CrmTemplate";
import PopupSubsicriptions from "components/ui/popupSubsicriptions/PopupSubsicriptions";
export default function Subscriptions() {
  const headers = [
    { title: "ID", dataIndex: "id", width: "206px", sorted: false },
    {
      title: "Название организации",
      dataIndex: "name",
      width: "282px",
      sorted: false,
    },
    { title: "Магазин", dataIndex: "shop", width: "281px", sorted: false },
    {
      title: "Подписка",
      dataIndex: "subscription",
      width: "280px",
      sorted: false,
    },
    { title: "Статус", dataIndex: "status", width: "282px", sorted: false },
    {
      title: "Информация",
      dataIndex: "information",
      width: "236px",
      sorted: false,
    },
  ];
  const data = [
    {
      id: "00000234",
      name: "ООО “Продукты”",
      shop: "Лента",
      subscription: "Золотая",
      status: "Неактивно",
    },
    {
      id: "00000235",
      name: "ООО “Продукты”",
      shop: "Лента",
      subscription: "Золотая",
      status: "Неактивно",
    },
    {
      id: "00000236",
      name: "ООО “Продукты”",
      shop: "Лента",
      subscription: "Золотая",
      status: "Неактивно",
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
