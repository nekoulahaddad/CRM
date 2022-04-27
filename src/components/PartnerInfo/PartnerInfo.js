import React from 'react'
import styles from './PartnerInfo.module.sass'
import PartnerInput from "../PartnerInput/PartnerInput"
import FormButton from "../ui/bottons/FormButton"
import PartnerRightColHeading from "../PartnerRightColHeading/PartnerRightColHeading"
import PartnerInfoContainer from "../PartnerInfoContainer/PartnerInfoContainer"
import { useSelector } from "react-redux"
import PartnersTwoColumns from "../PartnersTwoColumns/PartnersTwoColumns"

function PartnerInfo({ data }) {
  const { sideNav } = useSelector(state => state.partners)

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

          <FormButton type={'submit'} text={'Сохранить'} />
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
    </PartnerInfoContainer>
  )
}

export default PartnerInfo
