import { useEffect } from "react";

import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";

import notificationSound from "../assets/sounds/notification.mp3";
import { useAuthContext } from "../context/AuthContext";

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages, selectedConversation } = useConversation();

  const { authUser } = useAuthContext();
  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      newMessage.shouldShake = true;
      const sound = new Audio(notificationSound);
      sound.play();
      
      // set message only if the sender is the same as the selected conversation
      // console.log(newMessage.senderId, authUser._id, selectedConversation._id);
      if (newMessage.senderId === selectedConversation._id) {
        console.log("newMessage", newMessage);
        setMessages([...messages, newMessage]);
      }
    });

    // socket.off() is used to remove the event listener. It is used to stop listening to the events.
    return () => socket?.off("newMessage");
  }, [socket, setMessages, messages, selectedConversation, authUser._id]);
};
export default useListenMessages;
