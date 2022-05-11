import React from 'react'
import styles from './LanguageSwitcher.module.sass'

function LanguageSwitcher() {
  return (
    <div className={styles.languageContainer}>
      <div className={styles.language}>RU</div>
      <div className={styles.language}>ENG</div>
    </div>
  )
}

export default LanguageSwitcher
