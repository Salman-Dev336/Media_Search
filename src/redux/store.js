import {configureStore} from '@reduxjs/toolkit'
import searchSliceReducer from './features/searchSlice'
 
export const store = configureStore({
    reducer:{
        search: searchSliceReducer
    }
})