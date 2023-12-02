"use client";
import React, { useRef } from "react";
import bg from "../../public/team/background.png";
import group1 from "../../public/team/group1.png";
import group2 from "../../public/team/group2.png";
import group3 from "../../public/team/group3.png";
import group4 from "../../public/team/group4.png";
import group5 from "../../public/team/group5.png";
import group6 from "../../public/team/group6.png";
import group7 from "../../public/team/group7.png";
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

     const src =
          "https://assets.website-files.com/639f4a6adb2bd389d4bce28c/639f6afa88734f8fd8375208_philip-oroni--XTCRF9fETE-unsplash-p-500.jpg";

     //--------------------------------------------------------------------------------------------------------------

     const firstsection = useRef();

     const firstsectionUseScroll = useScroll({
          target: firstsection,
          offset: ["0 1", "1 0"],
     });

     //-----------------------------------------------------------------------------

     let point1 = 0.8;
     const scaleFirstsection1 = useTransform(
          firstsectionUseScroll.scrollYProgress,
          [0, point1],
          [1, 1.35]
     );
     const opacityFirstsection1 = useTransform(
          firstsectionUseScroll.scrollYProgress,
          [0, point1 - 0.1, point1],
          [1, 1, 0]
     );

     //-----------------------------------------------------------------------------

     let point2 = 0.7;

     const scaleFirstsection2 = useTransform(
          firstsectionUseScroll.scrollYProgress,
          [0, point2],
          [1, 1.35]
     );
     const opacityFirstsection2 = useTransform(
          firstsectionUseScroll.scrollYProgress,
          [0, point2 - 0.1, point2],
          [1, 1, 0]
     );

     //-----------------------------------------------------------------------------
     let point3 = 0.9;

     const scaleFirstsection3 = useTransform(
          firstsectionUseScroll.scrollYProgress,
          [0, point3],
          [1, 1.35]
     );
     const opacityFirstsection3 = useTransform(
          firstsectionUseScroll.scrollYProgress,
          [0, point3 - 0.1, point3],
          [1, 1, 0]
     );

     //-----------------------------------------------------------------------------
     let point4 = 1;

     const scaleFirstsection4 = useTransform(
          firstsectionUseScroll.scrollYProgress,
          [0, point4],
          [1, 1.35]
     );
     const opacityFirstsection4 = useTransform(
          firstsectionUseScroll.scrollYProgress,
          [0, point4 - 0.1, point4],
          [1, 1, 0]
     );

     //-----------------------------------------------------------------------------
     let point5 = 0.8;

     const scaleFirstsection5 = useTransform(
          firstsectionUseScroll.scrollYProgress,
          [0, point5],
          [1, 1.35]
     );
     const opacityFirstsection5 = useTransform(
          firstsectionUseScroll.scrollYProgress,
          [0, point5 - 0.1, point5],
          [1, 1, 0]
     );

     //-----------------------------------------------------------------------------
     let point6 = 0.85;

     const scaleFirstsection6 = useTransform(
          firstsectionUseScroll.scrollYProgress,
          [0, point6],
          [1, 1.35]
     );
     const opacityFirstsection6 = useTransform(
          firstsectionUseScroll.scrollYProgress,
          [0, point6 - 0.1, point6],
          [1, 1, 0]
     );

     //-----------------------------------------------------------------------------
     let point7 = 0.75;

     const scaleFirstsection7 = useTransform(
          firstsectionUseScroll.scrollYProgress,
          [0, point7],
          [1, 1.35]
     );
     const opacityFirstsection7 = useTransform(
          firstsectionUseScroll.scrollYProgress,
          [0, point7 - 0.1, point7],
          [1, 1, 0]
     );
     //-----------------------------------------------------------------------------

     const topFirstsection = useTransform(
          firstsectionUseScroll.scrollYProgress,
          [0, 1],
          ["0", "50%"]
     );
     let point8 = 1;

     const scaleFirstsection8 = useTransform(
          firstsectionUseScroll.scrollYProgress,
          [0, point8],
          [1, 1.35]
     );
     const opacityFirstsection8 = useTransform(
          firstsectionUseScroll.scrollYProgress,
          [0, point8 - 0.1, point8],
          [1, 1, 0]
     );

     //--------------------------------------------------------------------------------------------------------------
     let point9 = 0.95;

     const scaleFirstsection9 = useTransform(
          firstsectionUseScroll.scrollYProgress,
          [0, point9],
          [1, 1.35]
     );
     const opacityFirstsection9 = useTransform(
          firstsectionUseScroll.scrollYProgress,
          [0, point9 - 0.1, point9],
          [1, 1, 0]
     );
     return (
          <>
               <motion.div
                    style={{
                         x: "-50%",
                         left: "50%",
                         y: "-50%",
                         top: "70%",
                    }}
                    initial={{
                         top: "35vh",
                         scale: 1.3,
                         filter: 1,
                    }}
                    animate={{
                         top: "50vh",
                         scale: 1,
                         filter: 2,
                         transition: {
                              duration: 2,
                         },
                    }}
                    className=" md:w-[40vw] md:h-[15vw] w-[60vw] h-[30vw] sm:text-[5vw] text-[7vw] sm:leading-[7vw] leading-[10vw] text-center z-[20] bg-transparent fixed left-[50%]  "
               >
                    <motion.div
                         style={{
                              scale: scaleFirstsection8,
                              opacity: opacityFirstsection8,
                              top: topFirstsection,
                              display,
                         }}
                         className=" relative w-full"
                    >
                         We are <br />{" "}
                         <span className="  bg-dharangradient3 text-transparent bg-clip-text ">
                              Dharan Group
                         </span>
                    </motion.div>
               </motion.div>
               <div className=" w-full min-h-screen relative " id="header">
                    {/* <motion.div
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
                              className=" md:w-[100%] text-center w-[90%] h-min absolute top-[50%] left-[50%] border-2  -translate-x-1/2 -translate-y-1/2 "
             
             <Image src={src} loader={()=> src} fill objectFit="cover" />                 >
                         
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
                          */}

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
                              className=" md:w-[100%] text-center w-[90%] h-min absolute top-[50%] left-[50%] border-2  -translate-x-1/2 -translate-y-1/2 "
             
             <Image src={src} loader={()=> src} fill objectFit="cover" />                 >
                              <h1 className=" font-poppins lg:text-[70px] md:text-[50px] sm:text-[35px] text-[24px] gap-[5vh] font-extrabold text-black  justify-center flex flex-row">
                                   <p>WELCOME TO </p>
                                   <span className=" bg-dharangradient3 text-transparent bg-clip-text">
                                        DHARAN GROUP
                                   </span>
                              </h1>
                         </motion.div> */}

                    {/* <motion.div
                              style={{
                                   height: heightFullRef,
                              }}
                              className=" w-full  fixed top-[50%] -translate-y-[50%]  bg-black "
                         ></motion.div>
                    </motion.div> */}

                    <div className=" w-full h-screen  ">
                         <motion.div
                              initial={{
                                   scale: 2,
                                   opacity: 0.4,
                              }}
                              animate={{
                                   scale: 1,
                                   opacity: 1,
                                   transition: {
                                        duration: 2,
                                   },
                              }}
                              style={{
                                   display,
                              }}
                              className="fixed w-full h-screen"
                         >
                              <div className=" w-full h-full  absolute">
                                   <Image src={bg} fill objectFit="cover" />
                              </div>
                              <motion.div
                                   style={{
                                        scale: scaleFirstsection1,
                                        opacity: opacityFirstsection1,
                                        x: "-50%",
                                        left: "50%",
                                        y: "-50%",
                                        top: "75%",
                                   }}
                                   className=" lg:w-[15vw] lg:h-[10vw] md:w-[22vw] md:h-[15vw] w-[40vw] h-[30vw] bg-white absolute left-[50%] border-2 "
                              >
                                   1
                                   <Image src={group5} fill />
                              </motion.div>
                              <motion.div
                                   style={{
                                        scale: scaleFirstsection2,
                                        opacity: opacityFirstsection2,
                                        x: "-50%",
                                        left: "8%",
                                        y: "-50%",
                                        top: "60%",
                                   }}
                                   className=" lg:w-[10vw] lg:h-[10vw] md:w-[15vw] md:h-[15vw] w-[20vw] h-[20vw] bg-white absolute left-[50%] border-2 "
                              >
                                   2
                                   <Image src={group4} fill objectFit="cover" />
                              </motion.div>
                              <motion.div
                                   style={{
                                        scale: scaleFirstsection3,
                                        opacity: opacityFirstsection3,
                                        x: "-50%",
                                        left: "83%",
                                        y: "-50%",
                                        top: "65%",
                                   }}
                                   className=" lg:w-[14vw] lg:h-[14vw] md:w-[18vw] md:h-[18vw]  w-[25vw] h-[25vw] bg-white absolute left-[50%] border-2 "
                              >
                                   3
                                   <Image src={group6} fill objectFit="cover" />
                              </motion.div>
                              <motion.div
                                   style={{
                                        scale: scaleFirstsection4,
                                        opacity: opacityFirstsection4,
                                        x: "-50%",
                                        left: "22%",
                                        y: "-50%",
                                        top: "35%",
                                   }}
                                   className=" lg:w-[12vw] lg:h-[15vw] md:w-[16vw] md:h-[20vw] w-[30vw] h-[40vw] bg-white absolute left-[50%] border-2 "
                              >
                                   4
                                   <Image src={group2} fill objectFit="cover" />
                              </motion.div>
                              <motion.div
                                   style={{
                                        scale: scaleFirstsection5,
                                        opacity: opacityFirstsection5,
                                        x: "-50%",
                                        left: "27%",

                                        bottom: "0%",
                                   }}
                                   className=" lg:w-[15vw] lg:h-[6vw]  w-[30vw] h-[12vw] bg-white absolute left-[50%] border-2 "
                              >
                                   5
                                   <Image src={group7} fill objectFit="cover" />
                              </motion.div>
                              <motion.div
                                   style={{
                                        scale: scaleFirstsection6,
                                        opacity: opacityFirstsection6,
                                        x: "-50%",
                                        left: "80%",
                                        y: "-50%",
                                        top: "20%",
                                   }}
                                   className=" lg:w-[15vw] lg:h-[10vw] md:w-[25vw] md:h-[20vw] w-[30vw] h-[20vw] bg-white absolute left-[50%] border-2 "
                              >
                                   6
                                   <Image src={group6} fill objectFit="cover" />
                              </motion.div>
                              <motion.div
                                   style={{
                                        scale: scaleFirstsection7,
                                        opacity: opacityFirstsection7,
                                        x: "0%",

                                        y: "-50%",
                                        top: "20%",
                                   }}
                                   className=" lg:w-[7.5vw] lg:h-[10vw] w-[15vw] h-[20vw] bg-white absolute  "
                              >
                                   7
                                   <Image src={group1} fill objectFit="cover" />
                              </motion.div>
                              {/* <motion.div
                                   style={{
                                        scale: scaleFirstsection9,
                                        opacity: opacityFirstsection9,
                                        x: "-50%",
                                        left: "0%",
                                        y: "-50%",
                                        top: "20%",
                                   }}
                                   className=" lg:w-[10vw] lg:h-[10vw] w-[20vw] h-[20vw] bg-white absolute left-[50%] border-2 "
                              >
                                   8
                                   // <Image
                                   //      src={src}
                                   //      loader={() => src}
                                   //      fill
                                   //      objectFit="cover"
                                   // />
                              </motion.div> */}
                         </motion.div>
                    </div>
                    <div className=" w-full h-screen" ref={firstsection}></div>

                    <motion.div
                         style={{
                              height: heightFullRef,
                              display,
                         }}
                         className=" w-full  fixed top-[50%] -translate-y-[50%]  bg-black "
                    ></motion.div>

                    {/* <div className=" w-full h-screen"></div> */}

                    <div ref={fullref} className=" w-full h-screen "></div>
               </div>
          </>
     );
};

export default Logosection;
