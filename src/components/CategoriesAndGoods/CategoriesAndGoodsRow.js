import React from 'react'
import styles from './CategoriesAndGoods.module.sass'
import { ReactComponent as CategoryRowIcon } from "assets/CategoryRowIcon.svg"
import { ReactComponent as Edit } from "assets/Edit.svg"
import { ReactComponent as Trash } from "assets/Trash.svg"
import StarFavourites from "../icons/StarFavourites"
import EyeIcon from "../icons/EyeIcon"

function CategoriesAndGoodsRow({ isFavourites, isVisible }) {
  return (
    <div className={styles.categoryRow}>
      <div className={styles.iconAndTitle}>
        <CategoryRowIcon />
        <span className={styles.categoryName}>Наименование категории</span>
      </div>

      <div className={styles.actions}>
        <StarFavourites isFavourites={isFavourites} />
        <EyeIcon isVisible={isVisible} />
        <Edit />
        <Trash />
      </div>
    </div>
  )
}

export default CategoriesAndGoodsRow
