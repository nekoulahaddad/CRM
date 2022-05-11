import React from 'react'
import styles from './PartnerInfoContainer.module.sass'

function PartnerInfoContainer({ children }) {
  return (
    <div className={styles.container}>{ children }</div>
  )
}

export default PartnerInfoContainer
