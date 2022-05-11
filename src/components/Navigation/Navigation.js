import React from 'react'
import styles from './Navigation.module.sass'
import { useDispatch, useSelector } from "react-redux"
import { changeRightCol } from "../../store/partnerSlice"

function Navigation() {
  const dispatch = useDispatch()
  const { sideNav } =useSelector(state => state.partners)

  const handleClick = evt => {
    dispatch(changeRightCol(evt.target.textContent))
  }

  return (
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        <li
          onClick={handleClick}
          className={
            sideNav === 'Основная информация'
              ? `${styles.listItem} ${styles.listItem_active}`
              : styles.listItem
          }>Основная информация</li>
        <li
          onClick={handleClick}
          className={
            sideNav === 'Контакты'
              ? `${styles.listItem} ${styles.listItem_active}`
              : styles.listItem
          }>Контакты</li>
        <li
          onClick={handleClick}
          className={
            sideNav === 'Реквизиты'
              ? `${styles.listItem} ${styles.listItem_active}`
              : styles.listItem
          }>Реквизиты</li>
        <li
          onClick={handleClick}
          className={
            sideNav === 'Вопрос - ответ'
              ? `${styles.listItem} ${styles.listItem_active}`
              : styles.listItem
          }>Вопрос - ответ</li>
      </ul>
    </nav>
  )
}

export default Navigation
