const HeaderExamSetup = () => {
  return (
    <header className="flex justify-between items-center px-6 py-3">
      <div className="flex gap-4 items-center">
        <img src="/Notification.png" alt="Notification" width={36} />
        <img src="/Messages.png" alt="Messages" width={36} />
        <div className="flex gap-2 bg-white rounded-[8px] border  py-1 px-2 shadow-sm">
          <img src="/magnificent.svg" alt="magnificent" />
          <input
            type="text"
            className="outline-none"
            placeholder="Search page..."
          />
          <div className="bg-[#034A5A] text-white rounded-[6px] py-1 px-2 text-[12px]">
            ctrlK
          </div>
        </div>
      </div>
      <div className="flex items-center gap-8">
        <div className="shadow-md h-fit rounded-sm p-2">
          <img src="/bexpand.svg" width={22} alt="expand" />
        </div>
        <div className="shadow-md h-fit rounded-sm p-2">
          <img src="/bmoon.svg" width={22} alt="moon" />
        </div>
        <div className="flex flex-col justify-center py-1">
          <p className="text-[#495057] text-center font-semibold">
            your ip address is:
          </p>
          <p className="text-[#034A5A] text-center  bg-[#1A99B419] px-2 rounded-md ">
            172.16.101.105
          </p>
        </div>
        <img src="/avatar.png" alt="avatar" className="h-full" />
      </div>
    </header>
  );
};

export default HeaderExamSetup;
