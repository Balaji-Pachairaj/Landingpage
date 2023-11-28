"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

import email from "../../public/team/email.png";
import whatsapp from "../../public/team/whatsapp.png";

const ContactUs = () => {
     const fullRef = useRef();

     const fullUseScroll = useScroll({
          target: fullRef,
          offset: ["0 1", "0 0"],
     });

     const widthFull = useTransform(
          fullUseScroll.scrollYProgress,
          [0, 1],
          ["100vw", "80vw"]
     );
     const heightFull = useTransform(
          fullUseScroll.scrollYProgress,
          [0, 1],
          ["100vh", "80vh"]
     );
     return (
          <div
               id="contact"
               ref={fullRef}
               className=" w-full h-screen bg-white flex flex-col justify-center items-center overflow-hidden"
          >
               <motion.div
                    style={{
                         width: widthFull,
                         height: heightFull,
                    }}
                    className=" w-[100vw] h-[100vh] rounded-[5rem] bg-dharangradient flex flex-col justify-center gap-[4vh] text-white"
               >
                    <div className=" text-[7vw] font-bold text-center">
                         Let's Contact
                    </div>
                    <div className=" w-full h-min flex lg:flex-row  flex-col items-center justify-center gap-[5vw]">
                         <div className=" lg:w-[35vw] w-[70vw] h-[100px] rounded-[10px] border-2 border-white flex flex-row justify-center items-center md:text-[2.5vw] text-[5vw]">
                              <div className=" w-[25%] h-full z-[40] relative flex flex-row justify-center items-center ">
                                   <div className="w-[50%] h-[50%] relative">
                                        <Image
                                             src={email}
                                             fill
                                             objectFit="cover"
                                        />
                                   </div>
                              </div>
                              <div className=" w-[70%] h-full flex flex-row justify-center items-center lg:text-[2vw] md:text-[3.5vw] text-[3vw]">
                                   info@dharangroups.com
                              </div>
                         </div>
                         <div className=" lg:w-[35vw] w-[70vw] h-[100px] rounded-[10px] border-2 border-white flex flex-row justify-center items-center md:text-[2.5vw] text-[5vw]">
                              <div className=" w-[25%] h-full z-[40] relative ">
                                   <Image
                                        src={whatsapp}
                                        fill
                                        objectFit="cover"
                                   />
                              </div>
                              <div className=" w-[70%] h-full flex flex-row justify-center items-center lg:text-[2vw]  md:text-[4vw] text-[4vw]">
                                   +91-427-2709999
                              </div>
                         </div>
                    </div>
               </motion.div>
          </div>
     );
};

export default ContactUs;
