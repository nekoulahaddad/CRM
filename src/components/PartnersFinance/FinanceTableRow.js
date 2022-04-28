import React from 'react'
import styles from './PartnersFinance.module.sass'

function FinanceTableRow({ head, total, data, fakePaid }) {
  const checkIsPaid = {
    style: fakePaid
      ? styles.financeTableRow_status_paid
      : styles.financeTableRow_status_unpaid,
    text: fakePaid
      ? 'Оплачен'
      : 'Не оплачен'
  }

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

  const infoRow =
    <div className={`${styles.financeTableRow} ${styles.financeTableRow_info}`}>
      <div>1</div>
      <div className={styles.financeTableRow_name}>Иванов Иван Иванович</div>
      <div>Москва и М.О</div>
      <div>10.11.2021</div>
      <div className={checkIsPaid.style}>{ checkIsPaid.text }</div>
      <div>2 668 ₽</div>
      <div> 668 ₽</div>
    </div>

  return (
    <>
      { head && headRow }
      { data && infoRow }
      { total && totalRow }
    </>
  )
}

export default FinanceTableRow
