  import {createSlice} from "@reduxjs/toolkit"

  const initialState={
  
  toggle:false
}

const SearchJobSlicer=createSlice({
      name:"JobsSearch",
      initialState,
      reducers:{
     
        setToggle:(state,action)=>{
          state.toggle=action.payload
        }
      }
})
export const {setToggle}=SearchJobSlicer.actions
export default SearchJobSlicer.reducer