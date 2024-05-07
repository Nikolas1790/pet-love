import { createSlice } from "@reduxjs/toolkit";
import {  friendsInf, newsInf, noticesInf } from "./operations";

const petLoveSlice = createSlice({
  name: "pet",
  initialState: {
    friendsData:[],
    newsData:[],
    noticesData:[],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(newsInf.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(newsInf.fulfilled, (state, action) => {
        state.loading = false;
        state.newsData = action.payload;
      })
      .addCase(newsInf.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(friendsInf.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(friendsInf.fulfilled, (state, action) => {
        state.loading = false;
        state.friendsData = action.payload;
      })
      .addCase(friendsInf.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(noticesInf.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(noticesInf.fulfilled, (state, action) => {
        state.loading = false;
        state.noticesData = action.payload;
      })
      .addCase(noticesInf.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

  },
});
export const { resetStatusOperation } = petLoveSlice.actions;
export default petLoveSlice.reducer;