
import { MapPin } from 'lucide-react';
import { Briefcase } from 'lucide-react';
import { Wallet } from 'lucide-react';


const AllJobsListpannel=({filteredJobs,selectedJob,setSelectedJob,setSelected})=>{
      const handleSetSelectJob=(job)=>{
        setSelectedJob(job)
        setSelected(true)
        
      }
      return (
        <>
        {filteredJobs.length > 0 ? (
            <div className="">
               {filteredJobs.map((job) => (
                    <div
                        key={job.id}
                        onClick={(e) => handleSetSelectJob(job)}
                        className={`p-4 border  rounded-[10px] my-3 shadow-sm cursor-pointer w-full flex gap-3 h-[200px] hover:bg-gray-50 ${
                            selectedJob?.id === job.id ? 'bg-gray-100 border-blue-400' : 'border-stone-300'
                        }`}
                    >
                    <div className="mt-2">
                         <img src="default.jpg"/>
                    </div>
                       
                        <div>
                        <h3 className="text-lg font-semibold">{job.title}</h3>
                        <div className="text-gray-700 my-2">{job.company}</div>
                    
                         <div>
                               <div>  <span className="text-sm gap-2 text-gray-500 flex items-center "><span><Briefcase size={12}/></span>{job.experience} • <span className="flex gap-2 items-center"><Wallet size={12}/>{job.salary}</span></span></div>
                              <div>
                                 <span  className="flex text-gray-500 gap-2 items-center" >< MapPin size={12} /><span className="text-[12px]">{job.location}</span></span>
                              </div>
                             
                         </div>
                         <div className="flex gap-3 w-[340px] text-nowrap overflow-hidden mt-4">
                             {job.skills.map((skill,i)=>{
                                 return <div key={i}  >
                                   <div className="text-gray-500 text-[12px]  overflow-hidden">&#x2022; {skill}</div>
                                 </div>
                            })}
                         </div>
                       </div>
                    </div>
                ))}
            </div>
        ) : (
            <p>No matching jobs found.</p>
        )} 
                </>
      )
}
export default AllJobsListpannel