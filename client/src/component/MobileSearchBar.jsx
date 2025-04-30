import { Search } from 'lucide-react';

const MobileSearchBar=()=>{

    return(
        
        <div className=' max-lg:block w-full hidden cursor-pointer'>
        <div className="border rounded-[20px] max-lg:w-full p-3 flex items-center h-[50px] border-stone-300  shadow-lg">
        <Search color='gray'/>
        <span className='w-full px-3 text-[13px] inline-block'>Over 8,00,000 openings delivered perfectly.</span>
     
        </div>
      </div>
       
    )
}

export default MobileSearchBar
