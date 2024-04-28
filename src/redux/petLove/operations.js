import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const newsInf = createAsyncThunk("/news",
  async ({ page = 1, limit = 6, keyword ="" }, thunkAPI) => {
    try {
      const response = await axios.get(`/news?page=${page}&limit=${limit}&keyword=${keyword}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
});

export const friendsInf = createAsyncThunk(
  "friends",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/friends");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
