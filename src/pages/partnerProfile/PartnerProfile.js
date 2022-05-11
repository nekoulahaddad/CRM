import React, { useEffect } from 'react'
import styles from "./PartnerProfile.module.scss";
import '../../styles/bootstrap.sass'
import SideBar from "../../components/sideBar/SideBar";
import Header from "../../components/header/Header";
import { ReactComponent as Connect } from "assets/Connect.svg";
import { ReactComponent as ArrowBack } from "assets/ArrowBackBigWhite.svg";
import { useNavigate, useParams } from "react-router-dom";
import OrderInfo from "../../components/orderInfo/OrderInfo";
import Navigation from "../../components/Navigation/Navigation";
import PartnerInfo from "../../components/PartnerInfo/PartnerInfo";
import CrmTopNavigation from "../../components/CrmTopNavigation/CrmTopNavigation";
import TopNavigationButton from "../../components/ui/bottons/TopNavigationButton/TopNavigationButton";
import { useDispatch, useSelector } from "react-redux";
import {changeSection, setCurrentShop, setCurrentRequisites, changeRightCol} from "../../store/partnerSlice";
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
  const { sideNav, topNav, shops, currentShop } = useSelector(state => state.partners)

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

  const headerProps = {
    icon: <Connect />,
    title: "Партнеры",
  };

  const componentProps = {
    headers,
    //data: orders
    data: shops,
    OrderInfo: <OrderInfo />
  };

  const handleTopNavigationClick = evt => {
    dispatch(changeSection(evt.target.textContent))
  }

  useEffect(() => {
    dispatch(changeRightCol('Основная информация'))
    dispatch(setCurrentShop(id))
    dispatch(setCurrentRequisites(id))
  }, [id])

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
              { sideNav === 'Основная информация' && <PartnerInfo /> }
              { sideNav === 'Контакты' && <PartnerContacts data={currentShop} /> }
              { sideNav === 'Реквизиты' && <PartnerRequisites /> }
              { sideNav === 'Вопрос - ответ' && <PartnersQnA data={currentShop} /> }
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
