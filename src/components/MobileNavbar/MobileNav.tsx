import { useState } from "react";
import { footerItems, users } from "../../config/navItems";
import { navOption } from "../../types/navBarTypes";
import NavHeader from "../Sidebar/NavHeader";
import NavItem from "../ui/NavItem";
import hamburger from "/assets/icons/hamburger.svg";
import cross from "/assets/icons/cross.svg"
import UserSwitch from "../Sidebar/UserSwitch";

const MobileNav = ({ navOptions }: { navOptions: navOption[] }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="landscape:hidden max-h-screen">
      <div id="header" className="flex justify-between p-4">
        <NavHeader />
          <img
            src={expanded ? cross : hamburger}
            alt=""
            onClick={() => {
              setExpanded(!expanded);
            }}
            className="hover:cursor-pointer"
          />
      </div>
      {expanded && (
        <div
          id="expanded-nav"
          className="absolute bg-[#6C6C6C4D] h-full w-full z-10"
        >
          <div className="bg-white px-3">
            <UserSwitch options={users} />
            {navOptions.map((item: navOption, idx: number) => {
              return (
                <NavItem
                  text={item.text}
                  imgSrc={item.imgSrc}
                  selectedImageSrc={item.selectedImageSrc}
                  active={false}
                  key={idx}
                />
              );
            })}
            {footerItems.map((item: navOption, idx: number) => {
              return (
                <NavItem
                  text={item.text}
                  imgSrc={item.imgSrc}
                  selectedImageSrc={item.selectedImageSrc}
                  active={false}
                  key={idx}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
