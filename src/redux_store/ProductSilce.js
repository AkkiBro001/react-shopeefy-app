import { createSlice } from "@reduxjs/toolkit";

export const STATUS = {
    IDEL: "idel",
    LOADING: 'loading',
    ERROR: 'error'
}


const ProductSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        searchQuery: "",
        price: 1000,
        category: "",
        rating: "",
        sortBy: "category",
        status: STATUS.IDEL
    },
    reducers: {
        status(state, action){
            state.status = action.payload;
        },
        initialLoad(state, action) {
            state.data = action.payload;
        },
        filterAndSorting(state, action){

        }
    },
})

export const {initialLoad, status} = ProductSlice.actions
export default ProductSlice.reducer

//Thunks
export function fetchProductThunk () {

    return async function (dispatch, getState){
        
        dispatch(status(STATUS.LOADING))
        try{
            const result = await fetch("https://fakestoreapi.com/products/");
            const data = await result.json();

            dispatch(initialLoad(data))
            dispatch(status(STATUS.IDEL))
        }catch(err){
            console.log(err)
            dispatch(status(STATUS.ERROR))
        }
    }
}