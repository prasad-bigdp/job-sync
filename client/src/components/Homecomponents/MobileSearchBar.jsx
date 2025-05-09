import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MobileSearchBar=()=>{
       

      const navigate=useNavigate()

 
      const handleMobileSearchClick=()=>{
           if(window.innerWidth<1024){
            navigate("/seekerform")
            }

      }

    return(
        
        <div onClick={handleMobileSearchClick} className=' max-lg:block w-full  hidden cursor-pointer'>
        <div className="border rounded-[20px] max-lg:w-full p-3 flex items-center h-[50px] border-stone-300  shadow-lg">
        <Search color='gray'/>
        <span className='w-full px-3 text-[13px] inline-block'>Find your dream jobs</span>
     
        </div>
      </div>
       
    )
}

export default MobileSearchBar