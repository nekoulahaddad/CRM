import React from 'react'
import styles from './CategoriesAndGoods.module.sass'
import CategoriesAndGoodsRow from "./CategoriesAndGoodsRow"
import FormButton from "../ui/bottons/FormButton"

function CategoriesAndGoods() {
  return (
    <div className={styles.categoryContainer}>
      <h3 className={styles.title}>Основные категории:</h3>
      <>
        <CategoriesAndGoodsRow
          isFavourites={false}
          isVisible={true}
        />
        <CategoriesAndGoodsRow
          isFavourites={true}
          isVisible={true}
        />
        <CategoriesAndGoodsRow
          isFavourites={true}
          isVisible={false}
        />
        <CategoriesAndGoodsRow
          isFavourites={false}
          isVisible={false}
        />
        <CategoriesAndGoodsRow
          isFavourites={true}
          isVisible={true}
        />
      </>

      <div className={styles.buttons}>
        <FormButton text={'Добавить категорию'} />
        <FormButton text={'Добавить товар'} />
      </div>
    </div>
  )
}

export default CategoriesAndGoods
