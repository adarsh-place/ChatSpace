import React, { useState } from "react";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { IoIosSettings } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import useOptions from "../../statemanage/useOptions.js";
import useConversation from "../../statemanage/useConversation.js";

function Navbar() {
  const { selectedOption, setSelectedOption } = useOptions();
  const { setSelectedConversation } = useConversation();

  return (
    <>
      <div className="w-[7%] py-2 bg-slate-950 text-white  flex flex-col justify-between items-center ">
        <div className="p-1">
          <button title="Chats">
            <BiMessageRoundedDetail
              className={` ${
                selectedOption == "chats" ? "bg-gray-800" : ""
              } text-[45px] p-2 hover:bg-gray-800 rounded-lg duration-300`}
              onClick={() => {
                setSelectedOption("chats");
              }}
            />
          </button>
        </div>
        <div className="p-1 flex flex-col items-center">
          <button title="Settings" className="mt-2">
            <IoIosSettings
              className={` ${
                selectedOption == "settings" ? "bg-gray-800" : ""
              } text-[45px] p-2 hover:bg-gray-800 rounded-lg duration-300`}
              onClick={() => {
                setSelectedOption("settings");
                setSelectedConversation(null);
              }}
            />
          </button>
          <button title="Me" className="mt-2">
            <IoPerson
              className={` ${
                selectedOption == "my-profile" ? "bg-gray-800" : ""
              } text-[45px] p-2 hover:bg-gray-800 rounded-lg duration-300`}
              onClick={() => {
                setSelectedOption("my-profile");
                setSelectedConversation(null);
              }}
            />
          </button>
        </div>
      </div>
    </>
  );
}
export default Navbar;
