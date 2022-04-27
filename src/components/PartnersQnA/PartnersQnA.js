import React from 'react'
import PartnerInfoContainer from "../PartnerInfoContainer/PartnerInfoContainer"
import PartnerRightColHeading from "../PartnerRightColHeading/PartnerRightColHeading"
import {useSelector} from "react-redux"
import FormButton from "../ui/bottons/FormButton"

function PartnersQnA() {
  const { sideNav } = useSelector(state => state.partners)

  return (
    <PartnerInfoContainer>
      <PartnerRightColHeading text={sideNav} />

      <FormButton text={'Добавить'} />
    </PartnerInfoContainer>
  )
}

export default PartnersQnA
