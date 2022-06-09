import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiCall } from "api/apiConfig";
import { endpoints } from "api/endpoints";

export const getOrdersByClientId = createAsyncThunk(
  "orders/getOrdersByClientId",
  async function ({ page, sort_field, sort_direction, limit, id }, { rejectWithValue }) {
    let myparams = {
      page: page,
      limit: limit,
      sort_field: sort_field,
      sort_direction: sort_direction,
    };
    try {
      const response = await apiCall.get(endpoints.getOrdersByClientID(id), {
        params: myparams,
      });
      const filteredData = response.data.message.orders.map((order) => {
        const quantityAll = order.products.reduce((prev,curr,i,arr) => {
          return prev + parseInt(curr.quantity) 
        },0)
        return {
          ...order,
          shopName: order.shop.name,
          statusValue: order.statusOrder.title,
          quantity: quantityAll,
          address: order.deliveryAddress,
          deliveryType: order.deliveryType,
        };
      });
      return { filteredData, numberOfPages: response.data.message.totalPages };
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getOrders = createAsyncThunk(
  "orders/getOrders",
  async function ({ page, sort_field, sort_direction, limit, searchTerm}, { rejectWithValue }) {
    let myparams = {
      searchTerm: searchTerm,
      page: page,
      limit: limit,
      sort_field: sort_field,
      sort_direction: sort_direction,
    };
    try {
      const response = await apiCall.get(endpoints.getOrders, {
        params: myparams,
      });
      const filteredData = response.data.message.orders.map((order) => {
        return {
          ...order,
          shopName: order.shop.name,
          statusValue: order.statusOrder.title,
          address: order.deliveryAddress,
          deliveryType: order.deliveryType,
          clientName: `${order.client.firstName} ${order.client.lastName}`
        };
      });
      return { filteredData, numberOfPages: response.data.message.totalPages };
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
const orderSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
    numberOfPages: 0,
    status: null,
    error: null,
  },
  extraReducers: {
    [getOrdersByClientId.pending]: (state, action) => {
      state.status = "pending";
      state.error = null;
    },
    [getOrdersByClientId.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.orders = action.payload.filteredData;
      state.numberOfPages = action.payload.numberOfPages;
    },
    [getOrdersByClientId.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
    [getOrders.pending]: (state, action) => {
      state.status = "pending";
      state.error = null;
    },
    [getOrders.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.orders = action.payload.filteredData;
      state.numberOfPages = action.payload.numberOfPages;
    },
    [getOrders.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export default orderSlice.reducer;
