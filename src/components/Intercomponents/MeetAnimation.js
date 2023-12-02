import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef, useState } from "react";
import Meetone from "./Meetone";
import { teammember } from "@/asset/companies";

const MeetAnimation = ({content}) => {
     const firstsectionRef = useRef();

     const firstSectionUseScroll = useScroll({
          target: firstsectionRef,
          offset: ["0 1", "0 0.3"],
     });

     const xtranform = useTransform(
          firstSectionUseScroll.scrollYProgress,
          [0, 1],
          ["50vh", "0%"]
     );
     return (
          <div
               className=" lg:block hidden w-full h-[35vw] relative  overflow-hidden bg-white"
               ref={firstsectionRef}
          >
               <motion.div
                    style={{
                         left: xtranform,
                    }}
                    className=" w-full flex flex-row shrink-0 absolute justify-evenly items-start "
               >
                    <Meetone content={teammember[0]} />
                    <Meetone content={teammember[1]} />
                    <Meetone content={teammember[2]} />
                    <Meetone content={teammember[3]} />
               </motion.div>
          </div>
     );
};

export default MeetAnimation;
