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
        category: [],
        rating: "",
        sortBy: "rate",
        status: STATUS.IDEL
    },
    reducers: {
        status(state, action){
            state.status = action.payload;
        },
        initialLoad(state, action) {
            state.data = action.payload.sort((a,b) => b.rating.rate - a.rating.rate);
            sessionStorage.setItem("Shopeefy", JSON.stringify(action.payload))
        },
        filterAndSort(state, action){


            const data = JSON.parse(sessionStorage.getItem("Shopeefy"))

            if(!data) return 
            
            state[action.payload.type] = action.payload.value
            
            state.data = 
            //Search
            data.filter(product => product.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
            //price
            .filter(product => product.price <= state.price)
            //category
            .filter(product => {
                
                if(state.category.length === 0){
                    return product
                }else{

                    return state.category.includes(product.category)
                }
            })
            //rating
            .filter(product => {
                return state.rating === 4 ? product.rating.rate >= 4 
                : state.rating === 3 ? product.rating.rate >= 3 && product.rating.rate < 4 
                : state.rating === 2 ? product.rating.rate >= 2 && product.rating.rate < 3 
                : state.rating === 1 ? product.rating.rate >= 1 && product.rating.rate < 2
                : product
            }).sort((a,b) => {
                if(state.sortBy === "priceLow"){
                    return a.price - b.price
                }else if(state.sortBy === "priceHigh"){
                    return b.price - a.price
                }else if(state.sortBy === "rate"){
                    return b.rating.rate - a.rating.rate
                }else if(state.sortBy === "popular"){
                    return b.rating.count - a.rating.count
                }else{
                      return 0;
                }
            })
        },
        resetFilter(state){
            
            let data = JSON.parse(sessionStorage.getItem("Shopeefy")).sort((a,b) => {
                if(state.sortBy === "priceLow"){
                    return a.price - b.price
                }else if(state.sortBy === "priceHigh"){
                    return b.price - a.price
                }else if(state.sortBy === "rate"){
                    return b.rating.rate - a.rating.rate
                }else if(state.sortBy === "popular"){
                    return b.rating.count - a.rating.count
                }else{
                      return 0;
                }
            })
            if(!data){
                data = []
            }
            return {
                data: data,
                searchQuery: "",
                price: 1000,
                category: [],
                rating: "",
                sortBy: "rate",
                status: STATUS.IDEL
            }
        }
    },
})

export const {initialLoad, status, filterAndSort, resetFilter} = ProductSlice.actions
export default ProductSlice.reducer

//Thunks
export function fetchProductThunk () {

    return async function (dispatch, getState){
        
        dispatch(status(STATUS.LOADING))
        try{
            const result = await fetch("https://fakestoreapi.com/products/");
            const data = await result.json();

            dispatch(status(STATUS.IDEL))
            dispatch(initialLoad(data))
            
        }catch(err){
            console.log(err)
            dispatch(status(STATUS.ERROR))
        }
    }
}