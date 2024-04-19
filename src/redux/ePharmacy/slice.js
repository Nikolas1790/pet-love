import { createSlice } from "@reduxjs/toolkit";
import { addProduct, addSupplier, customersInf, dashboardInf, deleteProduct, ordersInf, productInf, suppliersInf, updateProduct, updateSupplier } from "./operations";

const pharmacySlice = createSlice({
  name: "pharmacy",
  initialState: {
    dashboarData:[],
    ordersData:[],
    suppliersData: [],
    productsData: {
      products: [],
      total: 0,
    },
    customersData: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(dashboardInf.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(dashboardInf.fulfilled, (state, action) => {
        state.loading = false;
        state.dashboarData = action.payload;
      })
      .addCase(dashboardInf.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(ordersInf.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(ordersInf.fulfilled, (state, action) => {
        state.loading = false;
        state.ordersData = action.payload;
      })
      .addCase(ordersInf.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(productInf.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(productInf.fulfilled, (state, action) => {
        state.loading = false;
        state.productsData = action.payload;
      })
      .addCase(productInf.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(addProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.productsData.total = state.productsData.total + 1;
        state.productsData.products = [ ...state.productsData.products, action.payload];
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(updateProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.productsData.products.findIndex(product => product._id === action.payload._id);
        if (index !== -1) {
          state.productsData.products[index] = action.payload;
        }
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(deleteProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.productsData.products = state.productsData.products.filter(product => product.id !== action.payload);
        state.productsData.total = state.productsData.total - 1;
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(suppliersInf.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(suppliersInf.fulfilled, (state, action) => {
        state.loading = false;
        state.suppliersData = action.payload;
        state.productsData.total = state.productsData.total + 1;
        state.productsData.products = [ ...state.productsData.products, action.payload];
      })
      .addCase(suppliersInf.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(addSupplier.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addSupplier.fulfilled, (state, action) => {
        state.loading = false;
        state.suppliersData.total = state.suppliersData.total + 1;
        state.suppliersData.suppliers = [ ...state.suppliersData.suppliers, action.payload];
      })
      .addCase(addSupplier.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(updateSupplier.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateSupplier.fulfilled, (state, action) => {        
        state.loading = false;
        const index = state.suppliersData.suppliers.findIndex(supplier => supplier._id === action.payload._id);
        if (index !== -1) {
          state.suppliersData.suppliers[index] = action.payload;
        }
      })
      .addCase(updateSupplier.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })


      .addCase(customersInf.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(customersInf.fulfilled, (state, action) => {
        state.loading = false;
        state.customersData = action.payload;
      })
      .addCase(customersInf.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  },
});
export const { resetStatusOperation } = pharmacySlice.actions;
export default pharmacySlice.reducer;