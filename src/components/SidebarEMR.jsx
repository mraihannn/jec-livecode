import { Link } from "react-router-dom";
import BillingIcon from "../assets/BillingIcon";
import HomeIcon from "../assets/HomeIcon";
import MenuIcon from "../assets/MenuIcon";
import QuitIcon from "../assets/QuitIcon";
import ReviewIcon from "../assets/ReviewIcon";

const SidebarEMR = () => {
  return (
    <div className="bg-[#034A5A] flex flex-col max-w-[100px] p-6">
      <div className="flex justify-center items-center">
        <MenuIcon color="white" />
      </div>
      <div className="flex flex-col gap-10 mt-44">
        <div className="flex flex-col gap-2">
          <div className="bg-transparent w-[56px] flex items-center justify-center h-[40px] rounded-[24px]">
            <HomeIcon color="white" />
          </div>
          <p className="text-white text-center">Allergies</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="bg-white w-[56px] flex items-center justify-center h-[40px] rounded-[24px]">
            <ReviewIcon color="#034A5A" />
          </div>
          <p className="text-white text-center ">Chart Reviews</p>
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

        <Link to="/examtoroom">
          <div className="flex flex-col gap-2">
            <div className="bg-[#E86F6F] w-[56px] flex items-center justify-center h-[40px] rounded-[24px]">
              <QuitIcon color="#034A5A" />
            </div>
            <p className="text-white text-center">Quit</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SidebarEMR;
