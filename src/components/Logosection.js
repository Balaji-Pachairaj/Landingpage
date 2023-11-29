"use client";
import React, { useRef } from "react";

import dharan from "../../public/images/dharan.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const Logosection = () => {
     const fullref = useRef();

     const fullRefUseScroll = useScroll({
          target: fullref,
          offset: ["1 1", "1 0"],
     });

     const heightFullRef = useTransform(
          fullRefUseScroll.scrollYProgress,
          [0, 1],
          ["0%", "100%"]
     );

     const firsttop = useTransform(
          fullRefUseScroll.scrollYProgress,
          [0, 0.25, 1],
          ["50%", " 48%", "45%"]
     );

     const secondtop = useTransform(
          fullRefUseScroll.scrollYProgress,
          [0, 0.2, 1],
          ["50%", " 51%", "52%"]
     );
     const second = useTransform(
          fullRefUseScroll.scrollYProgress,
          [0, 0.999999, 1],
          [9, 9, -10]
     );

     const display = useTransform(fullRefUseScroll.scrollYProgress, (pos) => {
          return pos >= 1 ? "none" : "block";
     });

     return (
          <>
               <div
                    className=" w-full min-h-screen lg:m-0  md:mb-[50vh] relative "
                    id="header"
               >
                    <motion.div
                         style={{
                              zIndex: second,
                         }}
                         className=" w-full h-screen bg-[#f4f4f4] fixed top-0 flex flex-row justify-center items-center z-[9] "
                    >
                         <motion.div
                              style={{
                                   top: firsttop,
                                   // rotateZ: firstrotate,
                                   x: "-50%",
                                   y: "-50%",
                              }}
                              initial={{
                                   scale: 0,
                              }}
                              animate={{
                                   scale: 1,
                                   transition: {
                                        duration: 1,
                                   },
                              }}
                              className=" md:w-[100%] text-center w-[90%] h-min absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 "
                         >
                              {/* <Image src={dharan} fill objectFit="cover" /> */}
                              <h1 className=" font-poppins xl:text-[70px] lg:text-[60px] md:text-[40px] sm:text-[35px] text-[24px] lg:gap-[5vh] gap-[3vh] font-extrabold text-black justify-center flex flex-row">
                                   <p className=" flex flex-row sm:gap-[2vh] gap-[1vh]">
                                        <span>WELCOME</span>
                                        <span>TO</span>
                                   </p>
                                   <span className=" bg-dharangradient3 text-transparent bg-clip-text flex flex-row sm:gap-[2vh] gap-[1vh]">
                                        <span>DHARAN</span>
                                        <span>GROUP</span>
                                   </span>
                              </h1>
                         </motion.div>
                         

                         {/* <motion.div
                              style={{
                                   top: secondtop,
                                   x: "-50%",
                                   y: "-50%",
                              }}
                              initial={{
                                   scale: 0,
                              }}
                              animate={{
                                   scale: 1,
                                   transition: {
                                        duration: 1,
                                   },
                              }}
                              className=" md:w-[100%] text-center w-[90%] h-min absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 "
                         >
                              <h1 className=" font-poppins lg:text-[70px] md:text-[50px] sm:text-[35px] text-[24px] gap-[5vh] font-extrabold text-black  justify-center flex flex-row">
                                   <p>WELCOME TO </p>
                                   <span className=" bg-dharangradient3 text-transparent bg-clip-text">
                                        DHARAN GROUP
                                   </span>
                              </h1>
                         </motion.div> */}

                         <motion.div
                              style={{
                                   height: heightFullRef,
                              }}
                              className=" w-full  fixed top-[50%] -translate-y-[50%]  bg-black "
                         ></motion.div>
                    </motion.div>

                    <div className=" w-full h-screen"></div>

                    <div ref={fullref} className=" w-full h-screen "></div>
               </div>
          </>
     );
};

export default Logosection;
