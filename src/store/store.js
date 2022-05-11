import { configureStore } from "@reduxjs/toolkit";
import clientReducer from "./clientSlice";
import partnersReducer from "./partnerSlice";
import authReducer from "./authSlice";
import filterSlice from "./filterSlice";
import regionSlice from "./regionSlice";
import orderSlice from "./orderSlice";
import rightSidePopupSlice from './rightSidePopusSlice';

export default configureStore({
  reducer: {
    clients: clientReducer,
    partners: partnersReducer,
    auth: authReducer,
    filters: filterSlice,
    regions: regionSlice,
    orders: orderSlice,
    rightSidePopup: rightSidePopupSlice,
  },
});
