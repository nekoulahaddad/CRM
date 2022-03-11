import React from "react";
import { ReactComponent as People } from "assets/People.svg";
import CrmTemplate from "components/crmTemplate/CrmTemplate";

export default function Clients() {
  const headers = [
    { title: "ID", dataIndex: "id", width: "105px", sorted: false },
    { title: "Ф. И. О.", dataIndex: "name", width: "240px", sorted: false },
    {
      title: "Номер телефона",
      dataIndex: "phone",
      width: "195px",
      sorted: false,
    },
    { title: "Email", dataIndex: "email", width: "219px", sorted: false },
    {
      title: "Дата регистрации",
      dataIndex: "date",
      width: "199px",
      sorted: false,
    },
    {
      title: "Последний вход",
      dataIndex: "lastLoginin",
      width: "193px",
      sorted: false,
    },
    { title: "Статус", dataIndex: "status", width: "190px", sorted: false },
    { title: "Опции", dataIndex: "options", width: "216px", sorted: false },
  ];
  const data = [
    {
      id: "00000234",
      name: "Конcтантин Константинов",
      phone: "+7 (000) 000–00–00",
      email: "klientkonstantinov@mail.ru",
      date: "12.08.2020, 14:00",
      lastLoginin: "22.08.2021, 08:30",
      status: true,
    },
    {
      id: "00000235",
      name: "Конcтантин Константинов",
      phone: "+7 (000) 000–00–00",
      email: "klientkonstantinov@mail.ru",
      date: "12.08.2020, 14:00",
      lastLoginin: "22.08.2021, 08:30",
      status: false,
    },
    {
      id: "00000236",
      name: "Конcтантин Константинов",
      phone: "+7 (000) 000–00–00",
      email: "klientkonstantinov@mail.ru",
      date: "12.08.2020, 14:00",
      lastLoginin: "22.08.2021, 08:30",
      status: true,
    },
    {
      id: "00000237",
      name: "Конcтантин Константинов",
      phone: "+7 (000) 000–00–00",
      email: "klientkonstantinov@mail.ru",
      date: "12.08.2020, 14:00",
      lastLoginin: "22.08.2021, 08:30",
      status: true,
    },
    {
      id: "00000238",
      name: "Конcтантин Константинов",
      phone: "+7 (000) 000–00–00",
      email: "klientkonstantinov@mail.ru",
      date: "12.08.2020, 14:00",
      lastLoginin: "22.08.2021, 08:30",
      status: false,
    },
    {
      id: "00000239",
      name: "Конcтантин Константинов",
      phone: "+7 (000) 000–00–00",
      email: "klientkonstantinov@mail.ru",
      date: "12.08.2020, 14:00",
      lastLoginin: "22.08.2021, 08:30",
      status: true,
    },
    {
      id: "00000240",
      name: "Конcтантин Константинов",
      phone: "+7 (000) 000–00–00",
      email: "klientkonstantinov@mail.ru",
      date: "12.08.2020, 14:00",
      lastLoginin: "22.08.2021, 08:30",
      status: true,
    },
    {
      id: "00000241",
      name: "Конcтантин Константинов",
      phone: "+7 (000) 000–00–00",
      email: "klientkonstantinov@mail.ru",
      date: "12.08.2020, 14:00",
      lastLoginin: "22.08.2021, 08:30",
      status: false,
    },
    {
      id: "00000242",
      name: "Конcтантин Константинов",
      phone: "+7 (000) 000–00–00",
      email: "klientkonstantinov@mail.ru",
      date: "12.08.2020, 14:00",
      lastLoginin: "22.08.2021, 08:30",
      status: true,
    },
    {
      id: "00000243",
      name: "Конcтантин Константинов",
      phone: "+7 (000) 000–00–00",
      email: "klientkonstantinov@mail.ru",
      date: "12.08.2020, 14:00",
      lastLoginin: "22.08.2021, 08:30",
      status: true,
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
