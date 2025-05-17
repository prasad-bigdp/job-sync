import { useState } from "react"

const FreshnessModal=()=>{
    const[freshJobs,setFreshJobs]=useState([30,20,15,7,3,1])
    return(
        <div>
             <div><span className="font-bold">Freshness</span></div>
             <div>
             {
                freshJobs.map((fresh,i)=>{
                    return <div key={i} className="flex items-center gap-2 text-stone-500">
                       <input type="radio" name="freshJobDate" />
                       <label>Last {fresh} days</label>
                    </div>
                })
             }
             </div>
        </div>
    )
}

export default FreshnessModal