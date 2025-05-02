
import { ChevronLeft } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const MobileSearchJobs=()=>{
      const navigate=useNavigate()
      const [jobSearchHistory,setJobsearchHistory]=useState([])
      const[jobsQuery,setJobsquery]=useState("")
      const[locationQuery,setLocationquery]=useState("")
      const[expreinceQuery,setexperinceQuery]=useState("")
        useEffect(()=>{
             if(window.innerWidth>1024){
                  navigate("/index")
             }
        },[navigate])
        const handlebacktoHome=()=>{
            navigate("/index")
        }
           const handleJobsSearchclick=()=>{
                if(jobsQuery ===""||locationQuery==="") return null
                 let query={
                    designation:jobsQuery,
                    location:locationQuery
                 }
                 setJobsearchHistory((prev)=>[...prev,query])
                try{
                      
                }
                catch(err){

                }
             
           }
        return(
            <div className='p-3 h-[100vh] relative'>
                <div className='flex'>
                  <div><ChevronLeft onClick={handlebacktoHome}/></div>
                  <div>Search Jobs</div>
                </div>

                <div className='flex flex-col my-3 gap-3'>
      
               <div>
               <input
                onChange={(e)=>setJobsquery(e.target.value)}
               type="text"
               className="outline-none border   w-full border-stone-300 rounded-[10px] ps-2 h-[50px] text-[15px] pe-4"
               placeholder="Search by Skills, Company or Job Title"
             />
               </div>
                <div>
                <input
                onChange={(e)=>setLocationquery(e.target.value)}
                  type="text"
                  className="border-l border   border-stone-300 outline-none rounded-[10px] h-[50px] text-[15px] ps-2 pe-4 w-full"
                  placeholder="Loaction "
                />
              
                </div>
                <div>
                <input
                onChange={(e)=>setexperinceQuery(e.target.value)}
                  type="text"
                  className="border-l border   border-stone-300 outline-none rounded-[10px] h-[50px] text-[15px] ps-2 pe-4 w-full"
                  placeholder="Experience "
                />
              
                </div>
               
                </div>
                  <div className='h-[450px] overflow-auto pb-3'>
                    <h2>Recent Searches</h2>
                     {
                        jobSearchHistory.map(history=>{
                            return <div>{history.designation}</div>
                        })
                     }
                  
                  </div>
                <div className='absolute w-full left-0 px-3 bottom-1'>
                <button
                  onClick={handleJobsSearchclick}
               className="p-2   cursor-pointer text-white text-xl w-full rounded-[10px] "
               style={{ backgroundColor: "#6E00BE" }}
             >
               Search
             </button>
                </div>
            </div>
        )
}

export default MobileSearchJobs