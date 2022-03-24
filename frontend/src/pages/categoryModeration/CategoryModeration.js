import React, { useState } from "react";
import { ReactComponent as Modify } from "assets/Modify.svg";
import CrmTemplate from "components/crmTemplate/CrmTemplate";
import PopupCategories from "components/ui/popupCategories/PopupCategories";
export default function CategoryModeration() {
  const [open, setOpen] = useState(false);

  const headers = [
    { title: "ID", dataIndex: "id", width: "98px", sorted: true },
    {
      title: "Название организации",
      dataIndex: "name",
      width: "248px",
      sorted: true,
    },
    {
      title: "Магазин",
      dataIndex: "shop",
      width: "197px",
      sorted: true,
    },
    {
      title: "Категория",
      dataIndex: "category",
      width: "216px",
      sorted: true,
    },
    {
      title: "Создана",
      dataIndex: "createdAt",
      width: "197px",
      sorted: false,
    },
    { title: "Приянт", dataIndex: "acceptedAt", width: "197px", sorted: false },
    { title: "Статус", dataIndex: "status", width: "188px", sorted: true },
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
    title: "Модерация",
  };
  const placeholder = "Поиск по магазину";
  const componentProps = {
    headers,
    data,
    props,
    placeholder,
    setOpen,
    open,
  };

  return (
    <React.Fragment>
      {componentProps ? <CrmTemplate componentProps={componentProps} /> : null}
      <PopupCategories open={open} setOpen={setOpen} />
    </React.Fragment>
  );
}
