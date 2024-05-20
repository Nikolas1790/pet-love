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

export const friendsInf = createAsyncThunk( "/friends",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/friends");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const noticesInf = createAsyncThunk( "/notices",
  async ({ byDate = true, page = 1, limit = 6 }, thunkAPI) => {
    try {
      const response = await axios.get(`/notices?byDate=${byDate}&page=${page}&limit=${limit}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const noticesFavorite = createAsyncThunk( "/notices/favorites/add",
  async ( item , thunkAPI) => {
    try {
      console.log(item)
      const response = await axios.post(`/notices/favorites/add/${item}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);