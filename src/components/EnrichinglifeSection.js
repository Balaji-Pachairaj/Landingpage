"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import dlogo from "../../public/images/dlogo.png";
import Image from "next/image";
const EnrichinglifeSection = () => {
     const fullRef = useRef();

     //-----------------------------------------------------
     const fullUseScroll = useScroll({
          target: fullRef,
          offset: ["0 1", "0 0"],
     });

     const heightfull = useTransform(
          fullUseScroll.scrollYProgress,
          [0, 1],
          ["0vh", "100vh"]
     );
     //-----------------------------------------------------

     const firstSectionRef = useRef();

     const firstSectionUseScroll = useScroll({
          target: firstSectionRef,
          offset: ["0 1", "0 0"],
     });

     const enrichlifeleft = useTransform(
          firstSectionUseScroll.scrollYProgress,
          [0, 1],
          ["25%", "-30%"]
     );

     const livesleft = useTransform(
          firstSectionUseScroll.scrollYProgress,
          [0, 1],
          ["65%", "130%"]
     );

     /// =--------------------------------------------

     const secondSectionRef = useRef();

     const secondSectionUseScroll = useScroll({
          target: secondSectionRef,
          offset: ["0 1", "1 0"],
     });

     const dLogoTop = useTransform(
          secondSectionUseScroll.scrollYProgress,
          [0, 0.5, 1],
          ["50%", "50%", "-45%"]
     );
     const paraTop = useTransform(
          secondSectionUseScroll.scrollYProgress,
          [0, 0.5, 1],
          ["160%", "83%", "-12%"]
     );

     //----------------------------------------------------------

     const thirdSectionRef = useRef();

     const thirdSectionUseScroll = useScroll({
          target: thirdSectionRef,
          offset: ["0 1", "1 1"],
     });

     const opacity = useTransform(
          thirdSectionUseScroll.scrollYProgress,
          [0, 1],
          [1, 0]
     );

     const display = useTransform(
          thirdSectionUseScroll.scrollYProgress,
          (pos) => {
               return pos >= 1 ? "none" : "block";
          }
     );

     return (
          <>
               <motion.div
                    style={{ height: heightfull, y: "-50%", display }}   id = "enrich"
                    className=" w-full h-screen bg-white fixed top-[50%] overflow-hidden -translate-y-[50%] z-[15] text-white font-poppins "
               >
                    <motion.div
                         style={{ opacity: opacity }}
                         className=" w-full h-full relative  bg-black"
                    >
                         <motion.div
                              style={{
                                   x: "-50%",
                                   y: "0%",
                                   left: enrichlifeleft,
                              }}
                              className="top-[20%] left-[25%] absolute w-max h-[20vh] font-bold  text-[6.2em]  bg-dharangradient text-transparent bg-clip-text "
                         >
                              Enriching
                         </motion.div>
                         <motion.div
                              style={{
                                   x: "-50%",
                                   y: "0%",
                                   left: livesleft,
                              }}
                              className="top-[70%] left-[75%] absolute w-max h-[20vh] font-bold  text-[6.2em]  bg-dharangradient text-transparent bg-clip-text "
                         >
                               Lives
                         </motion.div>
                         <motion.div
                              style={{
                                   x: "-50%",
                                   y: "-50%",
                                   top: dLogoTop,
                              }}
                              className=" w-[35vh] h-[35vh]  absolute top-[50%] left-[50%] z-[8] "
                         >
                              <div className=" w-full h-full">
                                   <Image src={dlogo} fill objectFit="cover" />
                              </div>
                         </motion.div>

                         <motion.div
                              style={{
                                   x: "-50%",
                                   y: "-50%",
                                   top: paraTop,
                              }}
                              className=" w-[40vw] absolute top-[75%] left-[65%]  font-bold  text-end text-[2.3em]   "
                         >
                              With Transparency, Integrity and Commitment,
                              Dharan elevates the lives of people and brings
                              impact to the world through its universe of
                              companies.
                         </motion.div>
                    </motion.div>
               </motion.div>
               <div
                    className=" hidden lg:block w-full min-h-screen z-[5] bg-white"
                    ref={fullRef}
               >
                    <div className=" w-full h-screen "></div>
                    <div className=" w-full h-[20rem]"></div>
                    <div
                         ref={firstSectionRef}
                         className=" w-full h-screen "
                    ></div>

                    <div
                         ref={secondSectionRef}
                         className=" w-full h-screen "
                    ></div>
                    <div className=" w-full h-[100vh]"></div>
                    <div
                         ref={thirdSectionRef}
                         className=" w-full h-[25rem]"
                    ></div>
               </div>
          </>
     );
};

export default EnrichinglifeSection;
