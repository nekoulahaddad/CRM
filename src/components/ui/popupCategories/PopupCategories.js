import React from "react";
import styles from "./PopupCategories.module.scss";
import { ReactComponent as CategoryIcon } from "assets/CategoryIcon.svg";
import { ReactComponent as Delete } from "assets/Delete.svg";
import { ReactComponent as X } from "assets/X.svg";
import { ReactComponent as Question } from "assets/Question.svg";
import { ReactComponent as Add } from "assets/Add.svg";

export default function PopupCategories({ open, setOpen }) {
  const banners = [
    {
      title: {
        left: "Слайдер 1280 х 352 px: ",
        right: "Слайдер 1280 х 352 px (моб.): ",
      },
      imgClass: styles.slider,
    },
    {
      title: {
        left: "Баннер 1280 х 352 px:",
        right: "Баннер 1280 х 352 px (моб.):",
      },
      imgClass: styles.bannerWide,
    },
    {
      title: {
        left: "Баннер 142 х 142 px:",
        right: "Баннер 142 х 142 px (моб.):",
      },
      imgClass: styles.bannerSmall,
    },
    {
      title: {
        left: "Размер баннеров 353 х 302 px:",
        right: "Размер баннеров 353 х 302 px (моб.):",
      },
      imgClass: styles.bannerBig,
    },
  ];

  return (
    <React.Fragment>
      {open ? (
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <div className={styles.section}>
              <div className={styles.header}>
                <div className={styles.icon}>
                  <CategoryIcon />
                </div>
                <div className={styles.title}>
                  Редактировать корневую категорию
                </div>
                <div
                  onClick={() => setOpen(false)}
                  className={styles.closePopUp}
                >
                  <X />
                </div>
              </div>
              <div className={styles.languageContainer}>
                <div className={styles.language}>RU</div>
                <div className={styles.language}>ENG</div>
              </div>
              <div className={styles.categoryLabel}>Название категории:</div>
              <input type="text" className={styles.categoryInput} />
              <div className={styles.rowContainer}>
                <div className={styles.block}>
                  <div className={styles.categoryLabel}>Фотография:</div>
                  <img
                    src="https://via.placeholder.com/300.png/09f/fff"
                    className={styles.categoryImgBig}
                    alt="category"
                  />
                  <div className={styles.categoryButton}>Добавить</div>
                </div>
                <div className={`${styles.block} ${styles.alignEnd}`}>
                  <div className={styles.categoryLabel}>Иконка:</div>
                  <img
                    src="https://via.placeholder.com/300.png/09f/fff"
                    className={styles.categoryImgSmall}
                    alt="category"
                  />
                  <div className={styles.categoryButton}>Добавить</div>
                </div>
              </div>
              <div className={styles.categoryLabel}>Часто ищут:</div>
              <input type="text" className={styles.categoryInput} />
              <div className={`${styles.rowContainer} ${styles.margins}`}>
                <div
                  className={`${styles.categoryInputWithIcon} ${styles.margin21}`}
                >
                  <input type="text" className={styles.InputWithIcon} />
                  <Delete className={styles.icon} />
                </div>
                <div className={styles.categoryInputWithIcon}>
                  <input type="text" className={styles.InputWithIcon} />
                  <Delete className={styles.icon} />
                </div>
              </div>
            </div>
            <div className={styles.section}>
              <div className={styles.sectionTitle}>Настройка SEO:</div>
              <div className={styles.rowContainer}>
                <div className={`${styles.inputContainer} ${styles.margin21}`}>
                  <div className={styles.categoryLabel}>Title:</div>
                  <input type="text" className={styles.categoryInput} />
                </div>
                <div className={styles.inputContainer}>
                  <div className={styles.categoryLabel}>Meta description:</div>
                  <input type="text" className={styles.categoryInput} />
                </div>
              </div>
              <div className={styles.categoryLabel}>Описание:</div>
              <textarea className={styles.categorytextArea} />
            </div>
            <div className={`${styles.section} ${styles.removeBorder}`}>
              <div className={`${styles.sectionTitle} ${styles.bannerTitle}`}>
                Банеры:
              </div>
              {banners.map((banner, i) => (
                <div
                  key={i}
                  className={i !== banners.length - 1 ? styles.subSection : ""}
                >
                  <div className={styles.rowContainer}>
                    <div className={styles.bannerContainer}>
                      <div
                        className={`${styles.categoryLabel} ${styles.bannerLabel}`}
                      >
                        {banner.title.left}
                      </div>
                      <div className={banner.imgClass} />
                    </div>
                    <div className={styles.bannerContainer}>
                      <div
                        className={`${styles.categoryLabel} ${styles.bannerLabel}`}
                      >
                        {banner.title.right}
                        <Question className={styles.questionIcon} />
                      </div>
                      <div className={banner.imgClass} />
                    </div>
                  </div>
                  <div className={styles.categoryLabel}>URL ссылка:</div>
                  <input type="text" className={styles.urlInput} />
                </div>
              ))}
              <div className={styles.categoryButton}>Сохранить</div>
            </div>
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
}
