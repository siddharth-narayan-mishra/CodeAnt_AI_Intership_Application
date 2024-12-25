import { ReactNode } from "react"

const ButtonSecondary = ({children}:{children:ReactNode}) => {
  return (
    <div className="flex justify-center items-center gap-1 rounded-lg border-2 border-[#D5D7DA] shadow-am w-fit text-secondary h-fit px-3 py-2 shadow-custom hover:cursor-pointer">
      {children}
    </div>
  );
}

export default ButtonSecondary