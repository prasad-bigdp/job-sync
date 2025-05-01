
import { MessageCircleMore } from 'lucide-react';
import { Bell } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { AlignLeft } from 'lucide-react';
import { AlignJustify } from 'lucide-react';
import ProfileComponent from './Profile';
import { useState } from 'react';
import IsauthLoginComponet from './AuthLoginCheck';


const Header=()=>{
      
  const [toggle,setToggle]=useState(false)
  const[toggleOffcanvas,setToggleOffcanvas]=useState(false)
  const[auth,setAuth]=useState(false)

    return(
        <header className="flex lg:px-[75px] max-md:p-3  relative   min-[769px]:shadow-lg max-[768px]:w-full   justify-between   min-[769px]:rounded-bl-2xl  min-[769px]:rounded-br-2xl  min-[769px]:border-b  min-[769px]:border-stone-300 items-center  min-[769px]:gap-4" >
               <div className="flex items-center ">
                {
                  auth?<div className='md:hidden flex gap-4 items-center '>
                  <div>  <AlignJustify size={30} onClick={()=>setToggleOffcanvas(!toggleOffcanvas)} className='cursor-pointer '/></div>
                  <div> <img src='https://res.cloudinary.com/dzmrkbev5/image/upload/v1741630343/%5Bobject%20Object%5D/93039741e042c42035ea22e2.jpg' height="40" width="40" className='border border-stone-300 rounded-full ' /></div>
                <div>
                  <div className='text-[14px]'>Welcome</div>
                  <div className='text-[10px]'></div>
                </div>
             
                </div>:
                <div className='hidden max-md:block'>
                <svg
                width="150"
                height="60"
                viewBox="0 0 400 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <text
                  x="10"
                  y="70"
                  fontFamily="Arial, Helvetica, sans-serif"
                  fontSize="70"
                  fill="#6a1b9a"
                  fontWeight="bold"
                >
                  foundit
                </text>
              </svg>
                </div>
                }
               <div className='md:block hidden'>
               <svg
               width="150"
               height="60"
               viewBox="0 0 400 100"
               xmlns="http://www.w3.org/2000/svg"
             >
               <text
                 x="10"
                 y="70"
                 fontFamily="Arial, Helvetica, sans-serif"
                 fontSize="70"
                 fill="#6a1b9a"
                 fontWeight="bold"
               >
                 foundit
               </text>
             </svg>
               </div>
                 <div className=" flex items-center gap-3 max-lg:text-[0.7rem] text-[14px]  max-[768px]:hidden">
                    <div className="font-[500] hover:underline cursor-pointer">Jobs</div>
                    <div className="font-[500] hover:underline   cursor-pointer">Services</div>
                    <div  className="font-[500] hover:underline  cursor-pointer ">Highlight</div>
                    <div className="font-[500] hover:underline  cursor-pointer">Prep</div>
                    <div className="font-[500] hover:underline  cursor-pointer">Learn</div>
                    <div className="font-[500] hover:underline   cursor-pointer">Career Advice</div>
                 </div>

              </div>


              {
                auth? <div>
                <div className='flex items-center gap-4'>
                   <MessageCircleMore  size={19}/>
                   <Bell size={19}/>
                   <ShoppingCart size={19}/>
                   <div className=' max-[768px]:hidden'>
                       <button onClick={()=>setToggle(!toggle)} style={{backgroundColor:"#F1E6F9"}} className='flex gap-3  relative cursor-pointer border border-stone-300 h-[40px] p-2 rounded-[25px] items-center'>
                           <img src='https://res.cloudinary.com/dzmrkbev5/image/upload/v1741630343/%5Bobject%20Object%5D/93039741e042c42035ea22e2.jpg' className='border w-[30px] h-[30px] border-stone-300 rounded-full ' />
                          <span className='text-[12px] flex items-center gap-1'><span>Hi,</span><span className='w-[50px] inline-block text-ellipsis text-nowrap overflow-hidden'></span></span>
                           <AlignLeft size={19}/>
                           <div className={toggle?"absolute right-10 left-0 z-10 -bottom-[135px] w-full rounded-[10px]":"hidden"}>
                             <ProfileComponent/>
                           </div>
                       </button>
                   </div>
                </div>
            </div>:<IsauthLoginComponet/>
              }
             

        </header>
    )
}


export default Header