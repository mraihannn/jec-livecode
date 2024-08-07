const LeftSection = ({ handleSurgery, handleDiagnosis, handleModal }) => {
  return (
    <div className="border-r-2 border-b-2 p-5 gap-3 flex flex-col">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-[#034A5A] text-[32px]">Clinical Notes</h1>
        <img src="/plus_green.svg" alt="plus_green" />
      </div>
      <div className="flex justify-between w-[95%]">
        <p className="font-semibold text-[15px]">
          23/04 2024 Outpatient - dr. DR. Johan A. Hutauruk, Sp.M (k)
        </p>
        <div className="flex gap-3 items-center">
          <p className="flex justify-end gap-3">
            <img src="/arrow_ouline.svg" alt="arrow_outline" />
            <img src="/arror_fill.svg" alt="arrow_fill" />
          </p>
          <p className="font-semibold text-[15px]">19/04 2024</p>
        </div>
      </div>
      <div className="w-[95%] mb-5">
        <div className="flex items-center gap-2">
          <h2 className="font-bold text-[16px]">Subjective</h2>
          <div className="w-full border-b-4 border-[#057088] mt-1"></div>
        </div>
        <div className="font-bold text-[16px] flex flex-col gap-2 pl-8 mt-2">
          <div>
            <p>
              <span className="text-[#E75232]">CC</span> - RETINA POST OP OD
            </p>
            <p className="font-semibold">post - op 1 bulan</p>
          </div>
          <p>
            <span className="text-[#E75232]">PH</span> - HYSTORY OF HYPERTENSION
          </p>
          <p>
            <span className="text-[#E75232]">PO</span> - CAT SURGERY 15 YEARS
            AGO
          </p>
        </div>
      </div>
      <div className="w-[95%] mb-5">
        <div className="flex items-center gap-2">
          <h2 className="font-bold text-[16px]">Objective</h2>
          <div className="w-full border-b-4 border-[#057088] mt-1"></div>
        </div>
        <div className="font-bold text-[16px] flex flex-col gap-2 pl-10 mt-2">
          <div>
            <h2 className="text-[#034A5A] font-bold">IOP</h2>
            <p>Type : Non-Contact</p>

            <div className="overflow-hidden rounded-lg border w-fit border-gray-300">
              <table className="table-auto border-collapse  w-fit rounded-lg ">
                <thead>
                  <tr className="bg-white">
                    <th className="border border-gray-300 px-4 py-2"></th>
                    <th className="border border-gray-300 px-4 py-2">OD</th>
                    <th className="border border-gray-300 px-4 py-2">OS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-100">
                    <td className="border border-gray-300 px-4 py-2"></td>
                    <td className="border border-gray-300 px-4 py-2">10.7</td>
                    <td className="border border-gray-300 px-4 py-2">13</td>
                  </tr>
                  <tr className="bg-white">
                    <td
                      colSpan="3"
                      className="border border-gray-300 px-4 py-2 text-white"
                    >
                      a
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h2 className="text-[#034A5A] font-bold">Autorefraction</h2>

            <div className="overflow-hidden rounded-lg border w-fit border-gray-300">
              <table className="table-auto border-collapse  w-fit rounded-lg ">
                <thead>
                  <tr className="bg-white">
                    <th className="border border-gray-300 px-4 py-2"></th>
                    <th className="border border-gray-300 px-4 py-2">SPH</th>
                    <th className="border border-gray-300 px-4 py-2">CYL</th>
                    <th className="border border-gray-300 px-4 py-2">AX</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-100">
                    <td className="border border-gray-300 px-4 py-2">OD</td>
                    <td className="border border-gray-300 px-4 py-2">+0.25</td>
                    <td className="border border-gray-300 px-4 py-2">-1.00</td>
                    <td className="border border-gray-300 px-4 py-2">85</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-2">OS</td>
                    <td className="border border-gray-300 px-4 py-2">+0.25</td>
                    <td className="border border-gray-300 px-4 py-2">-1.00</td>
                    <td className="border border-gray-300 px-4 py-2">85</td>
                  </tr>
                  <tr className="bg-white">
                    <td
                      colSpan="4"
                      className="border border-gray-300 px-4 py-2 text-white"
                    >
                      a
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="pl-8 mt-5 flex justify-between items-center">
          <div className="font-bold">
            <p>
              <span className="text-[#E75232]">RT</span> - RETINA FLAT
              <span className="text-[#3546E0]"> ODS</span>
            </p>
            <p className="font-semibold">retina superior OS mulai nampak</p>
          </div>

          <button onClick={handleModal}>
            <img src="/retina.png" alt="retina" className="h-[88px]" />
          </button>
          <dialog id="image_modal" className="modal">
            <div className="modal-box p-0">
              <div className="bg-[#034A5A] text-white px-4 py-2 font-semibold flex justify-between">
                <p>Eyepad - Retina | #002-022-20-45</p>
                <form method="dialog">
                  <button>X</button>
                </form>
              </div>
              <div className="p-2">
                <img src="/retina.png" alt="retina" />
              </div>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </div>
        <div className="pl-8 mt-5">
          <div className="font-bold">
            <p>
              <span className="text-[#E75232]">OBD</span> - All Anterior Normal
            </p>
          </div>
        </div>
      </div>
      <div className="w-[95%] mb-5">
        <div className="flex items-center gap-2">
          <h2 className="font-bold text-[16px]">Assesment</h2>
          <div className="w-full border-b-4 border-[#057088] mt-1"></div>
        </div>
        <div className="font-bold text-[16px] flex flex-col gap-2 pl-8 mt-2">
          <button onClick={handleDiagnosis}>
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
                Pasien bersedia untuk dilakukan tindakan setelah kembali dari
                medan perang
              </p>
            </div>
          </button>

          <div>
            <div className="flex items-center gap-2">
              <p>
                <span className="text-[#E75232]">Dx</span> - Pseudophakia
                [Z96.1] <span className="text-[#E75232]">ODS</span>
              </p>
              <p className="px-3 flex items-center text-white bg-[#4F0B78] rounded-[20px] text-[12px]">
                Primary
              </p>
            </div>
            <p className="font-semibold">
              Pasien bersedia untuk dilakukan tindakan setelah kembali dari
              medan perang
            </p>
          </div>
        </div>
      </div>
      <div className="w-[95%] mb-5">
        <div className="flex items-center gap-2">
          <h2 className="font-bold text-[16px]">Planning</h2>
          <div className="w-full border-b-4 border-[#057088] mt-1"></div>
        </div>
        <div className="font-bold text-[16px] flex flex-col gap-2 pl-8 mt-2">
          <div>
            <div className="flex items-center gap-2">
              <p>
                <span className="text-[#E75232]">Dx</span> - Return To Clinic 6
                Months
              </p>
            </div>
            <p className="font-semibold">
              Anjuran konsul kembali akan tetapi pasien tidak berkenan
            </p>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <p>
                <span className="text-[#E75232]">Dx</span> - Pseudophakia
                [Z96.1] <span className="text-[#E75232]">ODS</span>
              </p>
              <p className="px-3 flex items-center text-white bg-[#057088] rounded-[20px] text-[12px]">
                Dr. Referano Agustiawan, SpM(k)
              </p>
            </div>
            <p className="font-semibold">
              Pasien bersedia untuk dilakukan tindakan setelah kembali dari
              medan perang
            </p>
          </div>
          <button onClick={handleSurgery}>
            <div>
              <div className="flex items-center gap-2">
                <p>
                  <span className="text-[#E75232]">Sx</span> - Phaco IOL
                  Aspheric OD
                </p>
                <p className="px-3 flex items-center text-white bg-[#4F0B78] rounded-[20px] text-[12px]">
                  Monofocal Aspheric
                </p>
                <p className="px-3 flex items-center text-white bg-[#878210] rounded-[20px] text-[12px]">
                  ACRYSOF SN60WF
                </p>
                <img src="calender.svg" alt="calender" />
              </div>
              <p className="font-semibold">
                Pasien bersedia untuk dilakukan tindakan setelah kembali dari
                medan perang
              </p>
            </div>
          </button>
        </div>
        <div className="font-bold text-[16px] flex flex-col gap-2 pl-8 mt-6">
          <h2 className="text-[#034A5A]">Medication</h2>
          <div>
            <div className="flex items-center gap-2">
              <p>
                <span className="text-[#E75232]">
                  HYALUB MD STRIP EYE DROP(S)
                </span>
              </p>
            </div>
            <p className="font-semibold">
              Anjuran konsul kembali akan tetapi pasien tidak berkenan
            </p>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <p>
                <span className="text-[#E75232]">
                  HYALUB MD STRIP EYE DROP(S)
                </span>
              </p>
            </div>
            <p className="font-semibold">
              Anjuran konsul kembali akan tetapi pasien tidak berkenan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
