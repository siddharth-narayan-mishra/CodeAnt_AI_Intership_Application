import NavHeader from "./NavHeader";
import NavSwitch from "./NavSwitch";
import { navOption } from "../../types/navBarTypes";
import UserSwitch from "./UserSwitch";
import { users } from "../../config/navItems";

const Navigation = ({ navOptions }: { navOptions: navOption[] }) => {
  return (
    <div className="flex flex-col gap-4 pt-6">
      <NavHeader />
      <UserSwitch options={users} />
      <NavSwitch navOptions={navOptions} />
    </div>
  );
};

export default Navigation;
