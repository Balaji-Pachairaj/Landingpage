"use client";
import Image from "next/image";
import React from "react";

const Single = (props) => {
     const src =
          "https://tse2.mm.bing.net/th?id=OIP.iAhcp6m_91O-ClK79h8EQQHaFj&pid=Api&P=0&h=180";

     return (
          <div className=" w-full h-min  flex flex-col justify-between items-end gap-[16px]">
               <div className="lg:w-[60%] w-[70%] h-[350px]  relative">
                    <div className=" w-full h-full relative">
                         <Image
                              loader={() => src}
                              src={src}
                              fill
                              objectFit="cover"
                         />
                    </div>

                    <div className="   absolute top-[50%] -translate-y-[50%] overflow-hidden  sm:-translate-x-[40%] -translate-x-[20%] text-black flex flex-col justify-center items-center ">
                         <div className=" lg:leading-[5rem] leading-[35px]">
                              <h1 className=" lg:text-[72px] md:text-[60px] text-[7vw] font-syne font-extrabold ">
                                   Madison Riley
                              </h1>
                              <p className=" lg:text-[20px] md:text-[16px] text-[14px] font-thin w-[60vw] lg:leading-[25px] md:leading-[20px] leading-[18px]">
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
          </div>
     );
};

const ReviewSmallerScreen = () => {
     return (
          <div className="w-full min-h-screen flex flex-col gap-[8rem]   lg:hidden bg-white ">
               <Single />
               <Single />
               <Single />
               <Single />
               <Single />
               <Single />
               <Single />
          </div>
     );
};

export default ReviewSmallerScreen;
