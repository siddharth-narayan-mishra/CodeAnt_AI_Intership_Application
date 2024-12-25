import { useState } from "react";
import NavHeader from "../../components/Sidebar/NavHeader";
import { loginOptions } from "../../config/loginOptions";
import LoginMethodButton from "./LoginOptionButton";
import LoginMethodSwitch from "./LoginMethodSwitch";

const LoginWindow = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="w-[80%] portrait:w-[90%] flex flex-col items-center bg-white pt-9 pb-6 rounded-xl border-[1px] border-[#E9EAEB]">
      <NavHeader />
      <span className="text-[#181D27] font-inter text-[32px] portrait:text-2xl font-semibold leading-[48px] mt-9 mb-5">
        Welcome to CodeAnt AI
      </span>
      <LoginMethodSwitch
        options={loginOptions}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      <div
        id="divider"
        className="w-full h-0 border-[0.5px] border-[#D5D7DA] mt-9 mb-6"
      ></div>
      <div className="flex flex-col gap-8 w-full items-center h-[325px]">
        {loginOptions[activeIndex].options.map((item, idx) => {
          return (
            <LoginMethodButton key={idx}>
              <div className="h-6 w-6">
                <img src={item.logo} alt="" />
              </div>
              {item.text}
            </LoginMethodButton>
          );
        })}
      </div>
    </div>
  );
};

export default LoginWindow;