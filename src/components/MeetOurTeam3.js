import { motion, useScroll, useTime, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import { dharan, teammember } from "@/asset/companies";
import dlogo from "../../public/images/dharan.png";

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

const ImageComponents = ({ team }) => {
     return (
          <div className=" w-full h-full relative bg-dharangradient  ">
               <Image src={team.image} fill objectPosition="cover" />
          </div>
     );
};

const MeetOurTeam3 = () => {
     const fullRef = useRef();

     const fullRefUseScroll = useScroll({
          target: fullRef,
          offset: ["0 0.5", "1 0"],
     });

     const endTopState = "70%";
     const endLeftState = "50%";
     const endScale = 1.5;

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

     const scaleSection1 = useTransform(
          fullRefUseScroll.scrollYProgress,
          timing1,
          [1, 1, 1, endScale, endScale, endScale]
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

     const scaleSection2 = useTransform(
          fullRefUseScroll.scrollYProgress,
          timing2,
          [1, 1, 1, endScale, endScale, endScale]
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

     const scaleSection3 = useTransform(
          fullRefUseScroll.scrollYProgress,
          timing3,
          [1, 1, 1, endScale, endScale, endScale]
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

     const scaleSection4 = useTransform(
          fullRefUseScroll.scrollYProgress,
          timing4,
          [1, 1, 1, endScale, endScale, endScale]
     );

     ///--------------------------------------------------------------------

     const timing5 = [0, 0.1, 0.6, 0.72, point, 1];

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

     const scaleSection5 = useTransform(
          fullRefUseScroll.scrollYProgress,
          timing5,
          [1, 1, 1, endScale, endScale, endScale]
     );

     ///--------------------------------------------------------------------

     const timing6 = [0, 0.1, 0.5, 0.62, point, 1];

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

     const scaleSection6 = useTransform(
          fullRefUseScroll.scrollYProgress,
          timing6,
          [1, 1, 1, endScale, endScale, endScale]
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

     const scaleSection7 = useTransform(
          fullRefUseScroll.scrollYProgress,
          timing7,
          [1, 1, 1, endScale, endScale, endScale]
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
          timing8,
          [left8, left8, left8, endLeftState, endLeftState, endLeftState]
     );

     const scaleSection8 = useTransform(
          fullRefUseScroll.scrollYProgress,
          timing8,
          [1, 1, 1, endScale, endScale, endScale]
     );

     //---------------------------------------------------------------------

     const topSection9 = useTransform(
          fullRefUseScroll.scrollYProgress,
          [0, 0.1, 0.86, 0.88, 1],
          ["100%", "100%%", "100%", "60%", "-75%"]
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
                         scale: scaleSection1,
                         left: leftSection1,
                    }}
                    className=" xl:w-[200px] xl:h-[285px] lg:w-[150px] lg:h-[215px] bg-dharangradient3 fixed rounded-[15px] overflow-hidden"
               >
                    <ImageComponents team={teammember[0]} />
               </motion.div>
               <motion.div
                    style={{
                         top: topSection2,
                         x: "-50%",
                         y: "-50%",
                         scale: scaleSection2,
                         left: leftSection2,
                    }}
                    className=" xl:w-[200px] xl:h-[285px] lg:w-[150px] lg:h-[215px] bg-red-200 fixed rounded-[15px] overflow-hidden"
               >
                    <ImageComponents team={teammember[1]} />
               </motion.div>
               <motion.div
                    style={{
                         top: topSection3,
                         x: "-50%",
                         y: "-50%",
                         scale: scaleSection3,
                         left: leftSection3,
                    }}
                    className=" xl:w-[200px] xl:h-[285px] lg:w-[150px] lg:h-[215px] bg-red-300 fixed rounded-[15px] overflow-hidden"
               >
                    <ImageComponents team={teammember[2]} />
               </motion.div>
               <motion.div
                    style={{
                         top: topSection4,
                         x: "-50%",
                         y: "-50%",
                         scale: scaleSection4,
                         left: leftSection4,
                    }}
                    className=" xl:w-[200px] xl:h-[285px] lg:w-[150px] lg:h-[215px] bg-red-400 fixed rounded-[15px] overflow-hidden"
               >
                    <ImageComponents team={teammember[3]} />
               </motion.div>

               {/* ----------------------------------------------------------------------------- */}

               <motion.div
                    style={{
                         top: topSection5,
                         x: "-50%",
                         y: "-50%",
                         scale: scaleSection5,
                         left: leftSection5,
                    }}
                    className=" xl:w-[200px] xl:h-[285px] lg:w-[150px] lg:h-[215px] bg-red-500 fixed rounded-[15px] overflow-hidden"
               >
                    {" "}
                    <ImageComponents team={teammember[2]} />
               </motion.div>
               <motion.div
                    style={{
                         top: topSection6,
                         x: "-50%",
                         y: "-50%",
                         scale: scaleSection6,
                         left: leftSection6,
                    }}
                    className=" xl:w-[200px] xl:h-[285px] lg:w-[150px] lg:h-[215px] bg-red-600 fixed rounded-[15px] overflow-hidden"
               >
                    {" "}
                    <ImageComponents team={teammember[0]} />
               </motion.div>
               <motion.div
                    style={{
                         top: topSection7,
                         x: "-50%",
                         y: "-50%",
                         scale: scaleSection7,
                         left: leftSection7,
                    }}
                    className=" xl:w-[200px] xl:h-[285px] lg:w-[150px] lg:h-[215px] bg-red-700 fixed rounded-[15px] overflow-hidden"
               >
                    {" "}
                    <ImageComponents team={teammember[3]} />
               </motion.div>
               <motion.div
                    style={{
                         top: topSection8,
                         x: "-50%",
                         y: "-50%",
                         scale: scaleSection8,
                         left: leftSection8,
                    }}
                    className=" xl:w-[200px] xl:h-[285px] lg:w-[150px] lg:h-[215px] bg-red-800 fixed rounded-[15px] overflow-hidden"
               >
                    {" "}
                    <ImageComponents
                         team={{
                              image: dharan.image,
                         }}
                    />
               </motion.div>

               <motion.div
                    style={{
                         top: topSection9,
                         left: "62%",
                    }}
                    className=" w-[300px]  h-[285px] fixed rounded-[15px] overflow-hidden"
               >
                    <h1 className=" text-[4vw] leading-[4.2vw] text-[#fff]">
                         Eniriching Lives
                    </h1>
               </motion.div>
          </>
     );
};

export default MeetOurTeam3;
