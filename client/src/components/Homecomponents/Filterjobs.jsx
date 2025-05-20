
import { Funnel } from 'lucide-react';
import { useState } from 'react';
import Modal from './Portal Component/Modal';
import ExperienceModal from './Portal Component/Modalitems/ExperienceModal';
import FreshnessModal from './Portal Component/Modalitems/FreshnessModal';
import LocationModal from './Portal Component/Modalitems/LocationModal';
import SalaryRangesModal from './Portal Component/Modalitems/SalaryRangesModal';
const FilterJobs=()=>{
      const[skill,setSkiil]=useState(["Experience","Freshness","Location","Salary Range"])
      const[isOpen,setOpen]=useState(false)
      const[modalToggle,setModalToggle]=useState('')
      const handlefilterclick=(index)=>{
              setOpen(true)
              setModalToggle(skill[index])
      }
            return(
                <div className='flex items-center px-2 mb-3 gap-7'>
                   <div className=' '>
                       <Funnel/>
                   </div>
                  
                   <div className='flex gap-4 jobsscrollbar-hide overflow-auto w-full'>
                      {
                        skill.map((filterItem,i)=>{
                            return <div key={i} onClick={()=>handlefilterclick(i)}  className='bg-stone-100  cursor-pointer border border-stone-200 p-1 px-2 rounded-[10px]'>
                               <span  className=' text-nowrap'>{filterItem}</span>
                             
                            </div>
                        })
                      }
                   </div>

                   <Modal isOpen={isOpen} onClose={()=>setOpen(false)} >
                     {modalToggle==="Experience" && <ExperienceModal/>}
                     {modalToggle==="Freshness" && <FreshnessModal/>}
                    {modalToggle==="Location" &&<LocationModal/>}
                    {modalToggle==="Salary Range" &&<SalaryRangesModal/>}



                   
                   </Modal>
                </div>
            )
}

export default FilterJobs