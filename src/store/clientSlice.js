import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiCall } from "../api/apiConfig";
import { endpoints } from "../api/endpoints";
import { cleanCache } from "helpers/cleanCache";
export const fetchClients = createAsyncThunk(
  "clients/fetchClients",
  async function ({ page, sort_field, sort_direction, limit, searchTerm }, { rejectWithValue }) {
    let myparams = {
      searchTerm: searchTerm,
      page: page,
      limit: limit,
      sort_field: sort_field,
      sort_direction: sort_direction,
      userRole: "client"
    };
    try {
      const response = await apiCall.get(endpoints.getclients, {
        params: myparams,
      });
      response.data.message.users.forEach((client) => {
        let createdAt = new Date(client.createdAt)
        const [month, day, year] = [createdAt.getMonth(), createdAt.getDate(), createdAt.getFullYear()];
        const [hour, minutes] = [createdAt.getHours(), createdAt.getMinutes()];
        client.createdAt = `${day}.${month}.${year}, ${hour}:${minutes}`
      })
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

const clientSlice = createSlice({
  name: "clients",
  initialState: {
    clients: [],
    client: {},
    status: null,
    error: null,
    numberOfPages: 0,
  },
  extraReducers: {
    [fetchClients.pending]: (state, action) => {
      state.status = "pending";
      state.error = null;
    },
    [fetchClients.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.clients = action.payload.users;
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
