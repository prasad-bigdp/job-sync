
import { memo } from "react"
const SuggestionBar=({suggestionValue,handleQueryClick})=>{
           
            return(
                <div  className="w-full h-full  overflow-x-hidden  px-2">
                    <div>
                       {suggestionValue &&
                         suggestionValue.map((query,i)=>{
                            return  <div key={i}  className="my-2 text-wrap">
                             <div onClick={(e)=>handleQueryClick(query)} className="hover:bg-stone-200 hover:cursor-pointer p-2 rounded-[10px]">{query}</div>
                        </div>
                         })
                       }
                
                     
                    </div>
                  
                </div>
            )
}

export default memo(SuggestionBar)