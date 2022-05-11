import React from 'react'
import PopupRightSide from "./PopupRightSide"
import AddExistCategory from "./AddExistCategory"
import AddNewCategory from "./addNewCategory"
import { useSelector } from "react-redux"

function AddCategoryPopup({ isActive, setIsActive }) {
  const { addNew } = useSelector(state => state.rightSidePopup)

  return (
    <PopupRightSide
      title={'Создать корневую категорию'}
      isActive={isActive}
      setIsActive={setIsActive}
      icon={''}
    >
      { addNew
        ? <AddNewCategory />
        : <AddExistCategory />
      }
    </PopupRightSide>
  )
}

export default AddCategoryPopup
