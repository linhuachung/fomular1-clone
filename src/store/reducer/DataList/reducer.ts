import {createSlice} from '@reduxjs/toolkit'
import {GetListData} from './action.ts'

const initialState = {
    productList: {
        content:'',
    },
    loadingProduct: false
}
const DataReducer = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: ({ addCase }) => {
        addCase(GetListData.pending, (state) => ({
            ...state,
            loadingProduct:true,
            productList: initialState.productList
        }))

        addCase(GetListData.fulfilled, (state, { payload }) =>({
            ...state,
            loadingProduct: false,
            productList: {
                content:payload
            },
        }))

        addCase(GetListData.rejected, (state) => ({
            ...state,
            loadingProduct: false,
        }))
    },
})

const action = DataReducer.actions

export { action }

export default DataReducer.reducer
