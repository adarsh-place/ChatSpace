import { useEffect } from "react";
import Search from "../../components/chat-left/Search";
import Users from "../../components/chat-left/Users";
import useConversation from "../../statemanage/useConversation";

export default function Chats() {
  const { setSelectedConversation } = useConversation();
  useEffect(() => {
    return setSelectedConversation(null);
  }, [setSelectedConversation]);
  
  return (
    <>
      <h1 className="text-center font-bold text-3xl p-2 px-11 mt-3 ">Chats</h1>
      <Search />
      <div
        className=" flex-1  overflow-y-auto"
        style={{ minHeight: "calc(84vh - 10vh)" }}
      >
        <Users />
      </div>
    </>
  );
}
