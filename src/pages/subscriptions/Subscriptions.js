import React from "react";
import { ReactComponent as Notifications } from "assets/Notifications.svg";
import CrmTemplate from "components/crmTemplate/CrmTemplate";
import PopupSubsicriptions from "components/ui/popupSubsicriptions/PopupSubsicriptions";
export default function Subscriptions() {
  const headers = [
    { title: "ID", dataIndex: "id", width: "206px" },
    { title: "Название организации", dataIndex: "name", width: "282px" },
    { title: "Магазин", dataIndex: "shop", width: "281px" },
    { title: "Подписка", dataIndex: "subscription", width: "280px" },
    { title: "Статус", dataIndex: "status", width: "282px" },
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
      id: "00000234",
      name: "ООО “Продукты”",
      shop: "Лента",
      subscription: "Золотая",
      status: "Неактивно",
    },
    {
      id: "00000234",
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
