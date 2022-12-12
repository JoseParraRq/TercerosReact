import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./user/userSlice";

export const store = configureStore({ //maneja estados de la app
    reducer:{
        user: userSlice.reducer,
    }
});