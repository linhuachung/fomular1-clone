import {createAsyncThunk} from '@reduxjs/toolkit';
import {callApi} from '../../../services/auth/apis.ts';
import {API_URL_APP} from '../../../apis';

const keyReducer = {
    getList: 'product/getList'
}

const GetListData = createAsyncThunk(keyReducer.getList, async (payload) => {
    const {year, team, person, result} = payload
    return await callApi({
        method: 'get',
        url: API_URL_APP.data.getListData(year, team, person, result)
    })
})

export {
    GetListData
}
