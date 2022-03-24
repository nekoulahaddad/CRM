import { configureStore } from "@reduxjs/toolkit";
import clientReducer from "./clientSlice";
import authReducer from "./authSlice";
import filterSlice from "./filterSlice";

export default configureStore({
  reducer: {
    clients: clientReducer,
    auth: authReducer,
    filters: filterSlice,
  },
});
