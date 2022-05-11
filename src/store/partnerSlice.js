import { createSlice } from "@reduxjs/toolkit";
import { fakeShops } from "../constants/fakeDatas/fakeShops";
import { fakeRequisites } from '../constants/fakeDatas/fakeRequisites';

const partnerSlice = createSlice({
  name: "partners",
  initialState: {
    sideNav: "Основная информация",
    topNav: "Контакты",
    shops: fakeShops,
    requisites: fakeRequisites,
    currentShop: {},
    currentRequisites: {},
  },

  reducers: {
    changeRightCol(state, action) {
      state.sideNav = action.payload
    },

    changeSection(state, action) {
      state.topNav = action.payload
    },

    changePartnerInfo(state, action) {
      const shop = state.shops.find(s => s._id === action.payload._id)
      const index = state.shops.indexOf(shop)

      state.shops[index] = action.payload
    },

    setCurrentShop(state, action) {
      state.currentShop = state.shops.find(s => s._id === action.payload)
    },

    updateCurrentShop(state, action) {
      state.currentShop = action.payload
    },

    setCurrentRequisites(state, action) {
      state.currentRequisites = state.requisites.find(r => r.shop_id === action.payload)
    },

    updateCurrentRequisites(state, action) {
      state.currentRequisites = action.payload
    },
  }
})

export const {
  changeRightCol,
  changeSection,
  changePartnerInfo,
  setCurrentShop,
  updateCurrentShop,
  setCurrentRequisites,
  updateCurrentRequisites,
} = partnerSlice.actions

export default partnerSlice.reducer
