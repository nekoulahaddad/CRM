import React, { useState } from 'react'
import styles from './PartnersFinance.module.sass'
import { ReactComponent as Reverse } from "assets/Reverse.svg"
import { ReactComponent as ArrowDown } from "assets/ArrowDownInput.svg"

function FinanceFilters() {
  const actionNames = {
    all: 'За всё время',
    today: 'За сегодня',
    yesterday: 'За вчера',
    week: 'За неделю',
    month: 'За месяц',
    year: 'За год',
  }

  const [isOptionsActive, setIsOptionsActive] = useState(false)
  const [filterActions, setFilterActions] = useState(actionNames.all)

  const handleInputClick = () => setIsOptionsActive(prev => !prev)
  const handleItemClick = evt => {
    setFilterActions(evt.target.textContent)
    setIsOptionsActive(prev => !prev)
  }

  const isActive = name => {
    if (filterActions === name) return { color: '#78C2DD' }
    return null
  }

  const classes = {
    list: isOptionsActive
      ? `${styles.optionsList} ${styles.optionsList_active}`
      : styles.optionsList
  }

  return (
    <div className={styles.filters}>
      <div className={styles.icon}>
        <Reverse />
      </div>

      <div className={styles.inputContainer}>
        <ArrowDown />
        <input onClick={handleInputClick} id={'finance-input'} type="text" readOnly value={filterActions} />

        <ul className={ classes.list }>
          <li
            style={isActive(actionNames.all)}
            onClick={handleItemClick}
            className={styles.listItem}>{ actionNames.all }</li>
          <li
            style={isActive(actionNames.today)}
            onClick={handleItemClick}
            className={styles.listItem}>{ actionNames.today }</li>
          <li
            style={isActive(actionNames.yesterday)}
            onClick={handleItemClick}
            className={styles.listItem}>{ actionNames.yesterday }</li>
          <li
            style={isActive(actionNames.week)}
            onClick={handleItemClick}
            className={styles.listItem}>{ actionNames.week }</li>
          <li
            style={isActive(actionNames.month)}
            onClick={handleItemClick}
            className={styles.listItem}>{ actionNames.month }</li>
          <li
            style={isActive(actionNames.year)}
            onClick={handleItemClick}
            className={styles.listItem}>{ actionNames.year }</li>
        </ul>
      </div>

    </div>
  )
}

export default FinanceFilters
