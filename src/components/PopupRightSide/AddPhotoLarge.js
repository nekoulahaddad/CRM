import React from 'react'
import styles from "./PopupRightSide.module.sass"
import {ReactComponent as AddPhoto} from "../../assets/AddPhoto.svg"

function AddPhotoLarge({ mob }) {
  return (
    <div className={
      mob
        ? `${styles.addPhotoLarge} ${styles.addPhotoLarge_mob}`
        : styles.addPhotoLarge
    }>
      <AddPhoto />
      <span>Нажмите для выбора файла или перетащите его в этот блок</span>
    </div>
  )
}

export default AddPhotoLarge
