
import { Funnel } from 'lucide-react';
import { useState } from 'react';
const FilterJobs=()=>{
      const[skill,setSkiil]=useState(["Experience","Freshness"])
            return(
                <div className='flex items-center px-2 mb-3 gap-7'>
                   <div className=' '>
                       <Funnel/>
                   </div>
                  
                   <div className='flex gap-4 jobsscrollbar-hide overflow-auto w-full'>
                      {
                        skill.map((filterItem,i)=>{
                            return <div key={i}  className='bg-stone-100 cursor-pointer border border-stone-200 p-1 px-2 rounded-[10px]'>
                               <span>{filterItem}</span>
                            </div>
                        })
                      }
                   </div>
                </div>
            )
}

export default FilterJobs