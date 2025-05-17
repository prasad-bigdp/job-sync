import ReactDOM from "react-dom"
import { X } from 'lucide-react';

const Modal=({isOpen,onClose,children})=>{    
    if(!isOpen) return null
    return ReactDOM.createPortal(
        <div className=" fixed bottom-0 top-0 overflow-hidden left-0 right-0 bg-[#00000086] flex justify-center items-center  z-50 ">
           <div className="bg-white relative   rounded-[10px] px-3 max-lg:absolute max-lg:bottom-0  min-w-[300px] lg:max-w-[600px] overflow-auto max-lg:w-full  pt-4 min-h-[300px] max-lg:h-[90vh] lg:max-h-[400px]">
                <button onClick={onClose} className="absolute right-2 top-2 max-lg:hidden inline"><X/></button>
                {children}
                  <div className="absolute bottom-3 right-2">
                   <button onClick={onClose} className="text-[#6E00BE] max-lg:inline hidden  border border-[#6E00BE] p-2 rounded-3 w-[100px] me-3 ">cancel</button>
                <button  className="bg-[#6E00BE] text-white p-2 rounded-3 w-[100px] ">Apply</button>
                  </div>
           </div>
        </div>,
        document.getElementById("modal-root")
    
    )
}

export default Modal