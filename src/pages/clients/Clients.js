import React, { useEffect, useState } from "react";
import { ReactComponent as People } from "assets/People.svg";
import CrmTemplate from "components/crmTemplate/CrmTemplate";
import { useDispatch, useSelector } from "react-redux";
import { fetchClients } from "store/clientSlice";
import { changePage, changeSearchTerm, changeSortField, changeSortDiection, changeLimit } from "store/filterSlice";
export default function Clients() {
  const dispatch = useDispatch();
  const { clients, numberOfPages } = useSelector((state) => state.clients);

  const { limit, page, sort_field, sort_direction, searchTerm } = useSelector((state) => state.filters);
  const headers = [
    { title: "ID", dataIndex: "displayID", width: "105px", sorted: false },
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
      dataIndex: "createdAt",
      width: "199px",
      sorted: true,
    },
    {
      title: "Последний вход",
      dataIndex: "updatedAt",
      width: "193px",
      sorted: true,
    },
    { title: "Статус", dataIndex: "active", width: "190px", sorted: false },
    { title: "Опции", dataIndex: "options", width: "216px", sorted: false },
  ];
  const props = {
    icon: <People />,
    title: "Клиенты",
  };
  const fakeData = [  {
    _id:1,
    name: "nekoula",
    surname: "haddad",
    displayID:"00000001",
    patronymic: "hello",
    birthday: new Date(),
    createdAt:"17/01/2020",
    updatedAt:"17/01/2020",
    phone: "+7 (000) 000–00–00",
    active:true,
    email: "klientkonstantinov@mail.ru",
  },{
    _id:2,
    name: "vector",
    surname: "haddad",
    displayID:"00000002",
    patronymic: "hello",
    birthday: new Date(),
    createdAt:"17/01/2020",
    updatedAt:"17/01/2020",
    phone: "+7 (000) 000–00–00",
    active:true,
    email: "klientkonstantinov@mail.ru",
  },
]
  const placeholder = "Поиск по номеру телефона и Ф. И. О.";
  const componentProps = {
    headers,
    //data: clients,
    data: fakeData,
    props,
    placeholder,
    numberOfPages,
  };
  useEffect(() => {
    return () => {
      dispatch(changePage(0));
      dispatch(changeSearchTerm(""));
      dispatch(changeSortField("createdAt"));
      dispatch(changeSortDiection("asc"));
      dispatch(changeLimit("10"));
    };
  }, []);

  useEffect(() => {
    dispatch(fetchClients({ limit, page, sort_direction, sort_field, searchTerm }));
  }, [limit, page, sort_direction, sort_field, searchTerm]);
  return <React.Fragment>{componentProps ? <CrmTemplate componentProps={componentProps} /> : null}</React.Fragment>;
}
