import React from "react";
import { ReactComponent as Modify } from "assets/Modify.svg";
import CrmTemplate from "components/crmTemplate/CrmTemplate";

export default function CategoryModeration() {
  const headers = [
    { title: "ID", dataIndex: "id", width: "98px", sorted: false },
    {
      title: "Название организации",
      dataIndex: "name",
      width: "248px",
      sorted: false,
    },
    {
      title: "Магазин",
      dataIndex: "shop",
      width: "198px",
      sorted: false,
    },
    {
      title: "Категория",
      dataIndex: "category",
      width: "218px",
      sorted: false,
    },
    {
      title: "Создана",
      dataIndex: "createdAt",
      width: "198px",
      sorted: false,
    },
    { title: "Приянт", dataIndex: "acceptedAt", width: "198px", sorted: false },
    { title: "Статус", dataIndex: "status", width: "189px", sorted: false },
    { title: "Опции", dataIndex: "options", width: "216px", sorted: false },
  ];
  const data = [
    {
      id: "00000234",
      name: "ООО “Продукты”",
      shop: "Лента",
      category: "Смартфоны и гаджеты",
      createdAt: "12.08.2020, 14:00",
      acceptedAt: "22.08.2021, 08:30",
      status: "Одобрено",
    },
    {
      id: "00000235",
      name: "ООО “Продукты”",
      shop: "Лента",
      category: "Смартфоны и гаджеты",
      createdAt: "12.08.2020, 14:00",
      acceptedAt: "22.08.2021, 08:30",
      status: "Одобрено",
    },
    {
      id: "00000236",
      name: "ООО “Продукты”",
      shop: "Лента",
      category: "Смартфоны и гаджеты",
      createdAt: "12.08.2020, 14:00",
      acceptedAt: "22.08.2021, 08:30",
      status: "Одобрено",
    },
  ];
  const props = {
    icon: <Modify />,
    title: "Модерация категорий",
  };
  const placeholder = "Поиск по магазину";
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
