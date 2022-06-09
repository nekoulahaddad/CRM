import React, {useEffect} from "react";
import { ReactComponent as Database } from "assets/Database.svg";
import CrmTemplate from "components/crmTemplate/CrmTemplate";
import OrderInfo from "components/orderInfo/OrderInfo";
import { useDispatch, useSelector } from "react-redux";
import { changePage, changeSortField, changeSortDiection, changeLimit,changeSearchTerm } from "store/filterSlice";
import { getOrders } from "store/orderSlice";
export default function Finances() {
  const { page, sort_field, sort_direction, limit, searchTerm } = useSelector((state) => state.filters);
  const { orders, numberOfPages } = useSelector((state) => state.orders);
  const dispatch = useDispatch();
  const headers = [
    {
      title: "№ Заказа",
      dataIndex: "displayID",
      width: "176.5px",
      sorted: false,
    },
    { title: "Магазин", dataIndex: "shopName", width: "185px", sorted: false },
    { title: "Клиент", dataIndex: "clientName", width: "298px", sorted: false },
    { title: "Сумма", dataIndex: "sum", width: "158px", sorted: false },
    {
      title: "Адрес доставки",
      dataIndex: "address",
      width: "330px",
      sorted: false,
    },
    { title: "Дата и время", dataIndex: "createdAt", width: "240px", sorted: true },
    { title: "Статус", dataIndex: "statusValue", width: "172px", sorted: true },
  ];
  const data = [
    {
      _id: "00000234",
      orderNo: "00000234",
      shop: "Лента",
      client: "Смирнов Владимир",
      price: "1 987,00 руб",
      address: "Москва, ул Строителей, д18, к45",
      date: "12.08.2020, 14:00 - 14.30",
      status: "Доставлен",
    },
    {
      _id: "00000235",
      orderNo: "00000235",
      shop: "Лента",
      client: "Смирнов Владимир",
      price: "1 987,00 руб",
      address: "Москва, ул Строителей, д18, к45",
      date: "12.08.2020, 14:00 - 14.30",
      status: "Доставлен",
    },
    {
      _id: "00000236",
      orderNo: "00000236",
      shop: "Лента",
      client: "Смирнов Владимир",
      price: "1 987,00 руб",
      address: "Москва, ул Строителей, д18, к45",
      date: "12.08.2020, 14:00 - 14.30",
      status: "Доставлен",
    },
  ];

  const props = {
    icon: <Database />,
    title: "Финансы",
  };

  const placeholder = "Поиск по номеру заказа...";
  const componentProps = {
    headers,
    data:orders,
    props,
    placeholder,
    OrderInfo: <OrderInfo />,
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
    console.log("dsd")
    dispatch(getOrders({ limit, page, sort_direction, sort_field, searchTerm }));
  }, [limit, page, sort_direction, sort_field, searchTerm]);
  return <CrmTemplate componentProps={componentProps} />;
}
