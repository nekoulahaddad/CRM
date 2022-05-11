import React from 'react'
import styles from './FormButton.module.sass'

function FormButton({ type, text, onClick, search }) {
  const classes = {
    button: search
      ? `${styles.button} ${styles.button_search}`
      : styles.button
  }

  return (
    <button
      onClick={onClick}
      type={ type ? type : null }
      className={classes.button}>{ text }</button>
  )
}

export default FormButton
