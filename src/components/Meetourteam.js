"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const SingleSection = () => {
     return (
          <div className=" w-full h-screen flex flex-row relative md:bg-transparent  bg-black  bg-opacity-5 overflow-hidden">
               <div className=" w-full h-full absolute flex flex-row ">
                    <div className=" md:w-[50%]  w-[1%] h-full "></div>
                    <div className=" md:w-[50%] w-[100%] h-full flex flex-col justify-center lg:items-start items-center ">
                         <div className=" w-[60%] flex flex-col md:gap-6 gap-4">
                              <div className=" lg:w-[70%] md:w-[80%] w-[85%] h-[25px] rounded-xl text-footerBar bg-footerBar bg-opacity-40 ps-2 flex flex-row items-center justify-start gap-4">
                                   <div className=" w-[15px] h-[15px] rounded-[50%] bg-footerBar"></div>
                                   VERSATILE MODULE
                              </div>

                              <h1 className=" md:text-[3.5rem] text-[2.5rem] md:leading-[4rem] leading-[3rem] text-black ">
                                   Ready to kickstart your online journey?
                              </h1>

                              <p className=" md:text-[1.2rem] text-[1rem]   text-textFooterColor font-bold mt-4">
                                   Cash offers powerful features to manage
                                   finances, streamline operations, and scale
                                   your startup or fintech venture. Explore our
                                   tools to unlock your potential.
                              </p>
                         </div>
                    </div>
               </div>
          </div>
     );
};

const Meetourteam = () => {
     const src1 =
          "https://assets.website-files.com/64a9d2efc8a1e66ee7675415/64de1faa8abee781a89fffa2_smiling-portrait-female-fashion-model-cotton-shirt-isolated--p-2000.jpg";
     const src2 =
          "https://assets.website-files.com/64a9d2efc8a1e66ee7675415/64de1f63c91262229f078d27_profile-side-view-.jpg";
     const src3 =
          "https://assets.website-files.com/64a9d2efc8a1e66ee7675415/64de868c1930f89702254f57_portrait-young-stylish-woman-smiling-laughing-posing-2.jpg";

     const src4 =
          "https://assets.website-files.com/64a9d2efc8a1e66ee7675415/64d3d7bdb35de2d92b7d6a09_ic-04.svg";

     const src5 =
          "https://assets.website-files.com/64a9d2efc8a1e66ee7675415/64de209d0916ac8eb13e4e75_young-laughing-pretty-girl-african-american-woman-covers-mouth-with-hands.jpg";

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
          ["0%", "0%", "100%", "100%"]
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
          ["0%", "0%", "-110%", "-110%"]
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
          ["0%", "0%", "-120%", "-120%"]
     );

     //--------------------------------------------------------------------------------------

     const yContainer4 = useTransform(
          animationBoXRefUseScroll.scrollYProgress,
          [0, 0.2, 0.6, 1],
          ["0%", "0%", "0%", "0%"]
     );

     const xContainer4 = useTransform(
          animationBoXRefUseScroll.scrollYProgress,
          [0, 0.2, 0.6, 1],
          ["0%", "0%", "-233%", "-233%"]
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
               <div className=" w-full min-h-screen flex flex-row justify-center items-center text-center bg-white">
                    <h1 className=" lg:text-[8rem] md:text-[6rem] sm:text-[4rem] text-[3rem] text-[#cbc9f3] lg:leading-[8rem] md:leading-[6rem] sm:leading-[4rem] leading-[3rem] font-[500] ps-8 pe-8">
                         OUR TEAM
                    </h1>
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
                              className=" relative overflow-hidden md:w-[23vw] md:h-[45vh] sm:w-[200px] sm:h-[300px] w-[150px] h-[250px]  rounded-3xl"
                         >
                              <Image
                                   loader={() => src1}
                                   src={src1}
                                   fill
                                   objectFit="cover"
                              />
                         </motion.div>
                         <motion.div
                              style={{
                                   y: yContainer2,
                                   x: xContainer2,
                              }}
                              className=" relative overflow-hidden md:w-[23vw] md:h-[45vh] sm:w-[200px] sm:h-[300px] w-[150px] h-[250px]  rounded-3xl"
                         >
                              <Image
                                   loader={() => src2}
                                   src={src2}
                                   fill
                                   objectFit="cover"
                              />
                         </motion.div>
                         <motion.div
                              style={{
                                   y: yContainer3,
                                   x: xContainer3,
                              }}
                              className=" relative overflow-hidden md:w-[23vw] md:h-[45vh] sm:w-[200px] sm:h-[300px] w-[150px] h-[250px]  rounded-3xl"
                         >
                              <Image
                                   loader={() => src3}
                                   src={src3}
                                   fill
                                   objectFit="cover"
                              />
                         </motion.div>
                         <motion.div
                              style={{
                                   y: yContainer4,
                                   x: xContainer4,
                              }}
                              className=" relative overflow-hidden md:w-[23vw] md:h-[45vh] sm:w-[200px] sm:h-[300px] w-[150px] h-[250px]  rounded-3xl"
                         >
                              <Image
                                   loader={() => src4}
                                   src={src4}
                                   fill
                                   objectFit="cover"
                              />
                         </motion.div>
                         {/* <motion.div
                              style={{
                                   y: yContainer5,
                                   x: xContainer5,
                              }}
                              className=" relative overflow-hidden md:w-[23vw] md:h-[45vh] sm:w-[200px] sm:h-[300px] w-[150px] h-[250px]  rounded-3xl"
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
                    <SingleSection />
                    <SingleSection />
                    <SingleSection />
               </div>
               <div className="w-full h-[20vh] bg-white"></div>{" "}
               
      
          </>
     );
};

export default Meetourteam;
