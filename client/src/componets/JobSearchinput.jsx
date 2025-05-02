import { Search } from "lucide-react";
import MobileSearchBar from "./MobileSearchBar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const JobSearchBar = () => {
      
         const[jobQuery,setJobquery]=useState("")
         const[locationQuery,setLocationQuery]=useState("")
         const[expreinceQuery,setexperinceQuery]=useState("")
         const [inputError,setInputError]=useState(false)
         const navigate=useNavigate()

      const handleJobsSearchClick=(e)=>{
        e.preventDefault()
        if(!jobQuery||!locationQuery||!expreinceQuery) return  setInputError(true)
          let SearchJobQuery={
                designation:jobQuery,
                location:locationQuery,
                expreince:expreinceQuery
          }
            
          setInputError(false)
          navigate("/job")
             
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
          <div className={`border rounded-[20px] p-3 ${inputError?"border-red-500":"border-stone-300"} flex items-center h-[50px]   shadow-lg`}>
            <Search color="gray" />
            <input
              type="text"
              onChange={(e)=>setJobquery(e.target.value)}
              className="outline-none  border-stone-300 ps-2 w-[60%] text-[13px] pe-4"
              placeholder="Search by Skills, Company or Job Title"
            />
            <input
              type="text"
               onChange={(e)=>setLocationQuery(e.target.value)}
              className="border-l  max-[768px]:hidden border-stone-300 outline-none text-[13px] ps-2 pe-4 w-[20%]"
              placeholder="Loaction "
            />
            <input type="text"     onChange={(e)=>setexperinceQuery(e.target.value)} placeholder="Experience" className="border-l max-[768px]:hidden w-[20%] ps-2 border-stone-300 outline-none text-[13px] "/>
           
            
            <button
                type="submit"
              className="p-2  max-[768px]:hidden cursor-pointer text-white w-[150px] rounded-full ms-3 me-1"
              style={{ backgroundColor: "#6E00BE" }}
            >
              Search
            </button>
          </div>
          <div className={inputError?"text-red-500":"hidden"}>Please enter the keyword for search the jobs</div>
          </form>
        </div>

        
      </div>
    </div>
  );
};

export default JobSearchBar;
