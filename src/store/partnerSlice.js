import { createSlice } from "@reduxjs/toolkit";

const partnerSlice = createSlice({
  name: "partners",
  initialState: {
    sideNav: "Основная информация",
    topNav: "Контакты"
  },

  reducers: {
    changeRightCol(state, action) {
      state.sideNav = action.payload
    },

    changeSection(state, action) {
      console.log(action)
      state.topNav = action.payload
    }
  }
})

export const { changeRightCol, changeSection } = partnerSlice.actions
export default partnerSlice.reducer
