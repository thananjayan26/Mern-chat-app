import React, { useEffect } from 'react'
import { useSocketContext} from "../context/SocketContext.jsx"
import useConversation from "../zustand/useConversation.js"
import notificationSound from "../assets/sounds/notification.mp3"

const useListenMessages = () => {
    const { socket } = useSocketContext();
    const { messages, setMessages } = useConversation();

    useEffect(() => { 
        socket?.on("newMessage", (newMessage) => {
            newMessage.shouldShake = true
            const sound = new Audio(notificationSound);
            sound.play();
            setMessages([...messages,newMessage])
        })
// stops more than once
        return () => socket?.off("newMessages")
    }, [socket, setMessages, messages])
}

export default useListenMessages