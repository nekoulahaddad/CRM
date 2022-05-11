import React from 'react'
import styles from "../PartnerInfo/PartnerInfo.module.sass"
import { useSelector } from "react-redux"
import PartnerRightColHeading from "../PartnerRightColHeading/PartnerRightColHeading"
import PartnerInfoContainer from "../PartnerInfoContainer/PartnerInfoContainer"
import PartnersTwoColumns from "../PartnersTwoColumns/PartnersTwoColumns"
import PartnerInputWithAdding from "../PartnerInput/PartnerInputWithAdding"

function PartnerContacts() {
  const { sideNav } = useSelector(state => state.partners)

  return (
    <PartnerInfoContainer>
      <PartnerRightColHeading text={sideNav} />
      <PartnersTwoColumns>
        <div className={styles.leftCol}>
          <PartnerInputWithAdding
            name={'email'}
            id={'email-partner'}
            type={'email'}
            title={'Email:'}
            buttonText={'Добавить email'}
          />

          <PartnerInputWithAdding
            textAreaSmall
            name={'description'}
            id={'sectionInfo-partner'}
            type={'text'}
            title={'Инфорамция раздела:'}
            buttonText={'Сохранить'}
          />
        </div>
        <div className={styles.rightCol}>
          <PartnerInputWithAdding
            name={'phone'}
            id={'phoneContacts-partner'}
            type={'phone'}
            title={'Контактный телефон:'}
            buttonText={'Добавить телефон'}
          />
        </div>
      </PartnersTwoColumns>
    </PartnerInfoContainer>
  )
}

export default PartnerContacts
