import React from 'react'
import styles from './FormButton.module.sass'

function FormButton({ type, text, onClick }) {
  return (
    <button
      onClick={onClick}
      type={ type ? type : null }
      className={styles.button}>{ text }</button>
  )
}

export default FormButton
