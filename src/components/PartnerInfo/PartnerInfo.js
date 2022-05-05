import React from 'react'
import styles from './PartnerInfo.module.sass'
import PartnerInput from "../PartnerInput/PartnerInput"
import FormButton from "../ui/bottons/FormButton"
import PartnerRightColHeading from "../PartnerRightColHeading/PartnerRightColHeading"
import PartnerInfoContainer from "../PartnerInfoContainer/PartnerInfoContainer"
import { useSelector } from "react-redux"
import PartnersTwoColumns from "../PartnersTwoColumns/PartnersTwoColumns"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function PartnerInfo({ data }) {
  const { sideNav } = useSelector(state => state.partners)

  const handleSave = () =>{
    toast.success('🦄 Info successfully saved!', {
      position: "bottom-right",
      autoClose: 1100,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return (
    <PartnerInfoContainer>
      <PartnerRightColHeading text={sideNav} />

      <PartnersTwoColumns>
        <div className={styles.leftCol}>
          <PartnerInput
            id={'file-partner'}
            type={'file'}
            title={'Загрузите свой логотип:'} />

          <PartnerInput
            lock
            id={'store-partner'}
            type={'text'}
            value={data.shop}
            title={'Название магазина:'} />

          <PartnerInput
            lock
            id={'country-partner'}
            type={'text'}
            title={'Страна:'} />

          <PartnerInput
            lock
            id={'city-partner'}
            type={'text'}
            title={'Город:'} />

          <PartnerInput
            id={'address-partner'}
            type={'text'}
            title={'Адрес:'} />

          <FormButton type={'submit'} text={'Сохранить'} onClick={handleSave} />
        </div>

        <div className={styles.rightCol}>
          <PartnerInput
            id={'phone-partner'}
            type={'phone'}
            value={data.phone}
            title={'Контактный телефон пользователя:'} />

          <PartnerInput
            lock
            id={'storeCategory-partner'}
            type={'text'}
            title={'Категория магазина:'} />

          <PartnerInput
            openingHours
            id={'openingHours-partner'}
            type={'text'}
            title={'Время работы:'} />

          <PartnerInput
            textArea
            id={'description-partner'}
            type={'text'}
            title={'Краткое описание:'} />
        </div>
      </PartnersTwoColumns>

      <ToastContainer
        position="bottom-right"
        autoClose={1100}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </PartnerInfoContainer>
  )
}

export default PartnerInfo
