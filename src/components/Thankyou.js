"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const ThankyouNote = () => {
     return (
          <div className=" w-max h-full flex flex-col justify-center text-white text-[35px] font-bold capitalize">
               thank you for your visit!
          </div>
     );
};

const Thankyou = () => {
     const fullRef = useRef();

     const fullUseScroll = useScroll({
          target: fullRef,
          offset: ["0 1", "0 0"],
     });

     const greenleft = useTransform(
          fullUseScroll.scrollYProgress,
          [0, 1],
          ["0%", "-50%"]
     );

     const yellowLeft = useTransform(
          fullUseScroll.scrollYProgress,
          [0, 1],
          ["-30%", "20%"]
     );

     return (
          <>
               <div
                    className=" w-full h-[40vh] overflow-hidden relative flex flex-col justify-center bg-white"
                    ref={fullRef}
               >
                    <div className=" w-full h-[3rem] relative">
                         <motion.div
                              style={{
                                   left: yellowLeft,
                                   x: "-30%",
                                   y: "15vh",
                                   rotate: "6deg",
                              }}
                              className=" w-max h-[95px] lg:rotate-[-25deg] rotate-[6deg]  flex flex-row gap-[4rem] bg-dharangradient absolute"
                         >
                              <ThankyouNote />
                              <ThankyouNote />
                              <ThankyouNote />
                              <ThankyouNote />
                              <ThankyouNote />
                              <ThankyouNote />
                              <ThankyouNote />
                              <ThankyouNote />
                              <ThankyouNote />
                              <ThankyouNote />
                              <ThankyouNote />
                              <ThankyouNote />
                              <ThankyouNote />
                              <ThankyouNote />
                              <ThankyouNote />
                              <ThankyouNote />
                              <ThankyouNote />
                         </motion.div>
                         <motion.div
                              style={{
                                   y: "15vh",
                                   rotate: "-5deg",
                                   x: "-50%",
                                   left: greenleft,
                              }}
                              className=" w-max  h-[95px] flex flex-row gap-[4rem] bg-dharangradient bg-green-500 absolute"
                         >
                              <ThankyouNote />
                              <ThankyouNote />
                              <ThankyouNote />
                              <ThankyouNote />
                              <ThankyouNote />
                              <ThankyouNote />
                              <ThankyouNote />
                              <ThankyouNote />
                              <ThankyouNote />
                              <ThankyouNote />
                              <ThankyouNote />
                              <ThankyouNote />
                              <ThankyouNote />
                              <ThankyouNote />
                              <ThankyouNote />
                              <ThankyouNote />
                         </motion.div>
                    </div>
               </div>

               
          </>
     );
};

export default Thankyou;
