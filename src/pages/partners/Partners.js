import React,{useEffect} from "react";
import { ReactComponent as Connect } from "assets/Connect.svg";
import CrmTemplate from "components/crmTemplate/CrmTemplate";
import { useDispatch, useSelector } from "react-redux";
import { fetchPartners } from "store/partnerSlice";
import { changePage, changeSearchTerm, changeSortField, changeSortDiection, changeLimit } from "store/filterSlice";

export default function Partners() {
  const dispatch = useDispatch()
  const { shops, numberOfPages } = useSelector((state) => state.partners);

  const { limit, page, sort_field, sort_direction, searchTerm } = useSelector((state) => state.filters);
  const headers = [
    { title: "ID", dataIndex: "displayID", width: "97px", sorted: false },
    {
      title: "Название организации",
      dataIndex: "shopName",
      width: "248px",
      sorted: false,
    },
    { title: "Магазин", dataIndex: "name", width: "197px", sorted: false },
    {
      title: "№ Договора",
      dataIndex: "contractNo",
      width: "218px",
      sorted: false,
    },
    {
      title: "Дата регистрации",
      dataIndex: "createdAt",
      width: "197px",
      sorted: true,
    },
    { title: "Телефон", dataIndex: "firstPhoneNumber", width: "197px", sorted: false },
    { title: "Статус", dataIndex: "visible", width: "188px", sorted: false },
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
