import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiCall } from "../api/apiConfig";
import { endpoints } from "../api/endpoints";
import { cleanCache } from "helpers/cleanCache";
import { fakeShops } from "../constants/fakeDatas/fakeShops";
import { fakeRequisites } from '../constants/fakeDatas/fakeRequisites';

export const fetchPartners = createAsyncThunk(
  "partners/fetchPartners",
  async function ({ page, sort_field, sort_direction, limit, searchTerm }, { rejectWithValue }) {
    let myparams = {
      searchTerm: searchTerm,
      page: page,
      limit: limit,
      sort_field: sort_field,
      sort_direction: sort_direction,
    };
    try {
      const response = await apiCall.get(endpoints.getShops, {
        params: myparams,
      });
      return response.data.message;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const fetchClient = createAsyncThunk("clients/fetchClient", async function ({ id }) {
  const response = await apiCall.get(endpoints.getClient(id));
  return response.data.message;
});

export const deleteClient = createAsyncThunk("clients/deleteClient", async function (id) {
  const response = await apiCall.get(endpoints.deleteClient(id));
  cleanCache()
  return response.data.status === "ok" ? id : response.data.message;
});

export const editClient = createAsyncThunk("clients/editClient", async function ({ id, text, newStatus }) {
  let token = localStorage.getItem("token");
  let bodyFormData = new FormData();
  bodyFormData.append("text", text);
  bodyFormData.append("status", newStatus);
  bodyFormData.append("token", token);
  const response = await apiCall.post(endpoints.editTask(id), bodyFormData);
  return response.data;
});


const partnerSlice = createSlice({
  name: "partners",
  initialState: {
    status: null,
    error: null,
    sideNav: "Основная информация",
    topNav: "Контакты",
    shops: [],
    requisites: fakeRequisites,
    currentShop: {},
    currentRequisites: {},
    numberOfPages: 0,
  },
  extraReducers: {
    [fetchPartners.pending]: (state, action) => {
      state.status = "pending";
      state.error = null;
    },
    [fetchPartners.fulfilled]: (state, action) => {
      const partnersWithOneNumber = action.payload.partners.forEach(e => {
        e.firstPhoneNumber = e.phone[0].value
        e.currentSub = e.tariffs[0].tariff.title
      })
      state.status = "resolved";
      state.shops = action.payload.partners;
      state.numberOfPages = action.payload.total_pages;
    },
    [fetchPartners.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
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
