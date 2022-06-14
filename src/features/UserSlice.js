import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

export const getUsers = createAsyncThunk(
    'getUsers',
    async () => {
        const {data} = await axios.get('https://randomuser.me/api/?page=3&results=10')
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