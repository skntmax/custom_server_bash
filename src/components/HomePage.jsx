'use client'
import React, { useCallback, useEffect } from 'react'
import Navbar from './navbar'
import { SocketProvider, useSocket } from './SocketProvider'
import { useDispatch, useSelector } from 'react-redux'
import { runCode, setCode, setLanguage, setOutput } from '@/lib/compiler'


function HomePage({children}) {
   
  let dispatch = useDispatch()
  const socket = useSocket()
  const status = useSelector(ele=> ele.setLanguage)
  //  useEffect(()=>{
     
  //    socket.on('terminal:result',(res)=>{
  //     console.log("res>>>",res)
  //      dispatch(setOutput({
  //       output:res
  //      }))
        
  //   })
     
  //  },[])


  return (
    <>
     <div className='container border'>
     <Navbar />
      <div className='row'>
       <div className='col-12 ' >
          
          
        </div>
      
         {children}
      
      </div>      
     </div>
    </>
  )
}

export default HomePage
