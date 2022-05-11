import React, { useEffect } from 'react'
import styles from './PartnerInfo.module.sass'
import { useForm } from "../../hooks/useForm"
import PartnerInput from "../PartnerInput/PartnerInput"
import FormButton from "../ui/bottons/FormButton"
import PartnerRightColHeading from "../PartnerRightColHeading/PartnerRightColHeading"
import PartnerInfoContainer from "../PartnerInfoContainer/PartnerInfoContainer"
import { useSelector, useDispatch } from "react-redux"
import { changePartnerInfo, updateCurrentShop } from "../../store/partnerSlice"
import PartnersTwoColumns from "../PartnersTwoColumns/PartnersTwoColumns"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function PartnerInfo() {
  const { formValues, setFormValues, handleChange } = useForm()
  const { sideNav, currentShop, shops } = useSelector(state => state.partners)
  const dispatch = useDispatch()

  const handleSave = evt =>{
    evt.preventDefault()
    dispatch(changePartnerInfo(formValues))
    dispatch(updateCurrentShop(formValues))

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

  useEffect(() => {
    // setFormValues({ ...data })
    setFormValues({ ...currentShop })
  }, [currentShop, shops])

  return (
    <PartnerInfoContainer>
      <PartnerRightColHeading text={sideNav} />

      <form onSubmit={handleSave}>
        <PartnersTwoColumns>
          <div className={styles.leftCol}>
            <PartnerInput
              id={'file'}
              type={'file'}
              title={'Загрузите свой логотип:'} />

            <PartnerInput
              lock
              id={'shop'}
              type={'text'}
              value={formValues.shop}
              title={'Название магазина:'} />

            <PartnerInput
              lock
              value={formValues.country}
              id={'country'}
              type={'text'}
              title={'Страна:'} />

            <PartnerInput
              lock
              value={formValues.city}
              id={'city'}
              type={'text'}
              title={'Город:'} />

            <PartnerInput
              onChange={handleChange}
              value={formValues.address}
              id={'address'}
              type={'text'}
              title={'Адрес:'} />

            <FormButton type={'submit'} text={'Сохранить'} />
          </div>

          <div className={styles.rightCol}>
            <PartnerInput
              value={formValues.phone}
              id={'phone'}
              type={'phone'}
              title={'Контактный телефон пользователя:'} />

            <PartnerInput
              lock
              id={'category'}
              type={'text'}
              title={'Категория магазина:'} />

            <PartnerInput
              workingHours={formValues.workingHours}
              id={'workingHours'}
              type={'text'}
              title={'Время работы:'} />

            <PartnerInput
              textArea
              value={formValues.description}
              id={'description'}
              type={'text'}
              title={'Краткое описание:'} />
          </div>
        </PartnersTwoColumns>
      </form>

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
