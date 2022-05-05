import React from "react";
import { ReactComponent as Connect } from "assets/Connect.svg";
import CrmTemplate from "components/crmTemplate/CrmTemplate";
export default function Partners() {
  const headers = [
    { title: "ID", dataIndex: "_id", width: "97px", sorted: false },
    {
      title: "Название организации",
      dataIndex: "name",
      width: "248px",
      sorted: false,
    },
    { title: "Магазин", dataIndex: "shop", width: "197px", sorted: false },
    {
      title: "№ Договора",
      dataIndex: "contractNo",
      width: "218px",
      sorted: false,
    },
    {
      title: "Дата регистрации",
      dataIndex: "date",
      width: "197px",
      sorted: true,
    },
    { title: "Телефон", dataIndex: "phone", width: "197px", sorted: false },
    { title: "Статус", dataIndex: "status", width: "188px", sorted: false },
    { title: "Опции", dataIndex: "options", width: "215px", sorted: false },
  ];
  const data = [
    {
      _id: "00000234",
      name: "ООО “Продукты“",
      shop: "Лента",
      contractNo: "ZZ-2021/01/015 000",
      date: "12.08.2020, 14:00",
      phone: "+7 (495) 999–25–00",
      status: true,
    },
    {
      _id: "00000235",
      name: "ООО “Еда“",
      shop: "Ашан",
      contractNo: "ZZ-2021/01/015 000",
      date: "12.08.2020, 14:00",
      phone: "+7 (499) 788–00–95",
      status: true,
    },
    {
      _id: "00000236",
      name: "ООО “Деликатесы”",
      shop: "Перекресток",
      contractNo: "ZZ-2021/01/015 000",
      date: "12.08.2020, 14:00",
      phone: "+7 (495) 770–30–40",
      status: true,
    },
    {
      _id: "00000237",
      name: "ООО “Деликатесы”",
      shop: "Перекресток",
      contractNo: "ZZ-2021/01/015 000",
      date: "12.08.2020, 14:00",
      phone: "+7 (495) 770–30–40",
      status: true,
    },
    {
      _id: "00000238",
      name: "ООО “Продукты“",
      shop: "Лента",
      contractNo: "ZZ-2021/01/015 000",
      date: "12.08.2020, 14:00",
      phone: "+7 (495) 999–25–00",
      status: true,
    },
    {
      _id: "00000239",
      name: "ООО “Еда“",
      shop: "Ашан",
      contractNo: "ZZ-2021/01/015 000",
      date: "12.08.2020, 14:00",
      phone: "+7 (499) 788–00–95",
      status: true,
    },
  ];
  const props = {
    icon: <Connect />,
    title: "Партнеры",
  };
  const placeholder = "Поиск по магазину...";
  const componentProps = {
    headers,
    data,
    props,
    placeholder,
  };
  return <CrmTemplate componentProps={componentProps} />;
}
