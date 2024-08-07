import { Outlet } from "react-router-dom";
import HeaderEMR from "./HeaderEMR";
import SidebarEMR from "./SidebarEMR";

const LayoutEMR = () => {
  return (
    <main className="min-h-screen flex">
      <SidebarEMR />
      <div className="flex-1">
        <HeaderEMR />
        <Outlet />
      </div>
    </main>
  );
};

export default LayoutEMR;
