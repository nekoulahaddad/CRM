import React, { useRef, useState } from 'react'
import styles from './PartnerInput.module.sass'
import FormButton from "../ui/bottons/FormButton"
import { ReactComponent as Trash } from 'assets/Trash.svg'

function PartnerInputWithAdding(
  {
    id,
    name,
    type,
    title,
    buttonText,
    textAreaSmall,
  }
    ) {
  const inputRef = useRef()
  const textareaRef = useRef()
  const textRef = useRef()

  const fakeEmails = [
    {
      email: 'vanillaen@gmail.com',
      description: 'Main Email',
    }
  ]

  const fakePhones = [
    {
      phone: '+7 495 100 57 40',
      description: 'По вопросам возвратов.'
    }
  ]

  const fakeDescription = {
    description: 'Test description Test description Test description'
  }

  const setCurrentData = inputType => {
    switch (inputType) {
      case 'email':
        return fakeEmails
      case 'phone':
        return fakePhones
      case 'text':
        return fakeDescription
      default:
        return null
    }
  }

  const [data, setData] = useState(setCurrentData(type))
  const [formValues, setFormValues] = useState({})

  const handleButtonClick = () => {
    if (type === 'text') return null
    const newData = data.concat(formValues)
    setData(newData)
    setFormValues({})

    inputRef.current.value = ''
    textareaRef.current.value = ''
  }

  const onChange = evt => {
    const { name, value } = evt.target

    setFormValues(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const handleTrashClick = () => {
    const newData = data.filter(d => d[type] !== textRef.current.textContent)
    setData(newData)
  }

  return (
    <React.Fragment>

      {
        type === 'email' && data.map((email, i) => (
          <div key={i * Math.random()} className={styles.emailsContainer}>
            <div ref={textRef} className={styles.emailRow}>{ email[type] }</div>
            <div className={styles.descriptionRow}>{ email.description }</div>
            <div onClick={handleTrashClick} className={styles.iconTrash}>
              <Trash />
            </div>
          </div>
        ))
      }

      {
        type === 'phone' && data.map((phone, i) => (
          <div key={i * Math.random()} className={styles.emailsContainer}>
            <div ref={textRef} className={styles.emailRow}>{ phone[type] }</div>
            <div className={styles.descriptionRow}>{ phone.description }</div>
            <div onClick={handleTrashClick} className={styles.iconTrash}>
              <Trash />

            </div>
          </div>
        ))
      }

      <label
        htmlFor={id}
        className={styles.label}
      >
        <h4>{ title }</h4>
        {
          !textAreaSmall &&
          <input
            ref={inputRef}
            onChange={onChange}
            name={name}
            type={type}
            id={id} />
        }

        <textarea
          // ref={textareaRef}
          value={formValues.description}
          onChange={onChange}
          name={'description'}
          className={!textAreaSmall ? styles.textAreaSmall : null} />
      </label>

      <div style={{margin: '0 0 10px'}}>
        <FormButton text={buttonText} onClick={handleButtonClick} />
      </div>
    </React.Fragment>
  )
}

export default PartnerInputWithAdding
