import { Search } from "lucide-react";
import MobileSearchBar from "./MobileSearchBar";
import { useEffect, useState } from "react";

const JobSearchBar = () => {
      
         const[jobQuery,setJobquery]=useState("")
         const[locationQuery,setLocationQuery]=useState("")
         const[expreinceQuery,setexperinceQuery]=useState("")

      const handleJobsSearchClick=()=>{
             
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
          <div className="border rounded-[20px] p-3  flex items-center h-[50px] border-stone-300  shadow-lg">
            <Search color="gray" />
            <input
              type="text"
              className="outline-none  border-stone-300 ps-2 w-[60%] text-[13px] pe-4"
              placeholder="Search by Skills, Company or Job Title"
            />
            <input
              type="text"
              className="border-l  max-[768px]:hidden border-stone-300 outline-none text-[13px] ps-2 pe-4 w-[20%]"
              placeholder="Loaction "
            />
            <input type="text" placeholder="Experience" className="border-l max-[768px]:hidden w-[20%] ps-2 border-stone-300 outline-none text-[13px] "/>
           
            
            <button
               onClick={handleJobsSearchClick}
              className="p-2  max-[768px]:hidden cursor-pointer text-white w-[150px] rounded-full ms-3 me-1"
              style={{ backgroundColor: "#6E00BE" }}
            >
              Search
            </button>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default JobSearchBar;
