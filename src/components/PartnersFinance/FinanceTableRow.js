import React from 'react'
import styles from './PartnersFinance.module.sass'

function FinanceTableRow({ head, total, data }) {
  const headRow =
    <div className={styles.financeTableRow}>
      <div>№</div>
      <div>Клиент:</div>
      <div>Регион:</div>
      <div>Дата:</div>
      <div>Статус заказа:</div>
      <div>Сумма:</div>
      <div>Прибыль:</div>
    </div>

  const totalRow =
    <div className={styles.financeTableRow}>
      <div>Итого:</div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div>Сумма total</div>
      <div>Прибыль total</div>
    </div>

  return (
    <>
      { head && headRow }
      { total && totalRow }
    </>
  )
}

export default FinanceTableRow
