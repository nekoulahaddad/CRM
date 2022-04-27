import React from 'react'
import styles from './PartnersFinance.module.sass'
import FinanceTableRow from "./FinanceTableRow"

function FinanceTable() {
  return (
    <div className={styles.financeTable}>
      <div>

      </div>
      <FinanceTableRow head />
      <FinanceTableRow />
      <FinanceTableRow />
      <FinanceTableRow />
      <FinanceTableRow total />
      <div>

      </div>
    </div>
  )
}

export default FinanceTable
