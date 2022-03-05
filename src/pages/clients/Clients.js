import React from "react";
import { ReactComponent as People } from "assets/People.svg";
import CrmTemplate from "components/crmTemplate/CrmTemplate";

export default function Clients() {
  const headers = [
    { title: "ID", dataIndex: "id", width: "107px" },
    { title: "Ф. И. О.", dataIndex: "name", width: "241px" },
    { title: "Номер телефона", dataIndex: "phone", width: "196px" },
    { title: "Email", dataIndex: "email", width: "220px" },
    { title: "Дата регистрации", dataIndex: "date", width: "200px" },
    { title: "Последний вход", dataIndex: "lastLoginin", width: "194px" },
    { title: "Статус", dataIndex: "status", width: "190px" },
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
      id: "00000234",
      name: "Конcтантин Константинов",
      phone: "+7 (000) 000–00–00",
      email: "klientkonstantinov@mail.ru",
      date: "12.08.2020, 14:00",
      lastLoginin: "22.08.2021, 08:30",
      status: false,
    },
    {
      id: "00000234",
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
