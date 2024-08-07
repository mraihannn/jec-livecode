import { useState } from "react";
import BannerSection from "../components/BannerSection";
import LeftSection from "../components/LeftSection";
import RightSection from "../components/RightSection";

const PatientReviewPage = () => {
  const [radiology, setRadiology] = useState(false);
  const [laboratory, setLaboratory] = useState(false);
  const [diagnosis, setDiagnosis] = useState(false);
  const [surgery, setSurgery] = useState(false);
  const [bannerRight, setBannerRight] = useState(false);
  const [bannerLeft, setBannerLeft] = useState(true);

  const handleModal = () => {
    document.getElementById("image_modal").showModal();
  };

  const handleBannerLeft = () => {
    setBannerLeft(true);
    setBannerRight(false);
  };

  const handleBannerRight = () => {
    setBannerRight(true);
    setBannerLeft(false);
  };

  const handleRadioloy = () => {
    setRadiology(true);
    setLaboratory(false);
    setDiagnosis(false);
    setSurgery(false);
  };
  const handleDiagnosis = () => {
    setRadiology(false);
    setLaboratory(false);
    setDiagnosis(true);
    setSurgery(false);
  };
  const handleSurgery = () => {
    setRadiology(false);
    setLaboratory(false);
    setDiagnosis(false);
    setSurgery(true);
  };

  const handleLaboratory = () => {
    setRadiology(false);
    setLaboratory(true);
    setDiagnosis(false);
    setSurgery(false);
  };

  return (
    <div className="flex flex-col">
      <BannerSection
        bannerLeft={bannerLeft}
        bannerRight={bannerRight}
        handleBannerLeft={handleBannerLeft}
        handleBannerRight={handleBannerRight}
      />
      <div className="bg-[#EDF6F8] flex">
        <p className="bg-[#034A5A] text-white font-bold px-12 py-2">
          Patient Info
        </p>
        <div className="text-[#034A5A] relative flex bg-white font-bold  py-2">
          <p className="px-12">Chart Reviews</p>
          <span className="absolute right-5">x</span>
        </div>
      </div>
      <div className="flex">
        <div className="flex-1 p-2">
          <LeftSection
            handleDiagnosis={handleDiagnosis}
            handleSurgery={handleSurgery}
            handleModal={handleModal}
          />
        </div>
        <div className="flex-1 p-2">
          <RightSection
            radiology={radiology}
            laboratory={laboratory}
            diagnosis={diagnosis}
            surgery={surgery}
            handleLaboratory={handleLaboratory}
            handleRadioloy={handleRadioloy}
          />
        </div>
      </div>
    </div>
  );
};

export default PatientReviewPage;
