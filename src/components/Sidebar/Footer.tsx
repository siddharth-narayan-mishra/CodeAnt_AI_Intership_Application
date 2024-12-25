import { navOption } from "../../types/navBarTypes";
import NavItem from "../ui/NavItem";

const Footer = ({ footerItems }: { footerItems: navOption[] }) => {
  return (
    <div className="flex flex-col px-4 pb-6 gap-[11px]">
      {footerItems.map((item, idx) => {
        return (
          <NavItem
            key={idx}
            text={item.text}
            imgSrc={item.imgSrc}
            selectedImageSrc=""
            active={false}
          />
        );
      })}
    </div>
  );
};

export default Footer;
