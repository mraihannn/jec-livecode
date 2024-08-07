const HeaderEMR = () => {
  return (
    <header className="bg-[#1B343A] flex justify-between px-6">
      <div className="flex gap-20 items-center">
        <img src="/logo.png" alt="logo" className="py-3 h-[50px]" />
        <div className="flex gap-4 items-center">
          <img src="/Notification.svg" alt="Notification" width={36} />
          <img src="/Messages.svg" alt="Messages" width={36} />
          <div className="flex gap-2 bg-white rounded-[8px] py-1 px-2">
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
      </div>
      <div className="flex gap-8">
        <img src="/expand.svg" width={22} alt="expand" />
        <img src="/moon.svg" width={22} alt="moon" />
        <div className="flex flex-col justify-center py-1">
          <p className="text-[#D78E38] text-nowrap">your ip address is:</p>
          <p className="text-[#D78E38] ">172.16.101.105</p>
        </div>
        <img src="/avatar.png" alt="avatar" className="h-full" />
      </div>
    </header>
  );
};

export default HeaderEMR;
