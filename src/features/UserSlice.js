import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'


export const getUsers = createAsyncThunk(
    'getUsers',
    async ({page,pageSize}) => {
        const {data} = await axios.get(`https://randomuser.me/api/?page=${page}&results=${pageSize}`)
        return data
    }
)

const userSlice = createSlice ({
    name: 'users',
    initialState: {
        value: []
    },
    extraReducers: (builder) => {
        builder.addCase(getUsers.fulfilled, (state,{payload}) => {
            state.value = payload
        })
    }
})

export default userSlice.reducer