import { configureStore } from "@reduxjs/toolkit";
import { flowersReducers } from "./flowers-slice";
import { dataReducers } from "./data-slice";

export const store = configureStore({
    reducer:{
        flowers: flowersReducers,
        data: dataReducers
    }
})