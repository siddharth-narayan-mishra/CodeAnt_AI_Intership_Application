import { navOption } from "../../types/navBarTypes";

const NavItem = ({ text, imgSrc, active, selectedImageSrc }: navOption) => {
  return (
    <div
      className="flex gap-1 py-[10px] px-[14px]  leading-6 rounded-lg my-[2px] nav-item-border nav-item-shadow box-border hover:cursor-pointer font-inter font-semibold text-[#414651] hover:bg-[#f5f5f5]"
      style={
        active
          ? {
              backgroundColor: "#1570EF",
              color: "white",
              boxShadow: `0px 0px 0px 1px rgba(10, 13, 18, 0.18) inset, 0px -2px 0px 0px rgba(10, 13, 18, 0.05) inset, 0px 1px 2px 0px rgba(10, 13, 18, 0.05)`,
            }
          : {}
      }
    >
      <div className="w-6 h-6 flex items-center">
        <img src={active ? selectedImageSrc : imgSrc} alt="" />
      </div>
      {text}
    </div>
  );
};

export default NavItem;
