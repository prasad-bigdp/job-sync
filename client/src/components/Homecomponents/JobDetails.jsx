import { MapPin } from 'lucide-react';
import { Briefcase } from 'lucide-react';
import { Wallet } from 'lucide-react';
import { ArrowLeft } from 'lucide-react';




const JobDetails=({selectedJob,setSelected})=>{
    
            const handleJobsBackclick=()=>{
                   setSelected(false)
            }
          return(
            <div className='  '>
            <div className=' h-[70px] lg:hidden fixed flex items-center w-full top-0 z-40  bg-white'>
            <div className='  ps-4 ' ><ArrowLeft  size={25} onClick={handleJobsBackclick}/></div>
            </div>
            <div className="bg-gray-100 z-10   relative ps-6 h-[80px]">
                  <div className="absolute w-[70px]  h-[70px] bg-white border border-stone-300 rounded-[10px] p-2 -bottom-5"><img src= "default.jpg" alt='com' className="w-full h-full" /></div>
                  
                 
                
               </div>
          
               <div  className="p-6"> 
                <div >
                   <h2 className="text-2xl font-bold mb-2">{selectedJob.title}</h2>
                      <div>
                           <div className="my-3"><span className="text-sm gap-2 text-gray-500 flex items-center "><span><Briefcase size={12}/></span>{selectedJob.experience} • <span className="flex gap-2 items-center"><Wallet size={12}/></span>{selectedJob.salary}</span></div>
                          <div>
                             <span  className="flex text-gray-500 gap-2 items-center" >< MapPin size={12} /><span className="text-[12px]">{selectedJob.location}</span></span>
                          </div>
                          <div>
                         <button className="p-2  cursor-pointer text-white w-[150px] my-4 rounded-[14px] "
                        style={{ backgroundColor: "#6E00BE" }}
                        >
                         Apply Now
                        </button>
                    </div>
                     </div>
                   <div>
                   
                    <h4 className="text-lg font-semibold mt-4">Description</h4>
                    <p className="text-gray-700 mb-4">{selectedJob.description}</p>
                   </div>

                    <div>
                    <h4 className="text-lg font-semibold mt-4 border-t border-stone-100 py-3">Skills Required</h4>
                    <div className=" flex gap-4 flex-wrap w-full my-4 text-gray-700 mb-4">
                        {selectedJob.skills.map((skill, index) => (
                            <span key={index} className="bg-stone-300 rounded-[10px] p-2">{skill}</span>
                        ))}
                    </div>
                    </div>
                </div>
            {selectedJob.responsibility && (
                <div>
                    <h4 className="text-lg font-semibold mt-4">Responsibilities</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {selectedJob.responsibility.map((resp, idx) => (
                            <li key={idx}>{resp}</li>
                        ))}
                    </ul>
                   
                </div>
            )}
               
               </div>
        </div>
          )
}

export default JobDetails