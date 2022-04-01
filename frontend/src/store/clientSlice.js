import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiCall } from "../api/apiConfig";
import { endpoints } from "../api/endpoints";
export const fetchClients = createAsyncThunk(
  "clients/fetchClients",
  async function ({ page, sort_field, sort_direction, limit, searchTerm }, { rejectWithValue }) {
    let myparams = {
      searchTerm: searchTerm,
      page: page,
      limit: limit,
      sort_field: sort_field,
      sort_direction: sort_direction,
    };
    /*
    if (sort_field && sort_direction) {
      myparams.sort_field = sort_field;
      myparams.sort_direction = sort_direction;
    }
    */
    try {
      const response = await apiCall.get(endpoints.getclients, {
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
  console.log(response);
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

const clientSlice = createSlice({
  name: "clients",
  initialState: {
    clients: [],
    client: {},
    status: null,
    error: null,
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
    [fetchClient.pending]: (state, action) => {
      state.status = "pending";
      state.error = null;
    },
    [fetchClient.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.client = action.payload;
    },
    [fetchClient.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
    [deleteClient.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
    [deleteClient.pending]: (state, action) => {
      state.status = "pending";
      state.error = null;
    },
    [deleteClient.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.clients = state.clients.filter((e) => e._id !== action.payload);
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

export default clientSlice.reducer;
