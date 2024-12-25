import LoginWindow from "./LoginWindow";
import loginLogo from "/assets/loginLogo.svg";
import logo from "/assets/logo.png";
import pie from "/assets/pie.svg";
import upArrow from "/assets/upArrow.svg";

const Login = () => {
  return (
    <div className="h-screen flex">
      <div className="h-full w-1/2 relative portrait:hidden">
        <img src={loginLogo} alt="" className="bottom-0 absolute" />
        <div className="h-[170px] w-[447px] absolute bottom-[calc(20rem_+_150px)] left-1/2 -translate-x-1/2 rounded-3xl shadow-login">
          <div className="h-[4.5rem] flex pl-[1.375rem] items-center border-b-[1px] border-[#E6E8F0]">
            <div className="flex h-8 font-inter text-[#081735] text-[18px] leading-[27px] font-bold gap-2 items-center">
              <img src={logo} alt="" className="max-h-full" />
              AI to Detect & Autofix Bad Code
            </div>
          </div>
          <div className="flex justify-evenly items-center h-[calc(170px_-_4.5rem)] w-full">
            <div className="flex flex-col items-center">
              <span className="font-inter text-[#081735] text-[18px] font-bold leading-[27px]">
                30+
              </span>
              <span className="text-secondary">Language Support</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-inter text-[#081735] text-[18px] font-bold leading-[27px]">
                10K+
              </span>
              <span className="text-secondary">Developers</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-inter text-[#081735] text-[18px] font-bold leading-[27px]">
                100K+
              </span>
              <span className="text-secondary">Hours Saved</span>
            </div>
          </div>
        </div>
        <div className="bg-white absolute h-[164px] w-[265px] bottom-80 right-[20%] rounded-3xl shadow-login flex">
          <div id="left" className="w-1/2 flex flex-col justify-evenly pl-8">
            <div className="h-[56px] w-[56px] rounded-full bg-[#9D90FA40] grid place-items-center">
              <img src={pie} alt="" />
            </div>
            <span className="text-[#171717] font-inter text-[14px] font-bold leading-5 pt-2">
              Issues Fixed
            </span>
            <span className="text-[#081735] font-inter text-[32px] font-bold leading-8">
              500K+
            </span>
          </div>
          <div id="right" className="w-1/2 pt-[26.36px] pl-[3rem]">
            <span className="text-[#0049C6] flex w-fit font-bold -mb-2">
              <img src={upArrow} alt="" />
              14%
            </span>
            <span className="text-[#171717] font-inter text-[12px] leading-4">
              This week
            </span>
          </div>
        </div>
      </div>
      <div className="h-full w-1/2 bg-[#FAFAFA] portrait:w-full flex flex-col items-center justify-center gap-8">
        <LoginWindow />
        <span className="text-[#181D27] font-inter leading-6">
          By signing up you agree to the <b>Privacy Policy</b>.
        </span>
      </div>
    </div>
  );
};

export default Login;
