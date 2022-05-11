import React from 'react'
import styles from './PopupRightSide.module.sass'
import { ReactComponent as X } from "assets/X.svg"
import { ReactComponent as CategoryIcon } from "assets/CategoryIcon.svg"
import { useDispatch, useSelector } from "react-redux"
import { addExistingCategory } from "../../store/rightSidePopusSlice"

function PopupRightSide({ isActive, setIsActive, icon, title, children }) {
  const dispatch = useDispatch()

  const classes = {
    wrapper: isActive
      ? `${styles.wrapper} ${styles.wrapper_active}`
      : styles.wrapper,

    overlay: isActive
      ? `${styles.overlay} ${styles.overlay_active}`
      : styles.overlay,

    content: isActive
      ? `${styles.content} ${styles.content_active}`
      : styles.content
  }

  const handleClose = () => {
    setIsActive()
    dispatch(addExistingCategory())
  }

  return (
    <section className={classes.wrapper}>
      <div
        title={'Закрыть'}
        className={classes.overlay}
        onClick={handleClose} />
      <div className={classes.content}>
        <div className={styles.heading}>
          <div className={styles.headingTop}>
            <CategoryIcon />
            <h3>{ title }</h3>
          </div>

          <div
            title={'Закрыть'}
            className={styles.closeIcon}
            onClick={handleClose}>
            <X />
          </div>
        </div>

        { children }

      </div>
    </section>
  )
}

export default PopupRightSide
