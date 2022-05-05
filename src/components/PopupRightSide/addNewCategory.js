import React from 'react'
import styles from "./PopupRightSide.module.sass"
import { ReactComponent as Question } from "assets/Question.svg"
import { ReactComponent as AddPhoto } from "assets/AddPhoto.svg"
import { ReactComponent as Trash } from "assets/Trash.svg"
import FormButton from "../ui/bottons/FormButton"
import AddPhotoLarge from "./AddPhotoLarge"
import AddPhotoSmall from "./AddPhotoSmall";
import AddPhotoSquare from "./AddPhotoSquare";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

function AddNewCategory() {
  return (
    <React.Fragment>
      <LanguageSwitcher />

      <h3 className={styles.addNewCategorySubtitle}>Основная информация:</h3>

      <div className={styles.newCategoryPhotoAndNaming}>
        <div className={styles.newCategoryColumn}>
          <div className={styles.newCategoryLabelContainer}>
            <h4 className={styles.newCategoryLabel}>Название категории:</h4>
          </div>

          <input
            className={styles.input}
            name={'newCategoryName'}
            type={'text'}
            placeholder={'Введите название категории...'}
          />

          <div className={styles.newCategoryLabelContainer}>
            <h4 className={styles.newCategoryLabel}>Фотография категории:</h4>
            <Question />
          </div>

          <AddPhotoLarge />
          <FormButton text={'Добавить'} />
        </div>

        <div className={styles.newCategoryColumn}>
          <div className={styles.newCategoryLabelContainer}>
            <h4 className={styles.newCategoryLabel}>Иконка категории:</h4>
            <Question />
          </div>
          <AddPhotoSmall />
          <FormButton text={'Добавить'} />
        </div>
      </div>

      <div className={styles.newCategoryLabelContainer}>
        <h4 className={styles.newCategoryLabel}>Часто ищут:</h4>
        <Question />
      </div>

      <input className={styles.input} placeholder={'Введите название категории...'}/>

      <ul className={styles.mostSearchedContainer}>
        <li className={styles.mostSearchedItem}>
          <span>Защитное стекло АМП / 3 мл</span>
          <Trash />
        </li>
        <li className={styles.mostSearchedItem}>
          <span>Защитное стекло АМП / 3 мл</span>
          <Trash />
        </li>
        <li className={styles.mostSearchedItem}>
          <span>Защитное стекло АМП / 3 мл</span>
          <Trash />
        </li>
        <li className={styles.mostSearchedItem}>
          <span>Защитное стекло АМП / 3 мл</span>
          <Trash />
        </li>
      </ul>

      <div className={styles.titleSeoContainer}>
        <h3 className={styles.addNewCategorySubtitle}>Настройка SEO:</h3>
        <Question />
      </div>

      <div className={styles.newCategoryLabelContainer}>
        <h4 className={styles.newCategoryLabel}>Title:</h4>
      </div>

      <input
        className={styles.input}
        placeholder={'Введите заголовок...'}
        name={'title'}
        type="text"/>

      <div className={styles.newCategoryLabelContainer}>
        <h4 className={styles.newCategoryLabel}>Meta description:</h4>
      </div>

      <input
        className={styles.input}
        placeholder={'Введите ключевые слова...'}
        name={'meta'}
        type="text"/>

      <div className={styles.newCategoryLabelContainer}>
        <h4 className={styles.newCategoryLabel}>Description:</h4>
      </div>

      <textarea
        className={`${styles.input} ${styles.textarea}`}
        placeholder={'Введите описание...'}
        name={'meta'}
        type="text"/>


      <h3 className={styles.addNewCategorySubtitle}>Банеры:</h3>
      <div className={styles.slidersContainer}>
        <div>
          <div className={styles.newCategoryLabelContainer}>
            <h4 className={styles.newCategoryLabel}>Слайдер 1280 х 352 px:</h4>
          </div>
          <AddPhotoLarge />
        </div>

        <div>
          <div className={`${styles.newCategoryLabelContainer} ${styles.newCategoryLabelContainer_sb}`}>
            <h4 className={styles.newCategoryLabel}>Слайдер 1280 х 352 px (моб.):</h4>
            <Question />
          </div>
          <AddPhotoLarge />
        </div>
      </div>

      <div className={styles.urlContainer}>
        <h4 className={styles.newCategoryLabel}>URL ссылка:</h4>
        <input name={'slider'} className={styles.input} placeholder={'Ссылка куда ведёт этот баннер'} type="text"/>
      </div>

      <div className={styles.bannersContainer}>
        <div>
          <div className={`${styles.newCategoryLabelContainer} ${styles.newCategoryLabelContainer_sb}`}>
            <h4 className={styles.newCategoryLabel}>Баннер 1280 х 352 px:</h4>
          </div>
          <AddPhotoLarge mob />
        </div>
        <div>
          <div className={`${styles.newCategoryLabelContainer} ${styles.newCategoryLabelContainer_sb}`}>
            <h4 className={styles.newCategoryLabel}>Баннер 1280 х 352 px (моб.):</h4>
            <Question />
          </div>
          <AddPhotoLarge mob />
        </div>
      </div>

      <div className={styles.urlContainer}>
        <h4 className={styles.newCategoryLabel}>URL ссылка:</h4>
        <input name={'banner'} className={styles.input} placeholder={'Ссылка куда ведёт этот баннер'} type="text"/>
      </div>

      <div className={styles.bannersSquares}>
        <div>
          <div className={`${styles.newCategoryLabelContainer} ${styles.newCategoryLabelContainer_sb}`}>
            <h4 className={styles.newCategoryLabel}>Баннер 142 х 142 px:</h4>
          </div>
          <AddPhotoSmall />
        </div>
        <div>
          <div className={`${styles.newCategoryLabelContainer} ${styles.newCategoryLabelContainer_sb}`}>
            <h4 className={styles.newCategoryLabel}>Баннер 142 х 142 px (моб.):</h4>
            <Question />
          </div>
          <AddPhotoSmall />
        </div>
      </div>

      <div className={styles.urlContainer}>
        <h4 className={styles.newCategoryLabel}>URL ссылка:</h4>
        <input name={'bannerSquareSmall'} className={styles.input} placeholder={'Ссылка куда ведёт этот баннер'} type="text"/>
      </div>

      <div className={styles.bannersSquares}>
        <div>
          <div className={`${styles.newCategoryLabelContainer} ${styles.newCategoryLabelContainer_sb}`}>
            <h4 className={styles.newCategoryLabel}>Размер баннеров 353 х 302 px:</h4>
          </div>
          <AddPhotoSquare />
        </div>
        <div>
          <div className={`${styles.newCategoryLabelContainer} ${styles.newCategoryLabelContainer_sb}`}>
            <h4 className={styles.newCategoryLabel}>Размер баннеров 353 х 302 px (моб.):</h4>
            <Question />
          </div>
          <AddPhotoSquare />
        </div>
      </div>

      <div style={{ margin: '0 0 10px' }} className={styles.urlContainer}>
        <h4 className={styles.newCategoryLabel}>URL ссылка:</h4>
        <input name={'bannerSquareMid'} className={styles.input} placeholder={'Ссылка куда ведёт этот баннер'} type="text"/>
      </div>

      <FormButton text={'Сохранить'} />

    </React.Fragment>
  )
}

export default AddNewCategory
