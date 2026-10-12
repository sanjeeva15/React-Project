import { createSlice } from "@reduxjs/toolkit";
const initialState = { items: [
  { id: "101", name: "Veloncore CRM", category: "Business", description: "Manage customers, leads and sales in one place.", price: 4999 },
  { id: "102", name: "Veloncore Analytics", category: "Analytics", description: "Turn business data into clear, actionable insights.", price: 2999 },
  { id: "103", name: "Veloncore Commerce", category: "E-commerce", description: "Manage products and workflows for an online store.", price: 5999 }
]};
const productSlice = createSlice({
  name: "products", initialState,
  reducers: {
    addProduct: (state, action) => { state.items.push(action.payload); },
    deleteProduct: (state, action) => { state.items = state.items.filter(p => p.id !== action.payload); },
    updateProduct: (state, action) => { const i = state.items.findIndex(p => p.id === action.payload.id); if (i !== -1) state.items[i] = action.payload; }
  }
});
export const { addProduct, deleteProduct, updateProduct } = productSlice.actions;
export default productSlice.reducer;