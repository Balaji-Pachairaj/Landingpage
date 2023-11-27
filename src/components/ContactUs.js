'use client'
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

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
                    <div className=" text-[7vw] font-bold text-center">Let's Contact</div>
                    <div className=" w-full h-min flex md:flex-row  flex-col items-center justify-center gap-[5vw]">
                         <div className=" md:w-[35vw] w-[70vw] h-[100px] rounded-[10px] border-2 border-white flex flex-row justify-center items-center md:text-[2.5vw] text-[5vw]">
                              Balajitheblankde@gmail.com
                         </div>
                         <div className=" md:w-[35vw] w-[70vw] h-[100px] rounded-[10px] border-2 border-white flex flex-row justify-center items-center md:text-[2.5vw] text-[5vw]">
                              9090909090
                         </div>
                    </div>
               </motion.div>
          </div>
     );
};

export default ContactUs;
