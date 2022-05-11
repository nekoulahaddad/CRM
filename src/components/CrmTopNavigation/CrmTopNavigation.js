import React from 'react'
import styles from './CrmTopNavigation.module.sass'

function CrmTopNavigation({ children }) {
  return (
    <div className={styles.wrapper}>{ children }</div>
  )
}

export default CrmTopNavigation
