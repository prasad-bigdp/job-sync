
import { Settings } from 'lucide-react';
import { LogOut } from 'lucide-react';
const ProfileComponent=()=>{
            return(
                <div className="h-fit p-4 w-full rounded-[10px] bg-white">
                    <div className='flex flex-col gap-3 items-center '>
                       <div className="flex gap-1 items-center">
                       <div>
                       <img src="https://res.cloudinary.com/dzmrkbev5/image/upload/v1741630343/%5Bobject%20Object%5D/93039741e042c42035ea22e2.jpg" className="w-[30px] rounded-full h-[30px]"/></div>
                       <div className="text-[14px]">View Profile</div>
                       </div>
                       <div className='flex gap-1'>
                         <div><Settings /></div>
                         <div>Settings</div>
                       </div>
                       <div className='flex gap-1'>
                       <div><LogOut /></div>
                       <div>Logout</div>
                     </div>
                    </div>
                </div>
            )
}

export default ProfileComponent