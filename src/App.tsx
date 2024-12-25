import MobileNav from "./components/MobileNavbar/MobileNav";
import Sidebar from "./components/Sidebar/Sidebar";
import { navOptions } from "./config/navItems";
import Home from "./pages/Home";

function App() {
  return (
    <div className="h-screen flex portrait:flex-col landscape:flex-row">
      <MobileNav navOptions={navOptions}/>
      <Sidebar navOptions={navOptions} />
      <Home />
    </div>
  );
}

export default App;
