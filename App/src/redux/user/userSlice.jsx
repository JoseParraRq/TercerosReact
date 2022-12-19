import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    email:null,
    token:null,
    authenticated:false
}

export const userSlice = createSlice({
    name:"user",
    initialState , //initialState:initialState
    reducers:{
        // addThirds: (state, action) => {
        //     state.newuser = action.payload;
        // }

        signIn: (state, action) => {
            console.log(action.payload);
            state.authenticated = true;
            state.email=action.payload.email;
            state.token=action.payload.token;
            
        },
        logOut: (state, action) => {
            state.authenticated = false;
        }
}})

export const {signIn,logOut} = userSlice.actions;
export default userSlice.reducer;