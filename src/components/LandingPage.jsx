import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
return (
    <div data-scroll data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
        <div className="textstructure mt-52 px-20 ">
            {["we create","eye opening","presentations"].map((item,index)=>{
                return (
                <div className='masker'>
                    <div className='w-fit flex items-center'>
                        {index===1 ? (<motion.div 
                        initial={{width:0}} 
                        animate={{width:"9vw"}} 
                        transition={{ease:[0.76,0,0.24,1],duration:1}} 
                        className='mr-5 w-[8vw] h-[5vw] rounded-md bg-green-500 relative top-[0.5vw]'></motion.div>):"" }
                <h1 className="uppercase text-[7.5vw] leading-[6.5vw] tracking-tighter font-FoundersGrotesk font-bold ">{item}</h1>
            </div>
            </div>
            )})}
        </div>
        <div className="border-t-2 border-zinc-700 mt-20 flex justify-between items-center py-5 px-20">
            {[
                "For public and private companies",
                "From the first pitcht to IPO",].map((item,index)=>
                    <p className='text-md font-light tracking-tight leading-none'>{item}</p>
                
            )}
            <div className='start flex item-center gap-5'>
                <div className="px-5 py-2 border-[1px] border-zinc-400 font-light text-md uppercase rounded-full">Start the project </div>
                <div className="w-10 h-10 flex items-center justify-center border-[2px] border-zinc-500 rounded-full">
                    <span className='rotate-[45deg]'>
                    <FaArrowUpLong/>
                    </span>
                </div>
            </div>
        </div>
    </div>
)
}

export default LandingPage