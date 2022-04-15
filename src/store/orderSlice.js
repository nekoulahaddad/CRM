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
        return {
          ...order,
          shopName: order.shop.name,
          statusValue: order.status.value,
          quantity: order.products.length,
          address: `${order.delivery_address.city} ${order.delivery_address.address}`,
          deliveryType: order.delivery_type.type,
        };
      });
      return { filteredData, numberOfPages: response.data.message.total_orders_count };
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getOrders = createAsyncThunk(
  "orders/getOrders",
  async function ({ page, sort_field, sort_direction, limit, searchTerm, id }, { rejectWithValue }) {
    let myparams = {
      searchTerm: searchTerm,
      page: page,
      limit: limit,
      sort_field: sort_field,
      sort_direction: sort_direction,
    };
    try {
      const response = await apiCall.get(endpoints.getOrders(), {
        params: myparams,
      });
      return response.data.message;
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
      state.orders = action.payload.orders;
    },
    [getOrders.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export default orderSlice.reducer;
