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
   useEffect(()=>{
     
     socket.on('terminal:result',(res)=>{
      console.log("res>>>",res)
       dispatch(setOutput({
        output:res
       }))
        
    })
     
   },[])


  //  const compileCode = useCallback(()=>{
   
  //  },[])



  return (
    <>
     <div className='container border'>
     <Navbar />
      <div className='row'>
       <div className='col-12 ' >
             <select name="language" onChange={e=>{
                 const {name , value} = e.target
                dispatch(setLanguage({
                language:value
                }))
                 
             }} 
             className='w-50' defaultValue={"choose language"}>
                 {["javascript",'python'].map(ele=>(
                      <option value={ele}>
                         {ele}  
                     </option>
                 ))} 
            </select> 
            
            <button className='btn btn-primary mx-3' style={{height:"25px" , fontSize:"10px"    }}  onClick={()=>{
               
               dispatch(runCode({
                run:true
               })) 
                
                socket.emit('terminal:write', { code:status?.code , type_of_file:status?.language , file_name:"sample"  } )
                
            }}> Run </button>
          
        </div>
      
         {children}
      
      </div>      
     </div>
    </>
  )
}

export default HomePage
