import React from 'react'
import styles from './TopNavigationButton.module.sass'
import { useSelector } from "react-redux"

function TopNavigationButton({ text, onClick, goBack }) {
  const { topNav } = useSelector(state => state.partners)
  const isActive = topNav === text

  return (
    <button
      onClick={onClick}
      className={(isActive || goBack) ? `${styles.button} ${styles.button_active}` : styles.button}>
      <div
        className={(isActive || goBack) ? `${styles.background} ${styles.background_active}` : styles.background}
      >
        { text }
      </div>
    </button>
  )
}

export default TopNavigationButton
