import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from 'react';

const ExperienceModal=()=>{
    const[sliderValue,setSliderValue]=useState(0)
    const getRangevalue=(e)=>{
        setSliderValue(e.target.value)
    }
    return(
        <div className='w-full mt-4 '>

          <div className='flex items-center justify-between'>
          <span className='text-[13px] text-stone-500 '>Select Experience</span>
          <button onClick={()=>setSliderValue(0)} className='text-red-500'>reset</button>
          </div>

          <div className='text-[13px]'>
            {
                sliderValue===0?<span>Fresher {sliderValue} yrs </span>:<span>{sliderValue} Years</span>
            }
          </div>
           
         <div>
                  <Box sx={{ width:'100%' }}>
             <Slider
        aria-label="Temperature"
        value={sliderValue}
         onChange={getRangevalue}
         min={0}
         max={30}
        color="secondary"
      />
      </Box>

         </div>

        </div>
    )
}

export default ExperienceModal