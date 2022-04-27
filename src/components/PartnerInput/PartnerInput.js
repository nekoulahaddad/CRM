import React from 'react'
import styles from "./PartnerInput.module.sass"
import { ReactComponent as Lock } from "assets/LockGray.svg"

function PartnerInput({ id, type, title, value, openingHours, textArea, lock }) {

  const textInput =
    <>
      <input id={id} type={type} defaultValue={value} />
      { lock && <Lock/> }
    </>

  const fileInput =
    <>
      <input id={id} type={type} />
      <div className={styles.fileInputVisible} />
    </>

  const openingHoursInput =
    <>
      <div className={styles.openingHours}>
        <div className={styles.openingHours_row}>
          <span>Пн - Пт</span>
          <input type="text"/>
          <input type="text"/>
        </div>

        <div className={styles.openingHours_row}>
          <span>Сб - Вс</span>
          <input type="text"/>
          <input type="text"/>
        </div>
      </div>
    </>

  const textAreaInput =
    <>
      <textarea />
    </>

  return (
    <label
      htmlFor={id}
      className={
        type === 'file'
          ? `${styles.label} ${styles.label_file}`
          : styles.label
      }
    >
      <h4>{ title }</h4>
      { type === 'file' && fileInput }
      { (type === 'text' || type === 'phone') && !openingHours && !textArea && textInput }
      { openingHours && openingHoursInput }
      { textArea && textAreaInput }
    </label>
  )
}

export default PartnerInput
