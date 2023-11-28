"use client";
import { teammember } from "@/asset/companies";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const SingleSection = ({ title = "", detail = "" }) => {
     return (
          <div className=" w-full h-screen flex flex-row relative md:bg-transparent  bg-black  bg-opacity-5 overflow-hidden">
               <div className=" w-full h-full absolute flex flex-row ">
                    <div className=" md:w-[50%]  w-[1%] h-full "></div>
                    <div className=" md:w-[50%] w-[100%] h-full flex flex-col justify-center lg:items-start items-center ">
                         <div className=" w-[60%] flex flex-col md:gap-6 gap-4">
                              <div className=" lg:w-[70%] md:w-[80%] w-[85%] h-[25px] rounded-xl text-footerBar bg-footerBar bg-opacity-40 ps-2 flex flex-row items-center justify-start gap-4"></div>

                              <h1 className=" md:text-[3.5rem] text-[2.5rem] md:leading-[4rem] leading-[3rem] bg-dharangradient text-transparent bg-clip-text font-bold ">
                                   {title}
                              </h1>

                              <p className=" md:text-[1.2rem] text-[1rem]   text-textFooterColor font-bold mt-4"></p>
                         </div>
                    </div>
               </div>
          </div>
     );
};

const Ourteam = () => {
     return (
          <h1 className=" bg-dharangradient text-transparent bg-clip-text flex flex-row gap-[3rem]  w-max  flex-shrink-0 lg:text-[4rem] md:text-[3.5rem] sm:text-[3rem] text-[2rem]   font-[500] ">
               <p>OUR TEAM</p>{" "}
               <div className=" w-min h-full flex flex-col justify-center">
                    <div className="w-[25px] h-[25px] rounded-[50%] bg-black"></div>
               </div>
          </h1>
     );
};

