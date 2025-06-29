import React, { useEffect } from "react";
import Chatuser from "../../components/chat-right/Chatuser.jsx";
import Messages from "../../components/chat-right/Messages.jsx";
import Typesend from "../../components/chat-right/Typesend.jsx";
import useConversation from "../../statemanage/useConversation.js";
import { useAuth } from "../../context/AuthProvider.jsx";
import { CiMenuFries } from "react-icons/ci";

export default function Chat() {
  const { selectedConversation } = useConversation();

  return (
    <div className="w-full bg-slate-950 text-gray-300">
      <div>{!selectedConversation ? <NoChatSelected /> : <ChatSelected />}</div>
    </div>
  );
}

const NoChatSelected = () => {
  const [authUser] = useAuth();
  return (
    <>
      <div className="relative">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-ghost drawer-button lg:hidden absolute left-5"
        >
          <CiMenuFries className="text-white text-xl" />
        </label>
        <div className="flex h-screen items-center justify-center">
          <h1 className="text-center">
            <div className="text-2xl">
              Welcome{" "}
              <span className="font-semibold text-3xl">
                {authUser.fullname}
              </span>
            </div>
            <div className="mt-[5px]">
              Please start conversation by selecting anyone from your contacts
            </div>
          </h1>
        </div>
      </div>
    </>
  );
};

const ChatSelected = () => {
  return (
    <>
      <Chatuser />
      <div
        className=" flex-1 overflow-y-auto"
        style={{ maxHeight: "calc(88vh - 8vh)" }}
      >
        <Messages />
      </div>
      <Typesend />
    </>
  );
};
