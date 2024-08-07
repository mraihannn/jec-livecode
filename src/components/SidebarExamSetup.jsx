import { Link } from "react-router-dom";
import BillingIcon from "../assets/BillingIcon";
import HomeIcon from "../assets/HomeIcon";
import MenuIcon from "../assets/MenuIcon";
import QuitIcon from "../assets/QuitIcon";
import ReviewIcon from "../assets/ReviewIcon";

const SidebarExamSetup = () => {
  return (
    <div className="bg-[#034A5A] flex flex-col max-w-[100px] p-6">
      <div className="flex justify-center items-center">
        <MenuIcon color="white" />
      </div>
      <div className="flex flex-col gap-10 mt-10">
        <Link to={"/"}>
          <div className="flex flex-col gap-2">
            <div className="bg-transparent w-[56px] flex items-center justify-center h-[40px] rounded-[24px]">
              <HomeIcon color="white" />
            </div>
            <p className="text-white text-center">Home</p>
          </div>
        </Link>

        <div className="flex flex-col items-center gap-2">
          <div className="bg-transparent w-[56px] flex items-center justify-center h-[40px] rounded-[24px]">
            <ReviewIcon color="white" />
          </div>
          <p className="text-white text-center ">Apps</p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="bg-transparent w-[56px] flex items-center justify-center h-[40px] rounded-[24px]">
            <ReviewIcon color="white" />
          </div>
          <p className="text-white text-center">Exam</p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="bg-transparent w-[56px] flex items-center justify-center h-[40px] rounded-[24px]">
            <BillingIcon color="white" />
          </div>
          <p className="text-white text-center">Billing</p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="bg-white w-[56px] flex items-center justify-center h-[40px] rounded-[24px]">
            <QuitIcon color="#034A5A" />
          </div>
          <p className="text-white text-center">Setting</p>
        </div>
      </div>
    </div>
  );
};

export default SidebarExamSetup;
