import React from "react";
import useConversation from "../../statemanage/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";
import ProfileImage from "../ProfileImage.jsx";

function Chatuser() {
  const { selectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();
  const getOnlineUsersStatus = onlineUsers.includes(selectedConversation._id)
    ? "Online"
    : "Offline";

  return (
    <div className="pl-5 pt-5 h-[12vh] flex space-x-4 bg-gray-800 hover:bg-gray-700 duration-300">
      <ProfileImage width="14" imgLink={selectedConversation.profilePic} />
      <div>
        <h1 className="text-xl">{selectedConversation.fullname}</h1>
        <span className="text-sm">{getOnlineUsersStatus}</span>
      </div>
    </div>
  );
}

export default Chatuser;
