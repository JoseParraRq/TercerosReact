import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    newUsers:{},
    thirds: []
}

export const thirdsSlice = createSlice({
    name:"thirds",
    initialState , //initialState:initialState
    reducers:{
        addThirds: (state, action) => {
            state.newUsers = action.payload;
        },
        getThirds: (state, action)=>{
            state.thirds = action.payload;

        }
}})

export const {addThirds, getThirds} = thirdsSlice.actions;
export default thirdsSlice.reducer;