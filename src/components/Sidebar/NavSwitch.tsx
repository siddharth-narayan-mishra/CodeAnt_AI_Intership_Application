import NavItem from "../ui/NavItem";
import { navOption } from "../../types/navBarTypes";

const NavSwitch = ({ navOptions }: { navOptions: navOption[] }) => {
  return (
    <div>
      {navOptions.map((item: navOption, idx: number) => {
        return (
          <NavItem
            text={item.text}
            key={idx}
            imgSrc={item.imgSrc}
            selectedImageSrc={item.selectedImageSrc}
            active={item.active}
          />
        );
      })}
    </div>
  );
};

export default NavSwitch;
