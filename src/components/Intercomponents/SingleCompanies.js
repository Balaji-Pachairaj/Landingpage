"useclient";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const SingleCompanies = (props) => {
     const src =
          "https://tse2.mm.bing.net/th?id=OIP.iAhcp6m_91O-ClK79h8EQQHaFj&pid=Api&P=0&h=180";

     return (
          <motion.div
               style={props.style}
               className=" absolute top-[50%] -translate-y-[50%] w-full h-[70vh]  flex flex-col justify-between items-end gap-10px"
          >
               <div className="lg:w-[60%] w-[70%] h-[87%]  relative">
                    <div className=" w-full h-full relative">
                         <Image
                              loader={() => src}
                              src={src}
                              fill
                              objectFit="cover"
                         />
                    </div>

                    <div className="   absolute top-[50%] -translate-y-[50%] -translate-x-[50%] flex flex-col justify-center items-center text-black ">
                         <div className=" lg:leading-[5rem] leading-[4rem] gap-[12px]">
                              <h1 className=" lg:text-[72px] md:text-[60px] font-syne font-extrabold ">
                                   Madison Riley
                              </h1>
                              <p className=" lg:text-[20px] md:text-[16px] font-thin w-[60vh] lg:leading-[25px] md:leading-[20px] ">
                                   Lorem ipsum dolor sit amet, consectetur
                                   adipiscing elit, sed do eiusmod tempor
                                   incididunt ut labore et dolore magna aliqua.
                                   Ut enim ad minim veniam, quis nostrud
                                   exercitation ullamco laboris nisi ut aliquip
                                   ex ea commodo consequat. Duis aute irure
                                   dolor in reprehenderit in voluptate velit
                                   esse cillum dolore eu fugiat nulla pariatur.
                              </p>
                         </div>
                    </div>
               </div>
               <div className="w-[100%] h-[8%] text-[48px] font-bold text-center text-black">
                    2017
               </div>
          </motion.div>
     );
};

export default SingleCompanies;
