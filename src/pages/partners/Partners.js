import React from "react";
import { ReactComponent as Connect } from "assets/Connect.svg";
import CrmTemplate from "components/crmTemplate/CrmTemplate";
import { useSelector } from "react-redux";

export default function Partners() {
  const { shops } = useSelector(state => state.partners)

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

  const props = {
    icon: <Connect />,
    title: "Партнеры",
  };
  const placeholder = "Поиск по магазину...";
  const componentProps = {
    headers,
    data: shops,
    props,
    placeholder,
  };
  return <CrmTemplate componentProps={componentProps} />;
}
