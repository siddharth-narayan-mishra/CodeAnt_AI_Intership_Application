import { loginOptionType } from "../../types/loginTypes";

const LoginMethodSwitch = ({
  options,
  activeIndex,
  setActiveIndex,
}: {
  options: loginOptionType;
  activeIndex: number | null;
  setActiveIndex: (index: number) => void;
}) => {
  return (
    <div className="w-[90%] bg-[#FAFAFA] font-inter text-[20px] font-semibold leading-7 flex justify-around rounded-lg shadow border-[1px] border-[#E9EAEB] relative">
      {options.map((item, idx) => {
        return (
          <span
            key={idx}
            onClick={() => {
              setActiveIndex(idx);
            }}
            className={
              activeIndex === idx
                ? `bg-[#1570EF] text-white w-1/2 h-full grid place-items-center px-[14px] py-4 portrait:py-3 rounded-lg shadow-custom cursor-pointer transition-all duration-300 delay-75`
                : `text-[#414651] h-full w-1/2 grid place-items-center px-[14px] py-4 portrait:py-3 rounded-lg relative z-5 cursor-pointer transition-all duration-300 delay-75`
            }
          >
            {item.text}
          </span>
        );
      })}
    </div>
  );
};

export default LoginMethodSwitch;