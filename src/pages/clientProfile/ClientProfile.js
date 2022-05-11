import React, { useEffect } from "react";
import SideBar from "components/sideBar/SideBar";
import styles from "./ClientProfile.module.scss";
import Header from "components/header/Header";
import Table from "components/table/Table";
import Pagination from "components/pagination/Pagination";
import ClientForm from "components/clientForm/ClientForm";
import { ReactComponent as People } from "assets/People.svg";
import { ReactComponent as ArrowBack } from "assets/ArrowBack.svg";
import { useNavigate } from "react-router-dom";
import SwitchBotton from "components/ui/bottons/SwitchBotton";
import OrderInfo from "components/orderInfo/OrderInfo";
import { useParams } from "react-router-dom";
import { fetchClient } from "store/clientSlice";
import { useDispatch, useSelector } from "react-redux";
import { changePage, changeSortField, changeSortDiection, changeLimit } from "store/filterSlice";
import { getOrdersByClientId } from "store/orderSlice";
export default function ClientProfile() {
  const { page, sort_field, sort_direction } = useSelector((state) => state.filters);
  const { orders, numberOfPages } = useSelector((state) => state.orders);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { id } = useParams();
  const headers = [
    { title: "№ Заказа", dataIndex: "displayID", width: "197px", sorted: false },
    { title: "Дата и время", dataIndex: "createdAt", width: "199px", sorted: false },
    { title: "Статус", dataIndex: "statusValue", width: "195px", sorted: false },
    { title: "Магазин", dataIndex: "shopName", width: "197px", sorted: false },
    { title: "Сумма", dataIndex: "sum", width: "197px", sorted: false },
    {
      title: "Кол–во товаров",
      dataIndex: "quantity",
      width: "197px",
      sorted: false,
    },
    {
      title: "Адрес доставки",
      dataIndex: "address",
      width: "220px",
      sorted: false,
    },
    {
      title: "Доставка",
      dataIndex: "delivery_time",
      width: "171px",
      sorted: false,
      address:"Москва, бауманская ул",

    },
  ];

  const fakeData = [
    {
      displayID:"00000001",
      createdAt:"17/01/2020",
      statusValue:"доставлен",
      shopName:"Ашан",
      sum:"5500",
      quantity:"2",
      delivery_time:"17/01/2020",
      address:"Москва"
    },
    {
      displayID:"00000002",
      createdAt:"17/01/2020",
      statusValue:"доставлен",
      shopName:"Адидас",
      sum:"5500",
      quantity:"2",
      delivery_time:"17/01/2020",
      address:"Москва"
    }
  ]

  const props = {
    icon: <People />,
    title: "Клиенты",
  };
  const componentProps = {
    headers,
    //data: orders
    data:fakeData,
    OrderInfo: <OrderInfo />
  };

  useEffect(() => {
    return () => {
      dispatch(changePage(0));
      dispatch(changeSortField("createdAt"));
      dispatch(changeSortDiection("asc"));
      dispatch(changeLimit("10"));
    };
  }, []);
  useEffect(() => {
    dispatch(fetchClient({ id }));
    dispatch(getOrdersByClientId({ id }));
  }, [page, sort_direction, sort_field, id]);
  return (
    <div className={styles.wrapper}>
      <SideBar />
      <div className={styles.container}>
        <Header props={props} />
        <div onClick={() => navigate("/clients/")} className={styles.back}>
          <ArrowBack /> Назад
        </div>
        <ClientForm />
        <div className={styles.status}>
          <div>
            <SwitchBotton />
          </div>
          <div className={styles.description}>При неактивном статусе клиент будет заблокирован*</div>
        </div>
        <div className={styles.title}>Заказы:</div>
        <Table componentProps={componentProps} />
        <Pagination numberOfPages={numberOfPages} />
      </div>
    </div>
  );
}
