import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./reduce/themeReducer";
import filmredus from "./reduce/alldataReduce";


const store = configureStore({
    reducer:{
        theme:themeReducer,
        film:filmredus,
    },
});

export default store;