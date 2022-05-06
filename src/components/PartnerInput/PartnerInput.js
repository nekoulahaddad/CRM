import React from 'react'
import styles from "./PartnerInput.module.sass"
import { ReactComponent as Lock } from "assets/LockGray.svg"

function PartnerInput({ id, type, title, value, onChange, workingHours, textArea, lock }) {
  const textInput =
    <React.Fragment>
      <input
        id={id}
        name={id}
        type={type}
        onChange={onChange}
        defaultValue={value}
        disabled={lock}
      />
      { lock && <Lock/> }
    </React.Fragment>

  const fileInput =
    <React.Fragment>
      <input id={id} name={id} type={type} />
      <div className={styles.fileInputVisible} />
    </React.Fragment>

  const openingHoursInput =
    <React.Fragment>
      <div className={styles.openingHours}>
        <div className={styles.openingHours_row}>
          <span>Пн - Пт</span>
          <input defaultValue={workingHours && workingHours.weekdays.open} id={id} name={id} type="text"/>
          <input defaultValue={workingHours && workingHours.weekdays.close} id={id} name={id} type="text"/>
        </div>

        <div className={styles.openingHours_row}>
          <span>Сб - Вс</span>
          <input defaultValue={workingHours && workingHours.weekends.open} id={id} name={id} type="text"/>
          <input defaultValue={workingHours && workingHours.weekends.close} id={id} name={id} type="text"/>
        </div>
      </div>
    </React.Fragment>

  const textAreaInput =
    <textarea name={id} onChange={onChange} defaultValue={value} />

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
      { (type === 'text' || type === 'phone') && !workingHours && !textArea && textInput }
      { workingHours && openingHoursInput }
      { textArea && textAreaInput }
    </label>
  )
}

export default PartnerInput
