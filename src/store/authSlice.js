import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiCall } from "../api/apiConfig";
import { endpoints } from "../api/endpoints";

export const login = createAsyncThunk(
  "auth/login",
  async function ({ email, password }, { rejectWithValue }) {
    let bodyFormData = {
      email,
      password,
    };
    try {
      const response = await apiCall.post(endpoints.login, bodyFormData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const refreshToken = createAsyncThunk(
  "auth/refreshToken",
  async function () {
    const response = await apiCall.get(endpoints.refreshToken);
    return response.data;
  }
);

export const checkToken = createAsyncThunk(
  "auth/checkToken",
  async function () {
    const token = localStorage.getItem("token");
    const response = await apiCall.get(endpoints.testAuth);
    return response.data;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: null,
    error: null,
    loggedIn: true,
  },
  reducers: {
    checkAuthentication(state, action) {
      let token = localStorage.getItem("token");
      token ? (state.loggedIn = true) : (state.loggedIn = false);
    },
    logout(state, action) {
      localStorage.removeItem("token");
      state.loggedIn = false;
    },
  },
  extraReducers: {
    [login.pending]: (state, action) => {
      state.status = "pending";
    },
    [login.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.loggedIn = true;
      localStorage.setItem("token", action.payload.message.token);
    },
    [login.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload.message;
    },
    [checkToken.pending]: (state, action) => {
      state.status = "pending";
      state.error = null;
    },
    [checkToken.fulfilled]: (state, action) => {
      if (action.payload.status === "ok") {
        state.status = "resolved";
        state.loggedIn = true;
        localStorage.setItem("token", action.payload.message);
      } else {
        state.error = action.payload.message;
      }
    },
    [checkToken.rejected]: (state, action) => {},
    [refreshToken.pending]: (state, action) => {
      state.status = "pending";
      state.error = null;
    },
    [refreshToken.fulfilled]: (state, action) => {
      if (action.payload.status === "ok") {
        state.status = "resolved";
        state.loggedIn = true;
        localStorage.setItem("token", action.payload.message);
      } else {
        state.error = action.payload.message;
      }
    },
    [refreshToken.rejected]: (state, action) => {},
  },
});

export const { checkAuthentication, logout } = authSlice.actions;

export default authSlice.reducer;
