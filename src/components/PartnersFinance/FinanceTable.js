import React from 'react'
import styles from './PartnersFinance.module.sass'
import FinanceTableRow from "./FinanceTableRow"

function FinanceTable() {
  return (
    <div className={styles.financeTable}>
      <FinanceTableRow head />
      <FinanceTableRow data={true} fakePaid={true} />
      <FinanceTableRow data={true} fakePaid={true} />
      <FinanceTableRow data={true} fakePaid={false} />
      <FinanceTableRow data={true} fakePaid={true} />
      <FinanceTableRow data={true} fakePaid={false} />
      <FinanceTableRow total />
    </div>
  )
}

export default FinanceTable
