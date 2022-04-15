import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiCall } from "api/apiConfig";
import { endpoints } from "api/endpoints";

export const getCountries = createAsyncThunk("regions/getCountries", async function ({ searchTerm }, { rejectWithValue }) {
  let myparams = {
    searchTerm: searchTerm,
  };
  try {
    const response = await apiCall.get(endpoints.getCountries, {
      params: myparams,
    });
    return response.data.message;
  } catch (err) {
    return rejectWithValue(err.response.data);
  }
});

export const getCities = createAsyncThunk("regions/getCities", async function ({ searchTerm }, { rejectWithValue }) {
  let myparams = {
    searchTerm: searchTerm,
  };
  try {
    const response = await apiCall.get(endpoints.getCities, {
      params: myparams,
    });
    return response.data.message;
  } catch (err) {
    return rejectWithValue(err.response.data);
  }
});

const regionSlice = createSlice({
  name: "regions",
  initialState: {
    countries: [],
    cities: [],
    err: null,
  },
  reducers: {
    resetCountries(state, action) {
      state.countries = [];
    },
    resetCities(state, action) {
      state.cities = [];
    },
  },
  extraReducers: {
    [getCountries.pending]: (state, action) => {
      state.status = "pending";
      state.error = null;
    },
    [getCountries.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.countries = action.payload;
    },
    [getCountries.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
    [getCities.pending]: (state, action) => {
      state.status = "pending";
      state.error = null;
    },
    [getCities.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.cities = action.payload;
    },
    [getCities.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});
export const { resetCountries, resetCities } = regionSlice.actions;

export default regionSlice.reducer;
