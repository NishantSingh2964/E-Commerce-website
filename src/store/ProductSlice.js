import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: [],
};

const ProductSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        fetchProducts(state, action) {
            state.data = action.payload;
        },
    },
});

export const { fetchProducts } = ProductSlice.actions;  // Correctly export fetchProducts action
export default ProductSlice.reducer;

export function getProducts() {
    return async function getProductsThunk(dispatch, getState) {
        const data = await fetch('https://fakestoreapi.com/products');
        const result = await data.json();  // Add missing await
        dispatch(fetchProducts(result));  // Dispatch after awaiting the result
    };
}
