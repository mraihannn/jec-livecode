const RightSection = ({
  laboratory,
  radiology,
  diagnosis,
  surgery,
  handleLaboratory,
  handleRadioloy,
}) => {
  return (
    <div className="p-5 gap-3 flex flex-col">
      <div className="flex gap-2">
        <button onClick={handleLaboratory}>
          <img src="bottle.svg" alt="bottle" />
        </button>
        <img src="eye.svg" alt="eye" />
        <button onClick={handleRadioloy}>
          <img src="bone.svg" alt="bone" />
        </button>
      </div>
      <div className="rounded-[12px] border border-[#E3E3E3] p-2">
        <div className="border p-2 border-[#E3E3E3]">
          <h2 className="font-semibold">Patient Chart</h2>
          <img src="chart.png" alt="chart" />
        </div>
      </div>
      <div className="rounded-[12px] border border-[#E3E3E3] py-8 px-6 ">
        {laboratory && (
          <div className="flex flex-col gap-4">
            <h2 className="text-[#034A5A] font-bold text-[24px]">
              PATIENT DOCUMENT : LABORATORY
            </h2>
            <div className="flex justify-between">
              <input
                type="text"
                className="border-2 rounded-[12px] px-2"
                placeholder="Search..."
              />
              <img src="2button.png" alt="2button" className="h-[40px]" />
            </div>
            <div className="flex gap-2">
              <div className="flex flex-col gap-4 rounded-[12px] border-2 p-4 items-center">
                <img src="PDF.png" alt="PDF" className="h-[50px] w-[50px]" />
                <p className="font-bold">LAB 26/04 2024</p>
              </div>
              <div className="flex flex-col gap-4 rounded-[12px] border-2 p-4 items-center">
                <img src="PDF.png" alt="PDF" className="h-[50px] w-[50px]" />
                <p className="font-bold">LAB 26/04 2024</p>
              </div>
            </div>
          </div>
        )}

        {radiology && (
          <div className="flex flex-col gap-4">
            <h2 className="text-[#034A5A] font-bold text-[24px]">
              PATIENT DOCUMENT : RADIOLOGY
            </h2>
            <div className="flex justify-between">
              <input
                type="text"
                className="border-2 rounded-[12px] px-2"
                placeholder="Search..."
              />
              <img src="2button.png" alt="2button" className="h-[40px]" />
            </div>
            <div className="flex gap-2">
              <div className="flex flex-col items-center w-fit">
                <img
                  src="radiology.png"
                  alt="radiology"
                  className="h-[120px] w-[120px]"
                />
                <p className="font-bold relative bottom-6 text-white text-[12px]">
                  LAB 26/04 2024
                </p>
              </div>
              <div className="flex flex-col items-center w-fit">
                <img
                  src="radiology.png"
                  alt="radiology"
                  className="h-[120px] w-[120px]"
                />
                <p className="font-bold relative bottom-6 text-white text-[12px]">
                  LAB 26/04 2024
                </p>
              </div>
            </div>
          </div>
        )}

        {diagnosis && (
          <div className="flex flex-col gap-4">
            <h2 className="text-[#034A5A] font-bold text-[24px]">DIAGNOSIS</h2>
            <div className="flex gap-1">
              <div className="w-[17%] font-bold flex flex-col">
                <p>23/04 2024</p>
                <div className="flex items-center gap-2">
                  <img src="location.svg" alt="location" />
                  <p>KDY</p>
                </div>
              </div>
              <div className="w-[60%] font-bold text-[16px] flex flex-col gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <p>
                      <span className="text-[#E75232]">Dx</span> - Pseudophakia
                      [Z96.1] <span className="text-[#3546E0]">ODS</span>
                    </p>
                    <p className="px-3 flex items-center text-white bg-[#4F0B78] rounded-[20px] text-[12px]">
                      Primary
                    </p>
                  </div>

                  <p className="font-semibold">
                    Pasien bersedia untuk dilakukan tindakan setelah kembali
                    dari medan perang
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p>
                      <span className="text-[#E75232]">Dx</span> - Pseudophakia
                      <span className="text-[#3546E0]">ODS</span>
                    </p>
                    <p className="px-3 flex items-center text-white bg-[#4F0B78] rounded-[20px] text-[12px]">
                      Secondary
                    </p>
                  </div>

                  <p className="font-semibold">
                    Pasien bersedia untuk dilakukan tindakan setelah kembali
                    dari medan perang
                  </p>
                </div>
              </div>
              <div className="w-[23%] font-bold">
                <p>dr. DR. Johan A. Hutauruk, Sp.M (k) Time: 09.09</p>
              </div>
            </div>
          </div>
        )}

        {surgery && (
          <div className="flex flex-col gap-4">
            <h2 className="text-[#034A5A] font-bold text-[24px]">
              SURGERY PLAN
            </h2>
            <div className="flex gap-1">
              <div className="w-[17%] font-bold flex flex-col">
                <p>23/04 2024</p>
                <div className="flex items-center gap-2">
                  <img src="location.svg" alt="location" />
                  <p>KDY</p>
                </div>
              </div>
              <div className="w-[60%] font-bold text-[16px] flex flex-col gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <p>
                      <span className="text-[#E75232]">Dx</span> - Pseudophakia
                      [Z96.1] <span className="text-[#3546E0]">ODS</span>
                    </p>
                    <p className="px-3 flex items-center text-white bg-[#4F0B78] rounded-[20px] text-[12px]">
                      Primary
                    </p>
                  </div>

                  <p className="font-semibold">
                    Pasien bersedia untuk dilakukan tindakan setelah kembali
                    dari medan perang
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p>
                      <span className="text-[#E75232]">Dx</span> - Pseudophakia
                      <span className="text-[#3546E0]">ODS</span>
                    </p>
                    <p className="px-3 flex items-center text-white bg-[#4F0B78] rounded-[20px] text-[12px]">
                      Secondary
                    </p>
                  </div>

                  <p className="font-semibold">
                    Pasien bersedia untuk dilakukan tindakan setelah kembali
                    dari medan perang
                  </p>
                </div>
              </div>
              <div className="w-[23%] font-bold">
                <p>dr. DR. Johan A. Hutauruk, Sp.M (k) Time: 09.09</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RightSection;
