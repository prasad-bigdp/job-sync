
import { MessageCircleMore } from "lucide-react";
import { Bell } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { AlignLeft } from "lucide-react";
import { AlignJustify } from "lucide-react";
import ProfileComponent from "./Profile";
import { useState } from "react";
import IsauthLoginComponet from "./AuthLoginCheck";
import { useAuth } from "../../context/AuthContext";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOffcanvas, setToggleOffcanvas] = useState(false);
  const authUser = useAuth();

  return (
    <header className="flex lg:px-[75px] h-[70px]  max-md:p-3 z-20 relative   min-[769px]:shadow-lg max-[768px]:w-full   justify-between   min-[769px]:rounded-bl-2xl  min-[769px]:rounded-br-2xl  min-[769px]:border-b  min-[769px]:border-stone-300 items-center  min-[769px]:gap-4">
      <div className="flex items-center ">
        {authUser.auth.token ? (
          <div className="md:hidden flex gap-4 items-center ">
            <div>
              {" "}
              <AlignJustify
                size={30}
                onClick={() => setToggleOffcanvas(!toggleOffcanvas)}
                className="cursor-pointer "
              />
            </div>
            <div>
              {" "}
              <img
                src="https://res.cloudinary.com/dzmrkbev5/image/upload/v1741630343/%5Bobject%20Object%5D/93039741e042c42035ea22e2.jpg"
                height="40"
                width="40"
                className="border border-stone-300 rounded-full "
              />
            </div>
            <div>
              <div className="text-[14px]">Welcome</div>
              <div className="text-[10px]"></div>
            </div>
          </div>
        ) : (
          <div className="hidden max-md:block">
            <div className="me-4">
              <img
                src="https://res.cloudinary.com/dzmrkbev5/image/upload/v1746340322/JobSync_djvrm2.webp"
                className="w-[110px]"
              />
            </div>
          </div>
        )}
        <div className="md:block hidden">
          <div className="me-4">
            <img
              src="https://res.cloudinary.com/dzmrkbev5/image/upload/v1746340322/JobSync_djvrm2.webp"
              className="w-[110px]"
            />
          </div>
        </div>
        <div className=" flex items-center gap-5 max-lg:text-[0.7rem] text-[14px]  max-[768px]:hidden">
          <div className="font-[500] group  relative  cursor-pointer">
            Jobs
            <div className="w-full h-1 group-hover:bg-orange-400   absolute "></div>
          </div>
          <div className="font-[500] group relative  cursor-pointer">
            Services
            <div className="w-full h-1   group-hover:bg-orange-400  absolute "></div>
          </div>
          <div className="font-[500] group relative  cursor-pointer ">
            Companies
            <div className="w-full h-1   group-hover:bg-orange-400  rounded-[3px] absolute "></div>
          </div>
        </div>
      </div>


      {authUser.auth.token ? (
        <div>
          <div className="flex items-center gap-4">
            <MessageCircleMore size={19} />
            <Bell size={19} />
            <ShoppingCart size={19} />
            <div className=" max-[768px]:hidden">
              <button
                onClick={() => setToggle(!toggle)}
                style={{ backgroundColor: "#F1E6F9" }}
                className="flex gap-3  relative cursor-pointer border border-stone-300 h-[40px] p-2 rounded-[25px] items-center"
              >
                <img
                  src="https://res.cloudinary.com/dzmrkbev5/image/upload/v1741630343/%5Bobject%20Object%5D/93039741e042c42035ea22e2.jpg"
                  className="border w-[30px] h-[30px] border-stone-300 rounded-full "
                />
                <span className="text-[12px] flex items-center gap-1">
                  <span>Hi,</span>
                  <span className="w-[50px] inline-block text-ellipsis text-nowrap overflow-hidden"></span>
                </span>
                <AlignLeft size={19} />
                <div
                  className={
                    toggle
                      ? "absolute right-10 left-0 z-10 -bottom-[135px] w-full rounded-[10px]"
                      : "hidden"
                  }
                >
                  <ProfileComponent />
                </div>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <IsauthLoginComponet />
      )}
    </header>
  );
};

export default Header;
