import React from 'react'
import styles from "./PopupRightSide.module.sass";
import FormButton from "../ui/bottons/FormButton";
import CategoryItem from "./CategoryItem";
import { ReactComponent as CategoryRowIcon } from "../../assets/CategoryRowIcon.svg";
import { addNewCategory } from "../../store/rightSidePopusSlice";
import { useDispatch } from "react-redux";

function AddExistCategory() {
  const dispatch = useDispatch()
  const handleAddNewCategory = () => dispatch(addNewCategory())

  return (
    <React.Fragment>
      <h4 className={styles.subtitle}>Категория уже имеется на ZumZak:</h4>
      <p className={styles.description}>В нашей базе данных существует огромное колличество категорий которыми вы можете воспользоваться.</p>

      <form className={styles.searchForm}>
        <input
          className={`${styles.input} ${styles.input_width_half}`}
          name={'categorySearch'}
          type="text"
          placeholder={'Введите наименование...'}/>
        <FormButton search text={'Поиск'} />
      </form>

      <div className={styles.categories}>
        <ul className={styles.categoryColumn}>
          <CategoryItem icon={<CategoryRowIcon />} text={'Apple'} />
          <CategoryItem icon={<CategoryRowIcon />} text={'AppleAppleAppleApple'} />
          <CategoryItem icon={<CategoryRowIcon />} text={'Apple'} />
          <CategoryItem icon={<CategoryRowIcon />} text={'Apple'} />
        </ul>
        <ul className={styles.categoryColumn}></ul>
        <ul className={styles.categoryColumn}></ul>
        <ul className={styles.categoryColumn}></ul>
      </div>

      <FormButton text={'Добавить'} />
      <div className={styles.divider} />

      <h4 className={styles.subtitle}>Добавить новую категорию на ZumZak:</h4>
      <p className={styles.description}>Чтобы добавить категорию, который ещё нету на ZumZak создайте новую категорию и заполните её параметры и отправьте на модерацию.</p>
      <FormButton text={'Добавить новую категорию'} onClick={handleAddNewCategory} />
    </React.Fragment>
  )
}

export default AddExistCategory
