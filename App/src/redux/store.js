import { configureStore } from "@reduxjs/toolkit";
import thirdsSlice from "./thirds/thirdsSlice";

export const store = configureStore({ //maneja estados de la app
    reducer:{
        third: thirdsSlice,
    }
});