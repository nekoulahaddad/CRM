import React, { useState } from 'react'
import styles from './CategoriesAndGoods.module.sass'
import CategoriesAndGoodsRow from "./CategoriesAndGoodsRow"
import FormButton from "../ui/bottons/FormButton"
import PopupRightSide from "../PopupRightSide/PopupRightSide"
import AddCategoryPopup from "../PopupRightSide/AddCategoryPopup";

function CategoriesAndGoods() {
  const [isCategoryPopupOpen, setIsCategoryPopupOpen] = useState(false)
  const [isGoodsPopupOpen, setIsGoodsPopupOpen] = useState(false)

  const handleAddCategory = () => setIsCategoryPopupOpen(prev => !prev)
  const handleAddGoods = () => setIsGoodsPopupOpen(true)

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
        <FormButton text={'Добавить категорию'} onClick={handleAddCategory} />
        <FormButton text={'Добавить товар'} onClick={handleAddGoods} />
      </div>

      <AddCategoryPopup
        isActive={isCategoryPopupOpen}
        setIsActive={handleAddCategory}
      />

      {/*<PopupRightSide*/}
      {/*  */}
      {/*/>*/}
    </div>
  )
}

export default CategoriesAndGoods
