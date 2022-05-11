import { createSlice } from "@reduxjs/toolkit";

const rightSidePopupSlice = createSlice({
  name: 'popupRightSide',
  initialState: {
    addNew: false,
  },

  reducers: {
    addNewCategory(state) {
      state.addNew = true
    },

    addExistingCategory(state) {
      state.addNew = false
    }
  }
})

export const { addNewCategory, addExistingCategory } = rightSidePopupSlice.actions
export default rightSidePopupSlice.reducer
