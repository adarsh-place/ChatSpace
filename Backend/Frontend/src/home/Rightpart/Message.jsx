import React from "react";
import { LuClock3 } from "react-icons/lu";
import { BsCheckAll } from "react-icons/bs";
import useSendMessage from "../../context/useSendMessage.js";

function Message({ message }) {
  const authUser = JSON.parse(localStorage.getItem("ChatApp"));
  const itsMe = message.senderId === authUser.user._id;

  const { loading } = useSendMessage();

  const chatName = itsMe ? " chat-end" : "chat-start";
  const chatColor = itsMe ? "bg-blue-800" : "";

  const createdAt = new Date(message.createdAt);
  const formattedTime = createdAt.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <div>
      <div className="px-4 py-1">
        <div className={`chat ${chatName}`}>
          <div
            className={`chat-bubble text-white ${chatColor} max-w-[75%] break-words`}
          >
            {message.message}
          </div>
          <div className=" text-[12px] chat-footer flex gap-[4px]">
            <div>{formattedTime}</div>
            {itsMe &&
              (loading ? (
                <LuClock3 className="self-center" />
              ) : (
                <BsCheckAll className="text-xl self-center" />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
