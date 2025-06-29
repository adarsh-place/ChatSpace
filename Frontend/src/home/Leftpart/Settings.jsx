import React, { useEffect, useState } from "react";
import { TbLogout } from "react-icons/tb";
import { MdManageAccounts } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import Logout from "../../components/Logout";
import useSettings from "../../statemanage/useSettings";

export default function Settings() {
  const { setSelectedSetting } = useSettings();

  useEffect(() => {
    return setSelectedSetting("none");
  }, [setSelectedSetting]);

  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <h1 className="text-center font-bold text-3xl p-2 pb-5 px-11 mt-3 border-b-[0.5px] border-b-slate-500">
        Settings
      </h1>
      
      <button
        className="p-2 py-5 w-[100%] hover:bg-gray-800 duration-300 flex flex-row"
        onClick={() => setSelectedSetting("update-profile")}
      >
        <div className="w-[20%] flex justify-end text-right">
          <MdManageAccounts className="text-[25px]  h-[30px]" />
        </div>
        <div className="w-[80%] text-left text-[20px] pl-7">Update Profile</div>
      </button>

      <button
        className="p-2 py-5 w-[100%] hover:bg-gray-800 duration-300 flex flex-row"
        onClick={() => setSelectedSetting("change-password")}
      >
        <div className="w-[20%] flex justify-end text-right">
          <RiLockPasswordLine className="text-[25px]  h-[30px]" />
        </div>
        <div className="w-[80%] text-left text-[20px] pl-7">Change Password</div>
      </button>
      
      <button
        className="p-2 py-5 w-[100%] hover:bg-gray-800 duration-300 text-red-500 flex flex-row"
        onClick={() => setShowPopup(true)}
      >
        <div className="w-[20%] flex justify-end text-right">
          <TbLogout className="text-[25px]  h-[30px]" />
        </div>
        <div className="w-[80%] text-left text-[20px] pl-7">Log Out</div>
      </button>

      <Logout showPopup={showPopup} setShowPopup={setShowPopup}/>
    </>
  );
}
