  import {createSlice} from "@reduxjs/toolkit"

  const initialState={
  
  toggleJob:false
}

const SearchJobSlicer=createSlice({
      name:"JobsSearch",
      initialState,
      reducers:{
          setToggleJob:(state,action)=>{
          state.toggleJob=action.payload
        }
      }
})
export const {setToggleJob}=SearchJobSlicer.actions
export default SearchJobSlicer.reducer