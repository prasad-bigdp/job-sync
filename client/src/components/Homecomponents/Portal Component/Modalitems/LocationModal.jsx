import { useState } from "react"

const LocationModal=()=>{
    const[location,setLocation]=useState(["Hyderabad","mumbai","pune","chennai","Bengaluru","Delhi"])
    return(
        <div>
             <div><span className="font-bold">Select Location</span></div>
             <div>
             {
                location.map((area,i)=>{
                    return <div key={i} className="flex items-center gap-2 text-stone-500">
                       <input type="checkbox" name={area} />
                       <label> {area} </label>
                    </div>
                })
             }
             </div>
        </div>
    )
}

export default LocationModal