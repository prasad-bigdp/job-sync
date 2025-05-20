
import { UserPen } from 'lucide-react';
import { CircleUser } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const IsauthLoginComponet=()=>{
    
    const navigate=useNavigate()

    const handleLoginClick=()=>{
           navigate("/login")
    }
    const handleRegisterClick=()=>{
               navigate("/UserSignup")
    }
    const handleEmployersClick=()=>{
        navigate("/EmployerLogin")
    }
   

    return(
         <div>
         <div className='flex   items-center gap-4'>
        
         <div className='border-r flex gap-2 pe-3'>
         <button onClick={handleLoginClick} style={{color:"#8427C8",borderColor:"#8427C8"}} className=' border cursor-pointer lg:text-[13px]  max-lg:text-[9px]   max-md:p-1 flex items-center justify-center p-2  rounded ' ><CircleUser size={15}/>Login</button>
         <button onClick={handleRegisterClick} style={{backgroundColor:"#FC5912"}} className='border  flex items-center cursor-pointer lg:text-[13px]  max-lg:text-[9px]   max-md:p-1  text-white justify-center p-2 rounded '><UserPen size={15}/>Register</button>
         </div>
         <div className=''>
             <button onClick={handleEmployersClick} className='lg:text-[13px] cursor-pointer  max-lg:text-[9px] '>Employers Login</button>
         </div>
        </div>

      
       
    </div>
    )
}

export default IsauthLoginComponet