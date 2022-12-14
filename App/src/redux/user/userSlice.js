import { createSlice } from '@reduxjs/toolkit';


export const userSlice = createSlice({
  name: 'user',
  initialState: {
      user: {}
  },
  reducers: {
    
    addUser: ( state, action ) => {
      console.log(action);
      state.user = action.payload;
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { addUser } = userSlice.actions;