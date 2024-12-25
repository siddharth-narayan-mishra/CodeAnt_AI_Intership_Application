import { ReactNode } from "react";

const ButtonPrimary = ({children}:{children:ReactNode}) => {
  return (
    <div className="relative bg-[#3778d5] p-[2px] w-fit h-fit rounded-lg nav-item-shadow">
      <div className="h-fit px-3 py-2 text-[14px] bg-[#1570EF] w-fit text-white rounded-lg shadow-inner flex gap-1 hover:cursor-pointer">
        {children}
      </div>
    </div>
  );
}

export default ButtonPrimary