import logo from "/assets/logo.png";

const NavHeader = () => {
  return (
    <div className="flex h-8 text-[1.5rem] gap-[11px] font-satoshi">
      <img src={logo} alt="" />
      CodeAnt AI
    </div>
  );
};

export default NavHeader;
