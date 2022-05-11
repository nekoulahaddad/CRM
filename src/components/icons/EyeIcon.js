import React from 'react'
import { ReactComponent as EyeVisible } from 'assets/EyeVisible.svg'
import { ReactComponent as EyeInvisible } from 'assets/EyeInvisible.svg'

function EyeIcon({ isVisible }) {
  return (
    isVisible ? <EyeVisible /> : <EyeInvisible />
  )
}

export default EyeIcon
