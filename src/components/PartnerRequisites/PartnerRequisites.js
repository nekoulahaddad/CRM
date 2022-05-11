import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useForm } from "../../hooks/useForm"
import PartnerInfoContainer from "../PartnerInfoContainer/PartnerInfoContainer"
import PartnerRightColHeading from "../PartnerRightColHeading/PartnerRightColHeading"
import PartnersTwoColumns from "../PartnersTwoColumns/PartnersTwoColumns"
import PartnerInput from "../PartnerInput/PartnerInput"
import { useSelector } from "react-redux"
import styles from "../PartnerInfo/PartnerInfo.module.sass"
import FormButton from "../ui/bottons/FormButton"

function PartnerRequisites() {
  const { sideNav, currentShop, currentRequisites } = useSelector(state => state.partners)
  const { formValues, setFormValues, handleChange } = useForm()
  const { id } = useParams()

  useEffect(() => {
    setFormValues({ ...currentRequisites })
  }, [id])

  return (
    <PartnerInfoContainer>
      <PartnerRightColHeading text={sideNav} />
      <PartnersTwoColumns>
        <div className={styles.leftCol}>
          <PartnerInput
            value={currentShop.contractNo}
            type={'text'}
            id={'contract-partner'}
            title={'Номер договора:'} />

          <PartnerInput
            value={currentShop.name}
            type={'text'}
            id={'organization'}
            title={'Название организации:'} />

          <PartnerInput
            value={currentRequisites.director}
            type={'text'}
            id={'director'}
            title={'ФИО руководителя:'} />

          <PartnerInput
            value={formValues.INN}
            type={'text'}
            id={'INN'}
            title={'ИНН:'} />

          <PartnerInput
            value={formValues.KPP}
            type={'text'}
            id={'KPP'}
            title={'КПП:'} />

          <PartnerInput
            value={formValues.OGRN}
            type={'text'}
            id={'OGRN'}
            title={'ОГРН/ОГРНИП:'} />

          <FormButton text={'Сохранить'} />
        </div>

        <div className={styles.rightCol}>
          <PartnerInput
            value={formValues.urAddress}
            type={'text'}
            id={'urAddress'}
            title={'Юридический адрес:'} />

          <PartnerInput
            value={formValues.tax}
            type={'text'}
            id={'tax'}
            title={'Налогообложение:'} />

          <PartnerInput
            value={formValues.BIK}
            type={'text'}
            id={'BIK'}
            title={'БИК:'} />

          <PartnerInput
            value={formValues.bankName}
            type={'text'}
            id={'bankName'}
            title={'Название банка:'} />

          <PartnerInput
            value={formValues.checkingAccount}
            type={'text'}
            id={'checkingAccount'}
            title={'Расчетный счёт:'} />
        </div>
      </PartnersTwoColumns>
    </PartnerInfoContainer>
  )
}

export default PartnerRequisites
