import SelectMultiple from "../components/SelectMultiple";

const ExamToRoomPage = () => {
  const handleModal = () => {
    document.getElementById("create_modal").showModal();
  };

  return (
    <div className="pl-4 pr-8 py-4">
      <h1 className="font-bold text-[24px]">Examination Setup</h1>
      <div className="flex gap-3">
        <p>Administration Panel</p>
        <span className="text-[#666666]">•</span>
        <p className="text-[#666666]">Examination Setup</p>
        <span className="text-[#666666]">•</span>
        <p className="text-[#666666]">List</p>
      </div>
      <div className="flex gap-3 my-10">
        <div className="flex flex-col items-center">
          <p>Exam to Room</p>
          <div className="w-[80%] border-b-4 border-[#057088]"></div>
        </div>
        <p>Form Library</p>
        <p>Form Verification</p>
      </div>
      <div className="flex justify-between">
        <div>
          <button
            onClick={handleModal}
            className="bg-[#1E9AB3] rounded-[16px] w-fit py-2 px-4 text-white flex items-center gap-2"
          >
            <div className="bg-[#FFFFFF26]">
              <img src="circle.svg" alt="circle" />
            </div>
            <p>Add New</p>
          </button>
          <dialog id="create_modal" className="modal font-semibold">
            <div className="modal-box p-0 w-11/12 max-w-5xl">
              <div className="bg-[#034A5A] text-white px-4 py-2 font-semibold flex justify-between">
                <p>Outpatient Exam Setup</p>
                <form method="dialog">
                  <button>X</button>
                </form>
              </div>
              <div className="p-4 flex flex-col gap-4">
                <div>
                  <p>Exam Category</p>
                  <select
                    name="categoru"
                    id=""
                    className="w-1/3 p-2 rounded-lg border-2"
                  >
                    <option value="Cataract">Cataract</option>
                    <option value="Retina">Retina</option>
                    <option value="Glaukoma">Glaukoma</option>
                    <option value="Lasik">Lasik</option>
                  </select>
                </div>
                <div>
                  <p>
                    Description <span className="text-red-500">*</span>
                  </p>
                  <input
                    type="text"
                    className="w-full p-2 rounded-lg border-2"
                  />
                </div>
                <div>
                  <p>Room Name</p>
                  <SelectMultiple />
                </div>
              </div>
              <div className="border-2 border-[#1E9AB3] m-4 rounded-[12px] p-4">
                <div className="flex justify-between">
                  <h1>Examination List</h1>
                  <button className="bg-[#1E9AB3] rounded-[16px] w-fit py-2 px-4 text-white flex items-center gap-2">
                    <div className="bg-[#FFFFFF26]">
                      <img src="circle.svg" alt="circle" />
                    </div>
                    <p>Add Forms</p>
                  </button>
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <div className="flex gap-2 ">
                    <div className="p-2 px-4 rounded-lg border-2 flex items-center justify-center">
                      <img src="hamburger.svg" alt="hamburger" />
                    </div>
                    <p className="flex-1  p-2 rounded-lg border-2">
                      PROCEDURES SAFETY CHECKLIST
                    </p>
                    <p className="p-2 rounded-lg border-2 px-4 text-red-500">
                      X
                    </p>
                  </div>
                  <div className="flex gap-2 ">
                    <div className="p-2 px-4 rounded-lg border-2 flex items-center justify-center">
                      <img src="hamburger.svg" alt="hamburger" />
                    </div>
                    <p className="flex-1  p-2 rounded-lg border-2">
                      PROCEDURES SAFETY CHECKLIST
                    </p>
                    <p className="p-2 rounded-lg border-2 px-4 text-red-500">
                      X
                    </p>
                  </div>
                  <div className="flex gap-2 ">
                    <div className="p-2 px-4 rounded-lg border-2 flex items-center justify-center">
                      <img src="hamburger.svg" alt="hamburger" />
                    </div>
                    <p className="flex-1  p-2 rounded-lg border-2">
                      PROCEDURES SAFETY CHECKLIST
                    </p>
                    <p className="p-2 rounded-lg border-2 px-4 text-red-500">
                      X
                    </p>
                  </div>
                </div>
              </div>
              <form method="dialog">
                <div className="p-4 flex border-t-2">
                  <div className="flex gap-3 justify-end w-full text-white">
                    <button className="bg-[#F06548] rounded-lg px-4 py-2">
                      Close
                    </button>
                    <button className="bg-[#1F9AB2] rounded-lg px-4 py-2">
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </div>

        <div className="flex gap-2 bg-white rounded-[8px] border  py-1 px-2 shadow-sm">
          <input
            type="text"
            className="outline-none flex-1"
            placeholder="Search.."
          />
        </div>
      </div>
      <div className="overflow-hidden rounded-lg border w-full border-gray-300 mt-10">
        <table className="table-auto border-collapse w-full rounded-lg ">
          <thead>
            <tr className="bg-[#1E9AB3] text-white ">
              <th className="border border-gray-300 px-4 py-2 "></th>
              <th className="border border-gray-300 px-4 py-2">
                Exam Category
              </th>
              <th className="border border-gray-300 px-4 py-2">
                Operational Room
              </th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
              <th className="border border-gray-300 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-100">
              <td className="border border-gray-300 px-4 py-2 ">
                <img src="right.svg" alt="right" className="m-auto" />
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <div>
                  <p>CATARACT</p>
                  <p className="text-[10px]">
                    Filter untuk kategori tindakan yang berkaitan dengan operasi
                    katarak
                  </p>
                </div>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <div className="flex gap-2 items-center">
                  <p className="text-[#215A65] bg-[#6AD7ED] px-2 rounded-[10px] font-semibold">
                    Operating Theatre 1
                  </p>
                  <p className="text-[#215A65] bg-[#E0F97C] px-2 rounded-[10px] font-semibold">
                    Operating Theatre 2
                  </p>
                </div>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <p className="border border-[#1E9AB3] px-2 rounded-[8px] w-fit bg-[#69EACB] font-semibold">
                  Active
                </p>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <p className="bg-[#878A991A] p-2 px-4 rounded-md flex items-center justify-center w-fit">
                  <span className="">...</span>
                </p>
              </td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-300 px-4 py-2 ">
                <img src="right.svg" alt="right" className="m-auto" />
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <div>
                  <p>CATARACT</p>
                  <p className="text-[10px]">
                    Filter untuk kategori tindakan yang berkaitan dengan operasi
                    katarak
                  </p>
                </div>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <div className="flex gap-2 items-center">
                  <p className="text-[#215A65] bg-[#E0F97C] px-2 rounded-[10px] font-semibold">
                    Operating Theatre 2
                  </p>
                  <p className="text-[#215A65] bg-[#F092FF] px-2 rounded-[10px] font-semibold">
                    Operating Theatre 3
                  </p>
                </div>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <p className="border border-[#1E9AB3] px-2 rounded-[8px] w-fit bg-[#69EACB] font-semibold">
                  Active
                </p>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <p className="bg-[#878A991A] p-2 px-4 rounded-md flex items-center justify-center w-fit">
                  <span className="">...</span>
                </p>
              </td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-300 px-4 py-2 ">
                <img src="right.svg" alt="right" className="m-auto" />
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <div>
                  <p>CATARACT</p>
                  <p className="text-[10px]">
                    Filter untuk kategori tindakan yang berkaitan dengan operasi
                    katarak
                  </p>
                </div>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <div className="flex gap-2 items-center">
                  <p className="text-[#215A65] bg-[#6AD7ED] px-2 rounded-[10px] font-semibold">
                    Operating Theatre 1
                  </p>
                  <p className="text-[#215A65] bg-[#FF9D73] px-2 rounded-[10px] font-semibold">
                    Operating Theatre 4
                  </p>
                </div>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <p className="border border-[#1E9AB3] px-2 rounded-[8px] w-fit bg-[#69EACB] font-semibold">
                  Active
                </p>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <p className="bg-[#878A991A] p-2 px-4 rounded-md flex items-center justify-center w-fit">
                  <span className="">...</span>
                </p>
              </td>
            </tr>
            <tr className="bg-white">
              <td colSpan="5" className="border border-gray-300 text-white">
                <img src="/footer.png" alt="footer" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExamToRoomPage;