const Meetourteam = () => {
     const animationBoxRef = useRef();

     const animationBoXRefUseScroll = useScroll({
          target: animationBoxRef,
          offset: ["0 1", "1 0"],
     });

     const topanimationBoxRef = useTransform(
          animationBoXRefUseScroll.scrollYProgress,
          [0, 0.2, 0.8, 0.95, 1],
          ["100%", "0%", "0%", "-100%", "-150%"]
     );

     //------------------------------------------------------------------------------------------

     const yContainer1 = useTransform(
          animationBoXRefUseScroll.scrollYProgress,
          [0, 0.2, 0.6, 1],
          ["0%", "0%", "0%", "0%"]
     );

     //------------------------------------------------------------------------------------------

     const yContainer2 = useTransform(
          animationBoXRefUseScroll.scrollYProgress,
          [0, 0.2, 0.6, 1],
          ["0%", "0%", "0%", "0%"]
     );

     const xContainer2 = useTransform(
          animationBoXRefUseScroll.scrollYProgress,
          [0, 0.2, 0.6, 1],
          ["0%", "0%", "-7.5%", "-7.5%"]
     );

     //--------------------------------------------------------------------------------------

     const yContainer3 = useTransform(
          animationBoXRefUseScroll.scrollYProgress,
          [0, 0.2, 0.6, 1],
          ["0%", "0%", "100%", "100%"]
     );

     const xContainer3 = useTransform(
          animationBoXRefUseScroll.scrollYProgress,
          [0, 0.2, 0.6, 1],
          ["0%", "0%", "-218%", "-218%"]
     );

     //--------------------------------------------------------------------------------------

     const yContainer4 = useTransform(
          animationBoXRefUseScroll.scrollYProgress,
          [0, 0.2, 0.6, 1],
          ["0%", "0%", "100%", "100%"]
     );

     const xContainer4 = useTransform(
          animationBoXRefUseScroll.scrollYProgress,
          [0, 0.2, 0.6, 1],
          ["0%", "0%", "-227%", "-227%"]
     );

     //--------------------------------------------------------------------------------------

     const yContainer5 = useTransform(
          animationBoXRefUseScroll.scrollYProgress,
          [0, 0.2, 0.6, 1],
          ["0%", "0%", "100%", "100%"]
     );

     const xContainer5 = useTransform(
          animationBoXRefUseScroll.scrollYProgress,
          [0, 0.2, 0.6, 1],
          ["0%", "0%", "-347%", "-347%"]
     );

     return (
          <>
               <div
                    id="meetourteam"
                    className=" w-full min-h-screen flex flex-row justify-center items-center overflow-hidden text-center bg-white"
               >
                    <div className=" h-min animate-slideleft1 flex flex-row flex-nowrap  gap-[3rem] ">
                         <Ourteam />
                         <Ourteam />
                         <Ourteam />
                         <Ourteam />
                         <Ourteam />
                         <Ourteam />
                         <Ourteam />
                         <Ourteam />
                         <Ourteam />
                         <Ourteam />
                         <Ourteam />
                         <Ourteam />
                         <Ourteam />
                         <Ourteam />
                         <Ourteam />
                         <Ourteam />
                         <Ourteam />
                         <Ourteam />
                         <Ourteam />
                         <Ourteam />
                         <Ourteam />
                         <Ourteam />
                    </div>
               </div>
               <div
                    className=" w-full min-h-screen relative bg-white  "
                    ref={animationBoxRef}
               >
                    <motion.div
                         style={{
                              top: topanimationBoxRef,
                         }}
                         className=" h-[30rem] z-0 fixed top-[40px] flex flex-row shrink-0 flex-nowrap gap-[2rem] "
                    >
                         <motion.div
                              style={{ y: yContainer1 }}
                              className=" relative overflow-hidden lg:w-[23vw] md:h-[45vh] w-[25vw] h-[25vw]  rounded-2xl"
                         >
                              <Image
                                   src={teammember[0].image}
                                   fill
                                   objectFit="cover"
                              />
                         </motion.div>
                         <motion.div
                              style={{
                                   y: yContainer2,
                                   x: xContainer2,
                              }}
                              className=" relative overflow-hidden lg:w-[23vw] md:h-[45vh] w-[25vw] h-[25vw]  rounded-2xl"
                         >
                              <Image
                                   src={teammember[1].image}
                                   fill
                                   objectFit="cover"
                              />
                         </motion.div>
                         <motion.div
                              style={{
                                   y: yContainer3,
                                   x: xContainer3,
                              }}
                              className=" relative overflow-hidden lg:w-[23vw] md:h-[45vh] w-[25vw] h-[25vw]  rounded-2xl"
                         >
                              <Image
                                   src={teammember[2].image}
                                   fill
                                   objectFit="cover"
                              />
                         </motion.div>
                         <motion.div
                              style={{
                                   y: yContainer4,
                                   x: xContainer4,
                              }}
                              className=" relative overflow-hidden lg:w-[23vw] md:h-[45vh] w-[25vw] h-[25vw]  rounded-2xl"
                         >
                              <Image
                                   src={teammember[3].image}
                                   fill
                                   objectFit="cover"
                              />
                         </motion.div>
                         {/* <motion.div
                              style={{
                                   y: yContainer5,
                                   x: xContainer5,
                              }}
                              className=" relative overflow-hidden lg:w-[23vw] md:h-[45vh] w-[25vw] h-[25vw]  rounded-2xl"
                         >
                              <Image
                                   loader={() => src5}
                                   src={src5}
                                   fill
                                   objectFit="cover"
                              />
                         </motion.div> */}
                    </motion.div>

                    <div className="min-h-screen"></div>
                    <div className="min-h-[15rem] overflow-hidden w-full"></div>
                    <div className=" w-full min-h-screen"></div>
                    {/* <SingleSection /> */}
                    <SingleSection title="Meet the Extraordinary Team" />
                    <SingleSection title="Behind Our Phenomenal Success" />
               </div>
               <div className="w-full h-[20vh] bg-white"></div>{" "}
          </>
     );
};

export default Meetourteam;
