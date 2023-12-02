import React, { useState } from "react";
import Meetone from "./Meetone";
import Image from "next/image";
import { teammember } from "@/asset/companies";

const MeetTwo = ({ content }) => {
     const [hover, setHover] = useState(false);

     const onhover = () => {
          setHover(true);
     };
     const offhover = () => {
          setHover(false);
     };

     return (
          <div
               onMouseEnter={onhover}
               onMouseLeave={offhover}
               className=" cursor-pointer lg:w-[20vw] md:w-[40%] w-[80%] md:h-[60vw] h-[100vw] flex flex-col justify-end  relative z-[50] bg-transparent" 
          >
               <Image
                    src={content.image}
                    fill
                    objectFit="cover"
                    objectPosition="top"
               />
               <div
                    className={`w-full h-[65%]   cursor-pointer duration-1000 ${
                         hover
                              ? "bg-meethover bg-opacity-100"
                              : "bg-[#27BBAE] bg-opacity-30"
                    }`}
               ></div>

               <div className=" w-[70%] h-[20%] bg-white flex flex-col justify-center absolute bottom-0 left-[50%] -translate-x-[50%] translate-y-[50%] rounded-[10%]">
                    <div className=" w-full text-center sm:text-[3vw] text-[4vw] text-black">
                         <h1>{content.name}</h1>
                         <h2 className=" sm:text-[1.5vw] text-[3vw]">
                              {content.work}
                         </h2>
                    </div>
               </div>
          </div>
     );
};

const MeetAnimation2 = () => {
     return (
          <>
               <div className="lg:hidden w-full flex flex-col justify-evenly md:gap-y-[20vw] gap-y-[10vw]">
                    <div className=" w-full flex sm:flex-row flex-col justify-evenly items-center md:gap-y-[20vw] gap-y-[10vw]">
                         <MeetTwo content={teammember[0]} />
                         <MeetTwo content={teammember[1]} />
                    </div>
                    <div className=" w-full flex sm:flex-row flex-col justify-evenly items-center md:gap-y-[20vw] gap-y-[10vw]">
                         <MeetTwo content={teammember[2]} />
                         <MeetTwo content={teammember[3]} />
                    </div>
               </div>
               <div className=" w-full h-[10vw] bg-white"></div>
          </>
     );
};

export default MeetAnimation2;
