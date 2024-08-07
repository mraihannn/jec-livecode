import { Outlet } from "react-router-dom";
import SidebarExamSetup from "./SidebarExamSetup";
import HeaderExamSetup from "./HeaderExamSetup";

const LayoutExamSetup = () => {
  return (
    <main className="min-h-screen flex">
      <SidebarExamSetup />
      <div className="flex flex-1">
        <div className="px-6 pt-32 flex flex-col gap-3">
          <p className="font-normal text-[12px] text-[#666666]">SETTINGS</p>
          <button className="flex items-center gap-2 rounded-[16px] px-4 py-2 bg-[#F1F1F1]">
            <img src="document.svg" alt="document" />
            <p className="text-[#2784C6]">Examination Setup</p>
          </button>
        </div>
        <div className="flex-1">
          <HeaderExamSetup />
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default LayoutExamSetup;
