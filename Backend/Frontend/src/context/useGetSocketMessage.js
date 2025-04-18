import React, { useEffect } from "react";
import { useSocketContext } from "./SocketContext";
import useConversation from "../statemanage/useConversation.js";
import sound from "../assets/notification.mp3";

const useGetSocketMessage = () => {
  const { socket } = useSocketContext();
  const { messages, setMessage } = useConversation();

  const {selectedConversation} = useConversation();
  console.log("a new message file : ",selectedConversation);

  useEffect(() => {
    socket.on("newMessage", (newMessage) => {
      console.log("aaaa",newMessage);
      if(newMessage.senderId === selectedConversation._id){
        const notification = new Audio(sound);
        notification.play();
        setMessage([...messages, newMessage]);
      }
    });
    return () => {
      socket.off("newMessage");
    };
  }, [socket, messages, setMessage]);
};
export default useGetSocketMessage;
