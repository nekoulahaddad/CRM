import React from 'react'
import styles from "../PartnerInfo/PartnerInfo.module.sass"
import { useSelector } from "react-redux"
import PartnerRightColHeading from "../PartnerRightColHeading/PartnerRightColHeading"
import PartnerInfoContainer from "../PartnerInfoContainer/PartnerInfoContainer"
import PartnersTwoColumns from "../PartnersTwoColumns/PartnersTwoColumns"
import PartnerInput from "../PartnerInput/PartnerInput"
import PartnerInputWithAdding from "../PartnerInput/PartnerInputWithAdding"

function PartnerContacts() {
  const { sideNav } = useSelector(state => state.partners)

  return (
    <PartnerInfoContainer>
      <PartnerRightColHeading text={sideNav} />
      <PartnersTwoColumns>
        <div className={styles.leftCol}>
          <PartnerInputWithAdding
            id={'email-partner'}
            type={'email'}
            title={'Email:'}
            buttonText={'Добавить email'}
          />

          <PartnerInputWithAdding
            textAreaSmall
            id={'sectionInfo-partner'}
            type={'text'}
            title={'Инфорамция раздела:'}
            buttonText={'Сохранить'}
          />
        </div>
        <div className={styles.rightCol}>
          <PartnerInputWithAdding
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
