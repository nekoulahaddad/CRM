import React from "react";
import { ReactComponent as Notifications } from "assets/Notifications.svg";
import CrmTemplate from "components/crmTemplate/CrmTemplate";
import PopupSubsicriptions from "components/ui/popupSubsicriptions/PopupSubsicriptions";
export default function Subscriptions() {
  const headers = [
    { title: "ID", dataIndex: "_id", width: "204px", sorted: false },
    {
      title: "Название организации",
      dataIndex: "name",
      width: "282px",
      sorted: false,
    },
    { title: "Магазин", dataIndex: "shop", width: "280px", sorted: false },
    {
      title: "Подписка",
      dataIndex: "subscription",
      width: "280px",
      sorted: true,
    },
    { title: "Статус", dataIndex: "status", width: "282px", sorted: true },
    {
      title: "Информация",
      dataIndex: "information",
      width: "235px",
      sorted: false,
    },
  ];
  const data = [
    {
      _id: "00000234",
      name: "ООО “Продукты”",
      shop: "Лента",
      subscription: "Золотая",
      status: "Неактивно",
    },
    {
      _id: "00000235",
      name: "ООО “Продукты”",
      shop: "Лента",
      subscription: "Золотая",
      status: "Неактивно",
    },
    {
      _id: "00000236",
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

  const placeholder = "Поиск по магазину...";
  const componentProps = {
    headers,
    data,
    props,
    placeholder,
    PopupSubsicriptions: <PopupSubsicriptions />,
  };

  return <CrmTemplate componentProps={componentProps} />;
}
