import React from 'react'
import styles from './PartnerInput.module.sass'
import FormButton from "../ui/bottons/FormButton";

function PartnerInputWithAdding({ id, type, title, buttonText, textAreaSmall }) {
  return (
    <>
      <label
        htmlFor={id}
        className={styles.label}
      >
        {  }
        <h4>{ title }</h4>
        { !textAreaSmall && <input type={type} id={id}/> }
        <textarea className={!textAreaSmall ? styles.textAreaSmall : null} />
      </label>

      <div style={{margin: '0 0 10px'}}>
        <FormButton text={buttonText} />
      </div>
    </>
  )
}

export default PartnerInputWithAdding
