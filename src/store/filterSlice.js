import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    sort_field: "createdAt",
    sort_direction: "asc",
    page: 0,
    limit: "10",
    searchTerm: "",
  },
  reducers: {
    changePage(state, action) {
      state.page = action.payload;
    },
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    changeSortField(state, action) {
      state.sort_field = action.payload;
    },
    changeSortDiection(state, action) {
      state.sort_direction = action.payload;
    },
    changeLimit(state, action) {
      state.limit = action.payload;
    },
  },
});
export const { changePage, changeSearchTerm, changeSortField, changeSortDiection, changeLimit } = filterSlice.actions;

export default filterSlice.reducer;
