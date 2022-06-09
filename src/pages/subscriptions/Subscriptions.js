import React,{useEffect} from "react";
import { ReactComponent as Notifications } from "assets/Notifications.svg";
import CrmTemplate from "components/crmTemplate/CrmTemplate";
import PopupSubsicriptions from "components/ui/popupSubsicriptions/PopupSubsicriptions";
import { useDispatch, useSelector } from "react-redux";
import { fetchPartners } from "store/partnerSlice";
import { changePage, changeSearchTerm, changeSortField, changeSortDiection, changeLimit } from "store/filterSlice";
export default function Subscriptions() {
  const dispatch = useDispatch()
  const { shops, numberOfPages } = useSelector((state) => state.partners);

  const { limit, page, sort_field, sort_direction, searchTerm } = useSelector((state) => state.filters);
  const headers = [
    { title: "ID", dataIndex: "displayID", width: "204px", sorted: false },
    {
      title: "Название организации",
      dataIndex: "shopName",
      width: "282px",
      sorted: false,
    },
    { title: "Магазин", dataIndex: "name", width: "280px", sorted: false },
    {
      title: "Подписка",
      dataIndex: "currentSub",
      width: "280px",
      sorted: true,
    },
    { title: "Статус", dataIndex: "visible", width: "282px", sorted: true },
    {
      title: "Информация",
      dataIndex: "information",
      width: "235px",
      sorted: false,
    },
  ];
  const props = {
    icon: <Notifications />,
    title: "Подписки",
  };
  const ids = ["1"];

  const placeholder = "Поиск по магазину...";
  const componentProps = {
    headers,
    data:shops,
    props,
    placeholder,
    PopupSubsicriptions: <PopupSubsicriptions />,
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
    dispatch(fetchPartners({ limit, page, sort_direction, sort_field, searchTerm }));
  }, [limit, page, sort_direction, sort_field, searchTerm]);
  return <CrmTemplate componentProps={componentProps} />;
}
