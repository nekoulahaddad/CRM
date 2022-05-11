import React from 'react'
import styles from './PopupRightSide.module.sass'
import { ReactComponent as ArrowRight } from "assets/ArrowRight.svg"

function CategoryItem({ icon, text }) {
  return (
    <li className={styles.categoryItem}>
      <div className={styles.categoryItemInner}>
        <div className={styles.categoryItemLeft}>
          { icon }
          <p>{ text }</p>
        </div>
        <ArrowRight />
      </div>
    </li>
  )
}

export default CategoryItem
