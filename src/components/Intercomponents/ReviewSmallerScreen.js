'use client'
import { timeline } from "@/asset/companies";
import Image from "next/image";
import React from "react";

const Single = (props) => {
     const src =
          "https://tse2.mm.bing.net/th?id=OIP.iAhcp6m_91O-ClK79h8EQQHaFj&pid=Api&P=0&h=180";

     return (
          <div className=" w-full h-min  flex flex-col justify-between items-end gap-[16px]">
               <div className="lg:w-[60%] w-[70%] h-[350px]  relative">
                    <div className=" w-full h-full relative">
                         <Image src={props.image} fill objectFit="cover" />
                    </div>

                    <div className="   absolute top-[50%] -translate-y-[50%] overflow-hidden  sm:-translate-x-[40%] -translate-x-[20%] text-black flex flex-col justify-center items-center ">
                         <div className=" lg:leading-[5rem] leading-[35px]">
                              <h1 className=" lg:text-[72px] md:text-[60px] text-[7vw] font-syne font-extrabold ">
                                   Madison Riley
                              </h1>
                              <p className=" lg:text-[20px] md:text-[16px] text-[14px] font-thin w-[60vw] lg:leading-[25px] md:leading-[20px] leading-[18px]">
                                   {props.detail}
                              </p>
                         </div>
                    </div>
               </div>
               <div className="w-[100%] h-[8%] text-[48px] font-bold text-center text-black">
                    {props.time}
               </div>
          </div>
     );
};

const ReviewSmallerScreen = () => {
     return (
          <div className="w-full min-h-screen flex flex-col gap-[8rem]   lg:hidden bg-white ">
               <Single
                    image={timeline[0].image}
                    detail={timeline[0].detail}
                    time={timeline[0].time}
               />
               <Single
                    image={timeline[1].image}
                    detail={timeline[1].detail}
                    time={timeline[1].time}
               />
               <Single
                    image={timeline[2].image}
                    detail={timeline[2].detail}
                    time={timeline[2].time}
               />
               <Single
                    image={timeline[3].image}
                    detail={timeline[3].detail}
                    time={timeline[3].time}
               />
               <Single
                    image={timeline[4].image}
                    detail={timeline[4].detail}
                    time={timeline[4].time}
               />
               <Single
                    image={timeline[5].image}
                    detail={timeline[5].detail}
                    time={timeline[5].time}
               />
               <Single
                    image={timeline[6].image}
                    detail={timeline[6].detail}
                    time={timeline[6].time}
               />
               <Single
                    image={timeline[7].image}
                    detail={timeline[7].detail}
                    time={timeline[7].time}
               />
          </div>
     );
};

export default ReviewSmallerScreen;
