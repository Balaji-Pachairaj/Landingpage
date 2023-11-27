"useclient";
import React, { useRef } from "react";

import dharan from "../../public/images/dharan.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const Logosection = () => {
     const fullref = useRef();

     const fullRefUseScroll = useScroll({
          target: fullref,
          offset: ["0 0", "1 0"],
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
          [0, 0.6, 1],
          [1, 1, 0]
     );

     const display = useTransform( fullRefUseScroll.scrollYProgress, (pos) => {
          return pos >= 1 ? "none" : "block";
     });

     return (
          <>
               <div className=" w-full min-h-screen lg:m-0  md:mb-[50vh] mb-[90vh]">
                    <motion.div
                         style={{
                              opacity: second,
                              display : display 
                         }}
                         className=" w-full h-screen bg-white fixed top-0 flex flex-row justify-center items-center z-[9] "
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
                              className=" md:w-[75%] w-[90%] lg:h-[500px] md:h-[450px] sm:h-[400px] h-[250px] absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 "
                         >
                              <Image src={dharan} fill objectFit="cover" />
                         </motion.div>

                         <motion.div
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
                              className=" md:w-[75%] w-[90%] lg:h-[500px] md:h-[450px] sm:h-[400px] h-[250px] absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 "
                         >
                              <Image src={dharan} fill objectFit="cover" />
                         </motion.div>

                         <motion.div
                              style={{
                                   height: heightFullRef,
                              }}
                              className=" w-full  absolute top-[50%] -translate-y-[50%] bg-black "
                         ></motion.div>
                    </motion.div>

                    <div className=" w-full h-screen"></div>

                    <div ref={fullref} className=" w-full h-screen "></div>
               </div>
          </>
     );
};

export default Logosection;
