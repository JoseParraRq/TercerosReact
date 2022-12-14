import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    newUsers:{}
}

export const thirdsSlice = createSlice({
    name:"thirds",
    initialState , //initialState:initialState
    reducers:{
        addThirds: (state, action) => {
            state.newUsers = action.payload;
        }
}})

export const {addThirds} = thirdsSlice.actions;
export default thirdsSlice.reducer;