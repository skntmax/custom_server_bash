'use client'
import React, { createRef, useEffect, useRef } from 'react'
import { Terminal } from '@xterm/xterm';
import '@xterm/xterm/css/xterm.css';
import { useDispatch, useSelector } from 'react-redux';
import { useSocket } from './SocketProvider';
import { runCode, setOutput } from '@/lib/compiler';
function Output() {
    const socket = useSocket()
   const dispatch = useDispatch()
    let status = useSelector(e=> e.setLanguage)
     // Create a ref for the terminal DOM element
     const termRef = useRef(null);
     let terminal
    
      useEffect(() => {
         // Create a new terminal instance
         
          terminal = new Terminal({
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

         socket.on('terminal:result',(res)=>{   
          dispatch(setOutput({
            output:res
           }))
          })

         if( status.run ) {
          terminal.write(status?.output);
          dispatch(runCode({
              run:false
          }))
        }
         
           
          
         // Return a cleanup function to dispose of the terminal when the component unmounts
         
       

     }, [status.run]);


   return (
            <div ref={termRef}  />
  )
}

export default Output
