import React from 'react'
import styles from './PartnersTwoColumns.module.sass'

function PartnersTwoColumns({ children }) {
  return (
    <div className={styles.container}>
      { children }
    </div>
  )
}

export default PartnersTwoColumns
