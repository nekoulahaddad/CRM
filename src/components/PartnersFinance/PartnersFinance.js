import React from 'react'
import styles from './PartnersFinance.module.sass'
import FinanceTotal from "./FinanceTotal"
import FinanceFilters from "./FinanceFilters";
import FinanceTable from "./FinanceTable";

function PartnersFinance() {
  return (
    <div className={styles.finance}>
      <h3 className={styles.title}>Дашборд:</h3>

      <div className={styles.totalWrapper}>
        <FinanceTotal title={'Кол-во заказов:'} total={'15025 шт.'} />
        <FinanceTotal title={'Кол-во доставок:'} total={'12 900 шт.'} />
        <FinanceTotal title={'Сумма покупок:'} total={'305 547 ₽'} />
        <FinanceTotal title={'Прибыль:'} total={'17 200 ₽'} />
      </div>

      <FinanceFilters />

      <FinanceTable />
    </div>
  )
}

export default PartnersFinance
