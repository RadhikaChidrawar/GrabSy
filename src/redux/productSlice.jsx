import {createSlice} from '@reduxjs/toolkit'
import { mockData } from '../assets/mockData'

const initialState = {
    products : [],
    searchTerm :"",
    filtereData:[]
}

const productSlice = createSlice({
    name :"products",
    initialState,
    reducers :{
        setProducts(state, action){
            state.products = action.payload;
        },
        setSearchTerm(state, action){
            state.searchTerm = action.payload
            state.filtereData = state.products.filter(product =>
                product.name.toLowerCase().incluses(state.searchTerm.toLowerCase())
            )
        }
    },
    
})

export const {setProducts , setSearchTerm} = productSlice.actions;
export default productSlice.reducer;