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
  async ({ keyWord ="", byDate = true, page = 1, limit = 6, category='', species='', sex='' }, thunkAPI) => {
    try {
      console.log(sex)
      const response = await axios.get(`/notices?&keyword=${keyWord}&byDate=${byDate}&page=${page}&limit=${limit}&category=${category}&species=${species}&gender=${sex}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const noticesFavorite = createAsyncThunk( "/notices/favorites/add",
  async ( item , thunkAPI) => {
    try {
      // console.log(item)
      const response = await axios.post(`/notices/favorites/add/${item}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const noticesFavoriteDell = createAsyncThunk( "/notices/favorites/remove/",
  async ( item , thunkAPI) => {
    try {
      // console.log(item)
      const response = await axios.delete(`/notices/favorites/remove/${item}`);
      // console.log(response.data)

      return response.data;
      
    } catch (error) {
      // console.log(error)
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const categoriesInf = createAsyncThunk( "/notices/categories",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/notices/categories");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const gendersInf = createAsyncThunk( "/notices/sex",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/notices/sex");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const typesInf = createAsyncThunk( "/notices/species",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/notices/species");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const citiesInf = createAsyncThunk( "/cities",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/cities");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);