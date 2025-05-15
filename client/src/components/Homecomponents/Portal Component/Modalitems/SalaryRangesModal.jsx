import { useState } from "react"

const SalaryRangesModal=()=>{
    const[SalaryRanges,setSalaryRanges]=useState(["6-10","10-15","15-20","20-25","25-35","50"])
    return(
        <div>
             <div><span className="font-bold">Salary</span></div>
             <div>
             {
                SalaryRanges.map((Salary,i)=>{
                    return <div key={i} className="flex items-center gap-2 text-stone-500">
                       <input type="checkbox" />
                       <label> {Salary} lakhs</label>
                    </div>
                })
             }
             </div>
        </div>
    )
}

export default SalaryRangesModal