import { configureStore } from "@reduxjs/toolkit";
import thirdsSlice from "./thirds/thirdsSlice";
import userSlice from "./user/userSlice";

export const store = configureStore({ //maneja estados de la app
    reducer:{
        third: thirdsSlice,
        user:userSlice
    }
    
});