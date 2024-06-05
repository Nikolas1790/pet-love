import { createSlice } from "@reduxjs/toolkit";
import {  categoriesInf, citiesInf, friendsInf, gendersInf, newsInf, noticesFavorite, noticesFavoriteDell, noticesInf, typesInf } from "./operations";

const petLoveSlice = createSlice({
  name: "pet",
  initialState: {
    friendsData:[],
    newsData:[],
    noticesData:[],
    favoritsPets: [],
    categoriesList:[],
    sex: [],
    species: [],
    cities: [],
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

      .addCase(noticesFavorite.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(noticesFavorite.fulfilled, (state, action) => {
        state.loading = false;
        state.favoritsPets = action.payload;
      })
      .addCase(noticesFavorite.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(noticesFavoriteDell.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(noticesFavoriteDell.fulfilled, (state, action) => {
        state.loading = false;
        // console.log(action.payload)
        state.favoritsPets = action.payload;
        // state.favoritsPets = state.favoritsPets.filter(
        //   (pet) => pet._id !== action.payload
        // );
      })
      .addCase(noticesFavoriteDell.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })


      .addCase(categoriesInf.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(categoriesInf.fulfilled, (state, action) => {
        state.loading = false;
        state.categoriesList = action.payload;
      })
      .addCase(categoriesInf.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(gendersInf.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(gendersInf.fulfilled, (state, action) => {
        state.loading = false;
        state.sex = action.payload;
      })
      .addCase(gendersInf.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(typesInf.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(typesInf.fulfilled, (state, action) => {
        state.loading = false;
        state.species = action.payload;
      })
      .addCase(typesInf.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })




      .addCase(citiesInf.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(citiesInf.fulfilled, (state, action) => {
        state.loading = false;
        state.cities = action.payload;
      })
      .addCase(citiesInf.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  },
});
export const { resetStatusOperation } = petLoveSlice.actions;
export default petLoveSlice.reducer;