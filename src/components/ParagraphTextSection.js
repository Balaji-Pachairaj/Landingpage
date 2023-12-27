import Pattern11SVG from "@/asset/pattern/Pattern11SVG";
import Pattern12SVG from "@/asset/pattern/Pattern12SVG";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const ParagraphTextSection = () => {
     const fullRef = useRef();
     const fullRefUseScroll = useScroll({
          target: fullRef,
          offset: ["0 0.8", "0 0"],
     });

     const opacityFullRef = useTransform(
          fullRefUseScroll.scrollYProgress,
          [0, 1],
          [0, 1]
     );

     return (
          <motion.div
               ref={fullRef}
               className="w-full h-screen bg-[#000]  flex flex-col justify-center relative "
          >
               <div className=" w-full h-full  absolute flex flex-row justify-between overflow-hidden ">
                    <div className=" md:w-[50%] w-[45%]  h-full">
                         <Pattern11SVG />
                    </div>
                    <div className=" md:w-[50%] w-[45%] h-full">
                         <Pattern12SVG />
                    </div>
               </div>
               <motion.h1
                    style={{ opacity: opacityFullRef }}
                    className=" md:p-8 p-4 z-50 lg:text-[60px] md:text-[50px] sm:text-[40px] text-[30px] font-[600] lg:leading-[80px] md:leading-[78px] sm:leading-[66px] leading-[54px] text-[#fff]"
               >
                    With Transparency, Integrity and Commitment, Dharan elevates
                    the lives of people and brings impact to the world through
                    its universe of companies.
               </motion.h1>
               {/* <div className="w-full h-[25vh] sticky bg-red-50  z-[10]  border-2 bottom-0"></div> */}
          </motion.div>
     );
};

export default ParagraphTextSection;
