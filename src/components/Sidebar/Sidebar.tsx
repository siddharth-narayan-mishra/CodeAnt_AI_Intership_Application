import Footer from "./Footer";
import Navigation from "./Navigation";
import { navOption } from "../../types/navBarTypes";
import { footerItems } from "../../config/navItems";

const Sidebar = ({ navOptions }: { navOptions: navOption[] }) => {
  return (
    <div className="h-full w-60 overflow-hidden flex flex-col justify-between px-4 portrait:hidden">
      <Navigation navOptions={navOptions} />
      <Footer footerItems={footerItems}/>
    </div>
  );
};

export default Sidebar;
