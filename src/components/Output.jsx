'use client'
import React, { createRef, useEffect, useRef } from 'react'
import { Terminal } from '@xterm/xterm';
import 'xterm/css/xterm.css';
import { useSelector } from 'react-redux';
import { useSocket } from './SocketProvider';
function Output() {
    const socket = useSocket()
     // Create a ref for the terminal DOM element
     const termRef = useRef(null);
     
      useEffect(() => {
         // Create a new terminal instance
         const terminal = new Terminal({
           height:"100vh",
          cursorStyle: 'block', // 'block', 'underline', 'bar'
          cursorBlink: true, // Cursor should blink
          fontFamily: 'Courier New, monospace',
          fontSize: 14, // Font size in pixels
          theme: {
              background: '#1d1f21', // Background color
              foreground: '#c5c8c6', // Text color
              cursor: '#c5c8c6', // Cursor color
              selection: '#373b41', // Selection color
          }
      });
 
         // Open the terminal in the DOM element referenced by termRef
         if (termRef.current) {
             terminal.open(termRef.current);
         }

          socket.on('terminal:result' ,data=>{
            terminal.write(data)
          })
          
            terminal.onData(data=>{
                  socket.emit("bash:write", data )
            })
          
         // Return a cleanup function to dispose of the terminal when the component unmounts
         
          return () => {
             terminal.dispose();
         };


     }, []);

   return (
            <div ref={termRef} style={{
               height: "100%",
              width: "100%",
              overflow: "hidden"
            }}        />
  )
}

export default Output
