import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const dashboardInf = createAsyncThunk(
  "dashboard",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/dashboard");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const ordersInf = createAsyncThunk("/orders",
  async ({ page = 1, limit = 5, name ="" }, thunkAPI) => {
    try {
      const response = await axios.get(`/orders?page=${page}&limit=${limit}&name=${name}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
});

export const productInf = createAsyncThunk("/products",
  async ({ page = 1, limit = 5, name ="" }, thunkAPI) => {
    try {
      const response = await axios.get(`/products?page=${page}&limit=${limit}&name=${name}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
});

export const addProduct = createAsyncThunk("/products/add",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(`/products`, data );
      toast.success(`${data.name} added successfully)`)
      return response.data;
    } catch (e) {
      toast.error("Oops there was an error")
      return thunkAPI.rejectWithValue(e.message);
    }
});

export const updateProduct = createAsyncThunk("/products/update",
  async ({ id, productData }, thunkAPI) => {
    try {
      const response = await axios.put(`/products/${id}`, productData );
      toast.success(`${productData.name} updated successfully)`)
      return response.data;
    } catch (e) {      
      toast.error("Oops there was an error")
      return thunkAPI.rejectWithValue(e.message);
    }
});

export const deleteProduct = createAsyncThunk("/products/dell",
  async (id, thunkAPI) => {
    try {      
      const response = await axios.delete(`/products/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const suppliersInf = createAsyncThunk("/suppliers",
  async ({ page = 1, limit = 5, name ="" }, thunkAPI) => {
    try {
      const response = await axios.get(`/suppliers?page=${page}&limit=${limit}&name=${name}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
});
export const addSupplier = createAsyncThunk("/suppliers/add",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(`/suppliers`, data );
      toast.success(`${data.name} added successfully)`)
      return response.data;
    } catch (e) {
      toast.error("Oops there was an error")
      return thunkAPI.rejectWithValue(e.message);
    }
});
export const updateSupplier = createAsyncThunk("/suppliers/update",
  async ({ id, supplierData }, thunkAPI) => {
    try {
      const response = await axios.put(`/suppliers/${id}`, supplierData );
      toast.success(`${supplierData.name} updated successfully)`)
      return response.data;
    } catch (e) {   
      toast.error("Oops there was an error")   
      return thunkAPI.rejectWithValue(e.message);
    }
});

export const customersInf = createAsyncThunk("/customers",
  async ({ page = 1, limit = 5, name ="" }, thunkAPI) => {
    try {
      const response = await axios.get(`/customers?page=${page}&limit=${limit}&name=${name}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
});