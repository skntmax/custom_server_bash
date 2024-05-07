import Compiler from "@/components/Compiler";
const Output   = dynamic(()=> import("@/components/Output") , {ssr:false}) ;
import { useSocket } from "@/components/SocketProvider";
import dynamic from "next/dynamic";

export default function Home() {
   
  return (
   <>
   <div className='col-6 border'>
           <Compiler />
       </div>

       <div className='col-6'>
                <Output />
         </div> 
   </>
  );
}
