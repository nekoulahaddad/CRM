import React from 'react'
import PartnerInfoContainer from "../PartnerInfoContainer/PartnerInfoContainer"
import PartnerRightColHeading from "../PartnerRightColHeading/PartnerRightColHeading"
import PartnersTwoColumns from "../PartnersTwoColumns/PartnersTwoColumns"
import PartnerInput from "../PartnerInput/PartnerInput"
import { useSelector } from "react-redux"
import styles from "../PartnerInfo/PartnerInfo.module.sass"
import FormButton from "../ui/bottons/FormButton"

function PartnerRequisites() {
  const { sideNav } = useSelector(state => state.partners)

  return (
    <PartnerInfoContainer>
      <PartnerRightColHeading text={sideNav} />
      <PartnersTwoColumns>
        <div className={styles.leftCol}>
          <PartnerInput
            type={'text'}
            id={'contract-partner'}
            title={'Номер договора:'} />

          <PartnerInput
            type={'text'}
            id={'organization-partner'}
            title={'Название организации:'} />

          <PartnerInput
            type={'text'}
            id={'fio-partner'}
            title={'ФИО руководителя:'} />

          <PartnerInput
            type={'text'}
            id={'inn-partner'}
            title={'ИНН:'} />

          <PartnerInput
            type={'text'}
            id={'kpp-partner'}
            title={'КПП:'} />

          <PartnerInput
            type={'text'}
            id={'ogrn-partner'}
            title={'ОГРН/ОГРНИП:'} />

          <FormButton text={'Сохранить'} />
        </div>

        <div className={styles.rightCol}>
          <PartnerInput
            type={'text'}
            id={'urAddress-partner'}
            title={'Юридический адрес:'} />

          <PartnerInput
            type={'text'}
            id={'tax-partner'}
            title={'Налогообложение:'} />

          <PartnerInput
            type={'text'}
            id={'bik-partner'}
            title={'БИК:'} />

          <PartnerInput
            type={'text'}
            id={'bankName-partner'}
            title={'Название банка:'} />

          <PartnerInput
            type={'text'}
            id={'checkingAccount-partner'}
            title={'Расчетный счёт:'} />
        </div>
      </PartnersTwoColumns>
    </PartnerInfoContainer>
  )
}

export default PartnerRequisites
