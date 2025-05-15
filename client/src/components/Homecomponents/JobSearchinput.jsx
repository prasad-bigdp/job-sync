import { Search } from "lucide-react";
import MobileSearchBar from "./MobileSearchBar";
import {useState } from "react";
import { useNavigate } from "react-router-dom";
import SuggestionBar from "./SuggestionBar";
const JobSearchBar = () => {
      
         const[Query,setQuery]=useState({
          jobQuery:"",
          locationQuery:"",
          expreinceQuery:""
         })
         const[isSuggestionBar,setSuggestionBar]=useState('')
         const [inputError,setInputError]=useState(false)
         const[suggestionJobs,setSuggestionJobs]=useState([])
         const[suggestionLocation,setSuggestionLocation]=useState([])
         const[suggestionExperience,setSuggestionExperience]=useState([])
         const navigate=useNavigate()
         
       const handleChange=(e)=>{
          const{name,value}=e.target
          setQuery({...Query,[name]:value.trim().toLowerCase()})
          if(value==="" ||value.trim()==="") return  setSuggestionBar("")
           setSuggestionBar(name)
           if(name==="jobQuery"){
                 if(!suggestionJobs.includes(value.trim())){
                  setSuggestionJobs(prev=>[...prev,value])
                 }
           }     
          else if(name==="locationQuery"){
              if(!suggestionLocation.includes(value.trim())){

                setSuggestionLocation(prev=>[...prev,value])
              }
           }     
           else if(name==="expreinceQuery"){
              if(!suggestionExperience.includes(value.trim())){

                setSuggestionExperience(prev=>[...prev,value])
              }
           }     
       }

      const handleJobsSearchClick=(e)=>{
        e.preventDefault()
        if(!Query.jobQuery||!Query.locationQuery||!Query.expreinceQuery) return  setInputError(true)
        navigate(`/search?query=${Query.jobQuery}&locations=${Query.locationQuery}&experience=${Query.expreinceQuery}`)
        
      }
      const handleInputClick=(query,inputName)=>{
           setQuery({...Query,[inputName]:query.toLowerCase()})
      }

    
  return (
    <div className="lg:px-[75px] py-4  w-full  min-lg:h-[200px] pt-6 ">
      <div className="flex items-center w-full justify-center">
       
         <div className="w-full  max-lg:block hidden">
         <MobileSearchBar />
         </div>
        <div className="w-[70%] max-lg:hidden ">

          <p className="text-center text-[1.9rem] max-xl:text-2xl  max-lg:hidden font-bold ">
          Find your dream job now
          </p>
          <form onSubmit={handleJobsSearchClick}>
          <div className={`border rounded-[20px] flex items-center p-3 ${inputError?"border-red-500":"border-stone-300"} flex items-center h-[50px]   shadow-lg`}>
           
           <div className="w-[50%] relative flex items-center">
           <Search color="gray" />
           <input
           type="text"
           name="jobQuery"
           value={Query.jobQuery}
           onChange={handleChange}
           onBlur={()=>setTimeout(()=>setSuggestionBar(""),500)}
           className="outline-none  border-stone-300 ps-2 w-[100%] text-[13px] pe-4"
           placeholder="Search by Skills, Company or Job Title"
         />
           <div className={`${isSuggestionBar==="jobQuery"?"block":"hidden"} absolute -bottom-[214px] z-10 h-[200px] overflow-auto w-full border-stone-300 rounded-[7px] shadow-2xl  bg-white border`}>
           <SuggestionBar suggestionValue={suggestionJobs} handleQueryClick={(query)=>handleInputClick(query,"jobQuery")} /></div>
           </div>

            <div className="w-[30%] relative">
            <input
            type="text"
            name="locationQuery"
             value={Query.locationQuery}
             onChange={handleChange}
             onBlur={()=>setTimeout(()=>setSuggestionBar(""),500)}
             className="border-l  max-[768px]:hidden border-stone-300 outline-none text-[13px] ps-2 pe-4 w-[100%]"
             placeholder="Loaction "
          />
          <div className={`${isSuggestionBar==="locationQuery"?"block":"hidden"} absolute -bottom-[214px] h-[200px] w-[300px] z-10 border-stone-300 overflow-auto rounded-[7px] shadow-2xl p-3 bg-white border`}>
          <SuggestionBar   suggestionValue={suggestionLocation} handleQueryClick={(query)=>handleInputClick(query,"locationQuery")}/></div>
            </div>

            <div className="w-[20%] relative">
            <input type="text" name="expreinceQuery" value={Query.expreinceQuery}    onBlur={()=>setTimeout(()=>setSuggestionBar(""),500)}   onChange={handleChange}  placeholder="Experience" className="border-l max-[768px]:hidden w-[100%] ps-2 border-stone-300 outline-none text-[13px] "/>
            <div className={`${isSuggestionBar==="expreinceQuery"?"block":"hidden"} absolute left-8 -bottom-[214px] overflow-auto z-10 h-[200px] w-[300px] border-stone-300 rounded-[7px] shadow-2xl p-3 bg-white border`}>
            <SuggestionBar   suggestionValue={suggestionExperience} handleQueryClick={(query)=>handleInputClick(query,"expreinceQuery")}/></div>
            </div>
           
            <div>
            <button
                type="submit"
              className="p-2  max-[768px]:hidden cursor-pointer text-white w-[150px]  ms-3 me-1"
              style={{ backgroundColor: "#6E00BE" ,borderRadius:"20px"}}
            >
              Search
            </button>
            </div>
          </div>
          <div className={inputError?"text-red-500":"hidden"}>Please enter the keyword for search the jobs</div>
          </form>
        </div>

        
      </div>
    </div>
  );
};

export default JobSearchBar;
