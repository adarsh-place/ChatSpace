import React, { useState } from "react";
import Search from "./Search";
import Users from "./Users";
import useOptions from "../../statemanage/useOptions.js";
import profileImg from "../../assets/profile1.jpg";
import { useAuth } from "../../context/AuthProvider.jsx";
import { TbLogout } from "react-icons/tb";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

function Left() {
  const [authUser] = useAuth();
  const { selectedOption } = useOptions();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      const res = await axios.post("/api/user/logout");
      localStorage.removeItem("ChatApp");
      Cookies.remove("jwt");
      setLoading(false);
      toast.success("Logged out successfully");
      window.location.reload();
    } catch (error) {
      console.log("Error in Logout", error);
      toast.error("Error in logging out");
    }
  };

  return (
    <div className="w-[35%] bg-slate-900 text-gray-300 ">
      {selectedOption === 1 && (
        <>
          <h1 className="text-center font-bold text-3xl p-2 px-11 mt-3 ">
            Chats
          </h1>
          <Search />
          <div
            className=" flex-1  overflow-y-auto"
            style={{ minHeight: "calc(84vh - 10vh)" }}
          >
            <Users />
          </div>
        </>
      )}
      {selectedOption === 2 && (
        <>
          <h1 className="text-center font-bold text-3xl p-2 pb-5 px-11 mt-3 border-b-[0.5px] border-b-slate-500">
            Settings
          </h1>
          <button
            className="p-2 py-5 w-[100%] hover:bg-gray-800 duration-300 text-red-500 flex flex-row"
            onClick={handleLogout}
          >
            <div className="w-[20%] flex justify-end text-right">
              <TbLogout className="text-[25px]  h-[30px]" />
            </div>
            <div className="w-[80%] text-left text-[20px] pl-7">Log Out</div>
          </button>
        </>
      )}
      {selectedOption === 3 && (
        <>
          <h1 className="text-center font-bold text-3xl p-2 px-11 mt-3 ">
            Profile
          </h1>
          <div className="mt-12 justify-self-center flex-1 overflow-y-auto">
            <img className="w-[180px] rounded-full" src={profileImg} />
          </div>
          <div className="mt-10 px-5 text-sm">Your Name</div>
          <div className="mt-2 px-6 text-xl">
            {authUser.user.fullname}
          </div>
          <div className="mt-7 px-5 text-sm">Your Email</div>
          <div className="mt-2 px-6 text-xl">
            {authUser.user.email}
          </div>
        </>
      )}
    </div>
  );
}

export default Left;
