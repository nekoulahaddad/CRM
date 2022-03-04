import React from "react";
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
export default function ClientProfile() {
  let navigate = useNavigate();

  const headers = [
    { title: "ID", dataIndex: "id" },
    { title: "Имя и Фамилия", dataIndex: "name" },
    { title: "Номер телефона", dataIndex: "phone" },
    { title: "Почта", dataIndex: "email" },
    { title: "Дата регистрации", dataIndex: "date" },
    { title: "Последний вход", dataIndex: "lastLoginin" },
    { title: "Статус", dataIndex: "status" },
  ];
  const data = [
    {
      id: "564545645641",
      name: "nekoula",
      phone: "5456564",
      email: "mail.ru",
      date: "445454",
      lastLoginin: "dsad",
      status: "dsadsad",
    },
    {
      id: "564545645643",
      name: "nekoula",
      phone: "5456564",
      email: "mail.ru",
      date: "445454",
      lastLoginin: "dsad",
      status: "dsadsad",
    },
    {
      id: "564545645644",
      name: "nekoula",
      phone: "5456564",
      email: "mail.ru",
      date: "445454",
      lastLoginin: "dsad",
      status: "dsadsad",
    },
  ];
  const props = {
    icon: <People />,
    title: "Клиенты",
  };
  const componentProps = { headers, data, OrderInfo: <OrderInfo /> };

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
          <div className={styles.title}>Статус:</div>
          <div>
            <SwitchBotton />
          </div>
          <div className={styles.description}>
            При неактивном статусе клиент будет заблокирован*
          </div>
        </div>
        <Table componentProps={componentProps} />
        <Pagination />
      </div>
    </div>
  );
}
