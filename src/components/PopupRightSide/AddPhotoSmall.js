import React from 'react'
import styles from "./PopupRightSide.module.sass"
import {ReactComponent as AddPhoto} from "../../assets/AddPhoto.svg"

function AddPhotoSmall() {
  return (
    <div className={styles.addPhotoSmall}>
      <AddPhoto />
    </div>
  )
}

export default AddPhotoSmall
