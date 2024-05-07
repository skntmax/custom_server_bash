'use client'
import React, { useCallback, useEffect } from 'react'
import Navbar from './navbar'
import { SocketProvider, useSocket } from './SocketProvider'
import { useDispatch, useSelector } from 'react-redux'
import { runCode, setCode, setLanguage, setOutput } from '@/lib/compiler'


function HomePage({children}) {

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
