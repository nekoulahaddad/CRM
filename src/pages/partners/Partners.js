import React from "react";
import { ReactComponent as Connect } from "assets/Connect.svg";
import CrmTemplate from "components/crmTemplate/CrmTemplate";
export default function Partners() {
  const headers = [
    { title: "ID", dataIndex: "id", width: "98px", sorted: false },
    {
      title: "Название организации",
      dataIndex: "name",
      width: "248px",
      sorted: false,
    },
    { title: "Магазин", dataIndex: "shop", width: "198px", sorted: false },
    {
      title: "№ Договора",
      dataIndex: "contractNo",
      width: "218px",
      sorted: false,
    },
    {
      title: "Дата регистрации",
      dataIndex: "date",
      width: "198px",
      sorted: false,
    },
    { title: "Телефон", dataIndex: "phone", width: "198px", sorted: false },
    { title: "Статус", dataIndex: "status", width: "189px", sorted: false },
    { title: "Опции", dataIndex: "options", width: "216px", sorted: false },
  ];
  const data = [
    {
      id: "00000234",
      name: "ООО “Продукты”",
      shop: "Лента",
      contractNo: "ZZ-2021/01/015 000",
      date: "12.08.2020, 14:00",
      phone: "+7 (000) 000–00–00",
      status: true,
    },
    {
      id: "00000235",
      name: "ООО “Продукты”",
      shop: "Лента",
      contractNo: "ZZ-2021/01/015 000",
      date: "12.08.2020, 14:00",
      phone: "+7 (000) 000–00–00",
      status: true,
    },
    {
      id: "00000236",
      name: "ООО “Продукты”",
      shop: "Лента",
      contractNo: "ZZ-2021/01/015 000",
      date: "12.08.2020, 14:00",
      phone: "+7 (000) 000–00–00",
      status: true,
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
