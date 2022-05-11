import React from 'react'
import styles from './PartnersFinance.module.sass'

function FinanceTotal({ title, total }) {
  return (
    <div className={styles.totalCard}>
      <h4>{ title }</h4>
      <p>{ total }</p>
    </div>
  )
}

export default FinanceTotal
