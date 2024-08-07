const BannerSection = ({
  bannerLeft,
  bannerRight,
  handleBannerLeft,
  handleBannerRight,
}) => {
  return (
    <div className="flex">
      <div className="bg-[#057088] flex">
        <div className="relative w-fit">
          <img src="/avatar2.png" alt="avatar2" className="h-[150px]" />
          <img
            src="/qr_code.svg"
            alt="avatar2"
            className="absolute top-0 right-0"
          />
        </div>
        <div className="p-2 flex flex-col gap-4">
          <div className="flex gap-2">
            <p className="text-white bg-[#DF2323] py-1 px-2 rounded-[20px] text-[10px] font-bold">
              Allergy
            </p>
            <p className="text-white bg-[#DF2323] py-1 px-2 rounded-[20px] text-[10px] font-bold">
              DM | Chronix Complex
            </p>
          </div>
          <div className="text-white">
            <div className="flex gap-2">
              <img src="/man.svg" alt="man" />
              <h1 className="font-semibold text-[24px]">
                Tn. Patient Demo, Msc, MTi (65)
              </h1>
            </div>
            <p>Jl. Terusan Arjuna Utara No.1, West Kedoya Kebon Jeruk</p>
            <div className="flex gap-2">
              <div className="flex gap-1 items-center">
                <img src="/cake.svg" alt="cake" className="" />
                <p className="text-nowrap">19-01-1986</p>
              </div>
              <div className="flex gap-1 items-center">
                <img src="/telephone.svg" alt="telephone" />
                <p className="text-nowrap">02129221000</p>
              </div>
              <div className="flex gap-1">
                <p>#002-022-20-45</p>
              </div>
              <img src="/notes_gold.svg" alt="notes_gold" />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center ml-10">
          <div className="flex flex-col items-center justify-center border-l-2 border-[#045568] h-1/2 p-2 gap-3 text-[10px]">
            <p className="rounded-[20px] bg-white text-[#045568] px-2 font-medium">
              WFM
            </p>
            <img src="/timeline.svg" alt="timeline" />
          </div>
        </div>
      </div>
      <div className="bg-[#EBF4F6] p-2 flex flex-col gap-5">
        <div className="flex gap-2">
          <p className="flex items-center px-2 text-white text-[10px] font-bold rounded-[20px] bg-[#00BD9D]">
            BPJS
          </p>
          <p className="flex items-center px-2 text-white text-[10px] font-bold rounded-[20px] bg-[#00BD9D]">
            INSURANCE
          </p>
          <p className="flex items-center px-2 text-white text-[10px] font-bold rounded-[20px] bg-[#424242]">
            OCULAR TRAUMA
          </p>
        </div>
        <p className="font-bold text-[14px]">
          <span className="text-[#424242]">STATUS:</span> WAITING TO DOCTOR (JH)
        </p>
      </div>
      <div className="p-2 flex flex-col flex-1">
        <div className="flex-1">
          {bannerLeft && (
            <div>
              <div className="flex gap-1">
                <img src="diagnosis.svg" alt="diagnosis" />
                <p className="text-[16px] font-semibold text-[#034A5A]">
                  Diagnosis
                </p>
              </div>
              <p className="text-[#424242] font-bold">
                22/04/2024 Pseudophakia (Z96.1) 
                <span className="text-[#3546E0]"> ODS</span>, Post Laser Argon
                (Z48.8) <span className="text-[#2C8E42]">OD</span>, Post TSV23G
                + EL + Sil. Oil (Z48.8) 
                <span className="text-[#B2381E]">OS</span>, Retinal Detachment
                (H33.2) 
                <span className="text-[#B2381E]">OS</span>
              </p>
            </div>
          )}
          {bannerRight && (
            <div>
              <div className="flex gap-1">
                <img src="diagnosis.svg" alt="diagnosis" />
                <p className="text-[16px] font-semibold text-[#034A5A]">
                  Refraction
                </p>
              </div>
              <div className="text-[#424242] font-bold">
                <p>IOP : 11.7 | 13.0 (22/04/24)</p>
              </div>
            </div>
          )}
        </div>

        <p className="flex justify-end gap-3 mt-5 mr-5">
          <button onClick={handleBannerLeft}>
            <img src="/arrow_ouline.svg" alt="arrow_outline" />
          </button>
          <button onClick={handleBannerRight}>
            <img src="/arror_fill.svg" alt="arrow_fill" />
          </button>
        </p>
      </div>
      <div className="flex items-center justify-center bg-[#057088] px-2 font-semibold text-[16px] text-white">
        Action
      </div>
    </div>
  );
};

export default BannerSection;
