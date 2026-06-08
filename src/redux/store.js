import {configureStore} from '@reduxjs/toolkit'
import serachSliceReducer from './features/searchSlice'
 
export const store = configureStore({
    reducer:{
        search: searchSliceReducer
    }
})