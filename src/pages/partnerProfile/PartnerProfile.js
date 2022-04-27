import React, { useEffect, useState } from 'react'
import styles from "./PartnerProfile.module.scss";
import '../../styles/bootstrap.sass'
import SideBar from "../../components/sideBar/SideBar";
import Header from "../../components/header/Header";
import { ReactComponent as Connect } from "assets/Connect.svg";
import { ReactComponent as ArrowBack } from "assets/ArrowBackBigWhite.svg";
import { useNavigate, useParams } from "react-router-dom";
import ClientForm from "../../components/clientForm/ClientForm";
import SwitchBotton from "../../components/ui/bottons/SwitchBotton";
import Table from "../../components/table/Table";
import Pagination from "../../components/pagination/Pagination";
import OrderInfo from "../../components/orderInfo/OrderInfo";
import Navigation from "../../components/Navigation/Navigation";
import PartnerInfo from "../../components/PartnerInfo/PartnerInfo";
import CrmTopNavigation from "../../components/CrmTopNavigation/CrmTopNavigation";
import TopNavigationButton from "../../components/ui/bottons/TopNavigationButton/TopNavigationButton";
import {useDispatch, useSelector} from "react-redux";
import { changeSection } from "../../store/partnerSlice";
import PartnerContacts from "../../components/PartnerContacts/PartnerContacts";
import PartnerRequisites from "../../components/PartnerRequisites/PartnerRequisites";
import PartnersQnA from "../../components/PartnersQnA/PartnersQnA";
import Search from "../../components/ui/search/Search";
import CategoryModeration from "../categoryModeration/CategoryModeration";
import CategoriesAndGoods from "../../components/CategoriesAndGoods/CategoriesAndGoods";
import PartnersFinance from "../../components/PartnersFinance/PartnersFinance";

function PartnerProfile() {
  const navigate = useNavigate()
  const { id } = useParams()
  const dispatch = useDispatch()
  const { sideNav, topNav } = useSelector(state => state.partners)
  const [store, setStore] = useState({})

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

  const fakeData = [
    {
      _id: "00000234",
      name: "ООО “Продукты”",
      shop: "Лента",
      contractNo: "ZZ-2021/01/015 000",
      date: "12.08.2020, 14:00",
      phone: "+7 (000) 000–00–00",
      status: true,
    },
    {
      _id: "00000235",
      name: "ООО “Продукты”",
      shop: "Лента",
      contractNo: "ZZ-2021/01/015 000",
      date: "12.08.2020, 14:00",
      phone: "+7 (000) 000–00–00",
      status: true,
    },
    {
      _id: "00000236",
      name: "ООО “Продукты”",
      shop: "Лента",
      contractNo: "ZZ-2021/01/015 000",
      date: "12.08.2020, 14:00",
      phone: "+7 (000) 000–00–00",
      status: true,
    },
  ];

  const headerProps = {
    icon: <Connect />,
    title: "Партнеры",
  };

  const componentProps = {
    headers,
    //data: orders
    data: fakeData,
    OrderInfo: <OrderInfo />
  };

  const handleTopNavigationClick = evt => {
    dispatch(changeSection(evt.target.textContent))
  }

  useEffect(() => {
    setStore(fakeData.find(item => item._id === id))
  }, [])

  return (
    <div className={styles.wrapper}>
      <SideBar />

      <div className={styles.container}>
        <Header props={headerProps} />

        <CrmTopNavigation>
          <TopNavigationButton onClick={() => navigate(-1)} text={<ArrowBack />} goBack />
          <TopNavigationButton onClick={handleTopNavigationClick} text={'Контакты'} />
          <TopNavigationButton onClick={handleTopNavigationClick} text={'Категории и товары'} />
          <TopNavigationButton onClick={handleTopNavigationClick} text={'Финансы'} />
        </CrmTopNavigation>

        {
          topNav === 'Контакты' &&
          <div className={styles.content}>
            <div className={styles.leftCol}>
              <Navigation />
            </div>

            <div className={styles.contacts}>
              { sideNav === 'Основная информация' && <PartnerInfo data={store} /> }
              { sideNav === 'Контакты' && <PartnerContacts data={store} /> }
              { sideNav === 'Реквизиты' && <PartnerRequisites data={store} /> }
              { sideNav === 'Вопрос - ответ' && <PartnersQnA data={store} /> }
            </div>
          </div>
        }

        {
          topNav === 'Категории и товары' &&
            <>
              <Search placeholder={'Поиск категории, подкатегории, товара...'} />
              <CategoriesAndGoods />
            </>
        }

        { topNav === 'Финансы' && <PartnersFinance /> }

      </div>
    </div>
  )
}

export default PartnerProfile
