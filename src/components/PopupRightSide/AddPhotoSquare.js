import React from 'react'
import styles from "./PopupRightSide.module.sass"
import {ReactComponent as AddPhoto} from "../../assets/AddPhoto.svg"

function AddPhotoSquare() {
  return (
    <div className={styles.addPhotoSquare}>
      <AddPhoto />
    </div>
  )
}

export default AddPhotoSquare
