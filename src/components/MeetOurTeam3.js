import { motion, useScroll, useTime, useTransform } from "framer-motion";
import React, { useRef } from "react";

const TextOurTeamCom = () => {
     return (
          <div className=" w-full h-[50vh] flex flex-col justify-center  ">
               <div className=" w-full h-fit flex flex-row justify-center  ">
                    <div className=" flex flex-row gap-2 text-[11vw] justify-center  font-poppins font-[600] text-center    ">
                         <h1 className="backgroundcss">O</h1>
                         <h1 className="backgroundcss">U</h1>
                         <h1 className="backgroundcss">R</h1>
                    </div>
                    <div className=" flex flex-row gap-2 text-[11vw] justify-center  font-poppins font-[600] text-center    ">
                         <h1 className="backgroundcss">T</h1>
                         <h1 className="backgroundcss">E</h1>
                         <h1 className="backgroundcss">A</h1>
                         <h1 className="backgroundcss">M</h1>
                    </div>
               </div>
          </div>
     );
};

const MeetOurTeam3 = () => {
     const fullRef = useRef();

     const fullRefUseScroll = useScroll({
          target: fullRef,
          offset: ["0 0.5", "1 1"],
     });

     const endTopState = "80%";
     const endLeftState = "50%";

     const upState = "-50%";
     const point = "0.88";

     //-------------------------------------------------------------------

     const timing1 = [0, 0.1, 0.12, 0.22, point, 1];

     const topSection1 = useTransform(
          fullRefUseScroll.scrollYProgress,
          timing1,
          ["175%", "25%", "25%", endTopState, endTopState, upState]
     );

     const leftSection1 = useTransform(
          fullRefUseScroll.scrollYProgress,
          timing1,
          ["20%", "20%", "20%", endLeftState, endLeftState, endLeftState]
     );

     ///--------------------------------------------------------------------

     const timing2 = [0, 0.1, 0.2, 0.32, point, 1];

     const topSection2 = useTransform(
          fullRefUseScroll.scrollYProgress,
          timing2,
          ["175%", "25%", "25%", endTopState, endTopState, upState]
     );

     const leftSection2 = useTransform(
          fullRefUseScroll.scrollYProgress,
          timing2,
          ["40%", "40%", "40%", endLeftState, endLeftState, endLeftState]
     );

     ///--------------------------------------------------------------------

     const timing3 = [0, 0.1, 0.3, 0.42, point, 1];

     const topSection3 = useTransform(
          fullRefUseScroll.scrollYProgress,
          timing3,
          ["175%", "25%", "25%", endTopState, endTopState, upState]
     );

     const leftSection3 = useTransform(
          fullRefUseScroll.scrollYProgress,
          timing3,
          ["60%", "60%", "60%", endLeftState, endLeftState, endLeftState]
     );

     ///--------------------------------------------------------------------

     const timing4 = [0, 0.1, 0.4, 0.52, point, 1];

     const topSection4 = useTransform(
          fullRefUseScroll.scrollYProgress,
          timing4,
          ["175%", "25%", "25%", endTopState, endTopState, upState]
     );

     const leftSection4 = useTransform(
          fullRefUseScroll.scrollYProgress,
          timing4,
          ["80%", "80%", "80%", endLeftState, endLeftState, endLeftState]
     );

     ///--------------------------------------------------------------------

     const timing5 = [0, 0.1, 0.5, 0.62, point, 1];

     const left5 = "10%";

     const topSection5 = useTransform(
          fullRefUseScroll.scrollYProgress,
          timing5,
          ["225%", "75%", "75%", endTopState, endTopState, upState]
     );

     const leftSection5 = useTransform(
          fullRefUseScroll.scrollYProgress,
          timing5,
          [left5, left5, left5, endLeftState, endLeftState, endLeftState]
     );

     ///--------------------------------------------------------------------

     const timing6 = [0, 0.1, 0.6, 0.72, point, 1];

     const left6 = "30%";

     const topSection6 = useTransform(
          fullRefUseScroll.scrollYProgress,
          timing6,
          ["225%", "75%", "75%", endTopState, endTopState, upState]
     );

     const leftSection6 = useTransform(
          fullRefUseScroll.scrollYProgress,
          timing6,
          [left6, left6, left6, endLeftState, endLeftState, endLeftState]
     );

     ///--------------------------------------------------------------------

     const timing7 = [0, 0.1, 0.7, 0.82, point, 1];

     const left7 = "70%";

     const topSection7 = useTransform(
          fullRefUseScroll.scrollYProgress,
          timing7,
          ["225%", "75%", "75%", endTopState, endTopState, upState]
     );

     const leftSection7 = useTransform(
          fullRefUseScroll.scrollYProgress,
          timing7,
          [left7, left7, left7, endLeftState, endLeftState, endLeftState]
     );

     ///--------------------------------------------------------------------

     const timing8 = [0, 0.1, 0.8, 0.87, point, 1];

     const left8 = "90%";

     const topSection8 = useTransform(
          fullRefUseScroll.scrollYProgress,
          timing8,
          ["225%", "75%", "75%", endTopState, endTopState, upState]
     );

     const leftSection8 = useTransform(
          fullRefUseScroll.scrollYProgress,
          timing7,
          [left8, left8, left8, endLeftState, endLeftState, endLeftState]
     );

     //---------------------------------------------------------------------

     const topSection9 = useTransform(
          fullRefUseScroll.scrollYProgress,
          [0, 0.1, 0.86, 0.88, 1],
          ["100%", "100%%", "100%", "60%", upState]
     );

     //------------------------------------------------------------------------

     const lastRef = useRef();

     const lastRefUseScroll = useScroll({
          target: lastRef,
          offset: ["0 1", "0 0"],
     });

     //  const opacityLastRef = useTransform(
     //       lastRefUseScroll.scrollYProgress,
     //       [0, 0.5, 1],
     //       [1, 0, 0]
     //  );

     return (
          <>
               <TextOurTeamCom />
               <div ref={fullRef} className=" w-full min-h-screen ">
                    <div className=" w-full h-[50vh] "></div>
                    <div className=" w-full h-[50vh] "></div>

                    <div className=" w-full h-[50vh] "></div>
                    <div className=" w-full h-[50vh] "></div>

                    <div className=" w-full h-[50vh] "></div>
                    <div className=" w-full h-[50vh] "></div>

                    <div className=" w-full h-[50vh] "></div>
                    <div className=" w-full h-[50vh] "></div>

                    <div className=" w-full h-[50vh] "></div>
                    <div className=" w-full h-[50vh] "></div>
               </div>

               <div ref={lastRef} className=" w-full h-screen "></div>
               <motion.div
                    style={{
                         top: topSection1,
                         x: "-50%",
                         y: "-50%",

                         left: leftSection1,
                    }}
                    className=" w-[200px] h-[285px] bg-red-100 fixed"
               ></motion.div>
               <motion.div
                    style={{
                         top: topSection2,
                         x: "-50%",
                         y: "-50%",

                         left: leftSection2,
                    }}
                    className=" w-[200px] h-[285px] bg-red-200 fixed"
               ></motion.div>
               <motion.div
                    style={{
                         top: topSection3,
                         x: "-50%",
                         y: "-50%",

                         left: leftSection3,
                    }}
                    className=" w-[200px] h-[285px] bg-red-300 fixed"
               ></motion.div>
               <motion.div
                    style={{
                         top: topSection4,
                         x: "-50%",
                         y: "-50%",

                         left: leftSection4,
                    }}
                    className=" w-[200px] h-[285px] bg-red-400 fixed"
               ></motion.div>

               {/* ----------------------------------------------------------------------------- */}

               <motion.div
                    style={{
                         top: topSection5,
                         x: "-50%",
                         y: "-50%",

                         left: leftSection5,
                    }}
                    className=" w-[200px] h-[285px] bg-red-500 fixed"
               ></motion.div>
               <motion.div
                    style={{
                         top: topSection6,
                         x: "-50%",
                         y: "-50%",

                         left: leftSection6,
                    }}
                    className=" w-[200px] h-[285px] bg-red-600 fixed"
               ></motion.div>
               <motion.div
                    style={{
                         top: topSection7,
                         x: "-50%",
                         y: "-50%",

                         left: leftSection7,
                    }}
                    className=" w-[200px] h-[285px] bg-red-700 fixed"
               ></motion.div>
               <motion.div
                    style={{
                         top: topSection8,
                         x: "-50%",
                         y: "-50%",

                         left: leftSection8,
                    }}
                    className=" w-[200px] h-[285px] bg-red-800 fixed"
               ></motion.div>

               <motion.div
                    style={{
                         top: topSection9,
                         left: "58%",
                    }}
                    className=" w-[200px]  h-[285px] fixed"
               >
                    <h1 className=" text-[3vw] leading-[3.2vw] text-[#fff]">
                         lorem 50 % balj kin nnsk k kme nsnf sak
                    </h1>
               </motion.div>
          </>
     );
};

export default MeetOurTeam3;
