'use client'
import React, { createContext, useContext, useEffect, useState } from 'react';
import io from 'socket.io-client';

// Create context
const SocketContext = createContext();

// Create a context provider component
export const SocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [socketLoaded, setLoader] = useState(false);

    useEffect(() => {
         if(socketLoaded) return
         // Initialize the socket connection when component mounts

        const newSocket = io('http://localhost:2000'); // Replace URL with your server URL
        setSocket(newSocket);
        setLoader(true)
        // Clean up the socket connection when component unmounts
        return () => {
            newSocket.close();
        };
         
    }, []);

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    );
};

// Create a custom hook to use the socket
export const useSocket = () => {
    return useContext(SocketContext);
};