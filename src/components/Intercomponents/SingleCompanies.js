'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const SingleCompanies = (props) => {
   

     return (
          <motion.div
               style={props.style}
               className=" font-poppins absolute top-[50%] -translate-y-[50%] w-full h-[70vh]  flex flex-col justify-between items-end gap-10px"
          >
               <div className="lg:w-[60%] w-[70%] h-[87%]  relative">
                    <div className=" w-full h-full relative rounded-[15px] overflow-hidden">
                         <Image src={props.image} fill objectFit="cover" />
                    </div>

                    <div className="   absolute top-[50%] -translate-y-[50%] -translate-x-[100%] flex flex-col justify-center items-center text-black ">
                         <div className=" lg:leading-[5rem] leading-[4rem] gap-[12px]">
                              <h1 className=" lg:text-[72px] md:text-[60px] font-syne font-extrabold ">
                                  {props.time}
                              </h1>
                              <p className=" lg:text-[20px] md:text-[16px] font-thin w-[60vh] lg:leading-[25px] md:leading-[20px] ">
                                   {props.detail}
                              </p>
                         </div>
                    </div>
               </div>
               <div className="w-[100%] h-[8%] text-[48px] font-extrabold text-center  text-black">
                    {props.time}
               </div>
          </motion.div>
     );
};

export default SingleCompanies;
