import { ReactNode } from "react"

const LoginMethodButton = ({children}:{children:ReactNode}) => {
  return (
    <div className="flex justify-center items-center gap-4 rounded-lg border-[1px] border-[#D5D7DA] md:w-3/5 w-[calc(100%_-_1rem)] text-[#171717] font-inter font-semibold leading-6 h-fit py-4 shadow-custom hover:cursor-pointer">
      {children}
    </div>
  );
}

export default LoginMethodButton