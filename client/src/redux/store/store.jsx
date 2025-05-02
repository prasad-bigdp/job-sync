import { configureStore } from "@reduxjs/toolkit";

import SearchJobSlicer from "../slice/JobsSlicer"

export default configureStore({
    reducer:{
        searchJob:SearchJobSlicer
    }
})
