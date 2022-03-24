import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiCall } from "../api/apiConfig";
import { endpoints } from "../api/endpoints";
export const fetchClients = createAsyncThunk(
  "clients/fetchClients",
  async function (
    { page, sortField, sortDirection, limit, searchTerm },
    { rejectWithValue }
  ) {
    try {
      const response = await apiCall.get(endpoints.getclients, {
        params: {
          searchTerm: searchTerm,
          sort_field: sortField,
          sort_direction: sortDirection,
          page: page,
          limit: limit,
        },
      });
      return response.data.message;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// export const getClient = createAsyncThunk(
//   "clients/fetchClient",
//   async function ({ id }) {
//     const response = await apiCall.get(endpoints.getClient(id));
//     return response.data.message;
//   }
// );

export const editClient = createAsyncThunk(
  "clients/editClient",
  async function ({ id, text, newStatus }) {
    let token = localStorage.getItem("token");
    let bodyFormData = new FormData();
    bodyFormData.append("text", text);
    bodyFormData.append("status", newStatus);
    bodyFormData.append("token", token);
    const response = await apiCall.post(endpoints.editTask(id), bodyFormData);
    return response.data;
  }
);

const clientSlice = createSlice({
  name: "clients",
  initialState: {
    clients: [],
    status: null,
    error: null,
  },
  reducers: {
    changePage(state, action) {
      state.page = action.payload;
    },
    changeSortField(state, action) {
      state.sort_field = action.payload;
    },
    changeSortDiection(state, action) {
      state.sort_direction = action.payload;
    },
  },
  extraReducers: {
    [fetchClients.pending]: (state, action) => {
      state.status = "pending";
      state.error = null;
    },
    [fetchClients.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.clients = action.payload.clients;
      state.numberOfPages = action.payload.total_pages;
    },
    [fetchClients.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
    [editClient.pending]: (state, action) => {},
    [editClient.fulfilled]: (state, action) => {
      state.status = "resolved";
      if (action.payload.status === "ok") {
        state.error = null;
        alert("задача отредактировано успешно");
      } else {
        state.error = action.payload.message;
      }
    },
    [editClient.rejected]: (state, action) => {},
  },
});
export const { changePage } = clientSlice.actions;

export default clientSlice.reducer;
