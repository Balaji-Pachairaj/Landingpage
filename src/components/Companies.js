'use client'
import { companies } from "@/asset/companies";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const Companies = () => {
     const src =
          "https://uploads-ssl.webflow.com/64aad5363e57b0b9435969ee/64cf952cd3768d39b73fd34a_prj1.jpg";
     const src2 =
          "https://uploads-ssl.webflow.com/64aad5363e57b0b9435969ee/64cfb9202dbb743b41b100a1_prj2.jpg";

     const src3 =
          "https://uploads-ssl.webflow.com/64aad5363e57b0b9435969ee/64caeb97f6e7d3c0a304fc6a_Prjcs.jpg";

     const src4 =
          "https://uploads-ssl.webflow.com/64aad5363e57b0b9435969ee/64af041f8c844012c92b94ec_pr4.jpg";

     //-----------------------------------------------------------------------------------
     const workRef = useRef();

     const workUseScroll = useScroll({
          target: workRef,
          offset: ["0 1", "0 0"],
     });

     const scaleWorkUseScroll = useTransform(
          workUseScroll.scrollYProgress,
          [0, 0.4, 0.7, 1],
          [0, 0.2, 0.6, 1]
     );

     //-----------------------------------------------------------------------------------

     const firstComRef = useRef();

     const firstComUseScroll = useScroll({
          target: firstComRef,
          offset: ["0 1", "1 0"],
     });

     const imagetopFirst = useTransform(
          firstComUseScroll.scrollYProgress,
          [0, 1],
          ["100%", "-100%"]
     );

     const detailfirstCom = useTransform(
          firstComUseScroll.scrollYProgress,
          [0, 0.1, 0.6],
          ["100%", "100%", "-100%"]
     );
     const titlefirstCom = useTransform(
          firstComUseScroll.scrollYProgress,
          [0, 0.23, 0.7],
          ["100%", "100%", "-100%"]
     );

     //-----------------------------------------------------------------------------------------

     const secondComRef = useRef();

     const secondComUseScroll = useScroll({
          target: secondComRef,
          offset: ["0 1", "1 0.5"],
     });

     const imagetopsecond = useTransform(
          secondComUseScroll.scrollYProgress,
          [0, 1],
          ["100%", "-100%"]
     );

     const detailsecondCom = useTransform(
          secondComUseScroll.scrollYProgress,
          [0, 0.1, 0.6],
          ["100%", "100%", "-100%"]
     );
     const titlesecondCom = useTransform(
          secondComUseScroll.scrollYProgress,
          [0, 0.23, 0.7],
          ["100%", "100%", "-100%"]
     );

     //-----------------------------------------------------------------------------------------
     const thirdComRef = useRef();

     const thirdComUseScroll = useScroll({
          target: thirdComRef,
          offset: ["0 1", "1 0.5"],
     });

     const imagetopthird = useTransform(
          thirdComUseScroll.scrollYProgress,
          [0, 1],
          ["100%", "-100%"]
     );

     const detailthirdCom = useTransform(
          thirdComUseScroll.scrollYProgress,
          [0, 0.1, 0.6],
          ["100%", "100%", "-100%"]
     );
     const titlethirdCom = useTransform(
          thirdComUseScroll.scrollYProgress,
          [0, 0.23, 0.7],
          ["100%", "100%", "-100%"]
     );

     //-----------------------------------------------------------------------------------------

     const fourthComRef = useRef();

     const fourthComUseScroll = useScroll({
          target: fourthComRef,
          offset: ["0 1", "1 0.5"],
     });

     const imagetopfourth = useTransform(
          fourthComUseScroll.scrollYProgress,
          [0, 1],
          ["100%", "-100%"]
     );

     const titlefourthCom = useTransform(
          fourthComUseScroll.scrollYProgress,
          [0, 0.23, 0.7],
          ["100%", "100%", "-100%"]
     );

     ///-----------------------------------------------------
     //-----------------------------------------------------------------------------------------

     const fivethComRef = useRef();

     const fivethComUseScroll = useScroll({
          target: fivethComRef,
          offset: ["0 1", "1 0.5"],
     });

     const imagetopfiveth = useTransform(
          fivethComUseScroll.scrollYProgress,
          [0, 1],
          ["100%", "-100%"]
     );

     const titlefivethCom = useTransform(
          fivethComUseScroll.scrollYProgress,
          [0, 0.23, 0.7],
          ["100%", "100%", "-100%"]
     );

     ///-----------------------------------------------------
     //-----------------------------------------------------------------------------------------

     const sixthComRef = useRef();

     const sixthComUseScroll = useScroll({
          target: sixthComRef,
          offset: ["0 1", "1 0.5"],
     });

     const imagetopsixth = useTransform(
          sixthComUseScroll.scrollYProgress,
          [0, 1],
          ["100%", "-100%"]
     );

     const titlesixthCom = useTransform(
          sixthComUseScroll.scrollYProgress,
          [0, 0.23, 0.7],
          ["100%", "100%", "-100%"]
     );

     ///-----------------------------------------------------
     //-----------------------------------------------------------------------------------------

     const seventhComRef = useRef();

     const seventhComUseScroll = useScroll({
          target: seventhComRef,
          offset: ["0 1", "1 0.5"],
     });

     const imagetopseventh = useTransform(
          seventhComUseScroll.scrollYProgress,
          [0, 1],
          ["100%", "-100%"]
     );

     const titleseventhCom = useTransform(
          seventhComUseScroll.scrollYProgress,
          [0, 0.23, 0.7],
          ["100%", "100%", "-100%"]
     );

     ///-----------------------------------------------------

     const fullRef = useRef();

     const fullUseScroll = useScroll({
          target: fullRef,
          offset: ["0 1", "1 1"],
     });

     const colorchanged = (c1, c2, percentage) => {
          if (c1 == c2) return c1;
          let max = c1 > c2 ? c1 : c2;
          let small = c1 > c2 ? c2 : c1;

          let dif = (max - small) / 100;

          let unitpercentage = Math.floor(dif * percentage);

          //   console.log(c1, c2, dif, percentage);

          let returnvalue;
          if (c2 == max) {
               returnvalue = c1 + unitpercentage;
          }

          if (c1 == max) {
               returnvalue = c1 - unitpercentage;
          }

          console.log(c1, c2, returnvalue, percentage);

          if (unitpercentage < 0) return 0;
          if (unitpercentage > 256) return 256;

          return returnvalue;
     };

     const color = useTransform(fullUseScroll.scrollYProgress, (pos) => {
          // rgb(171, 52, 40)

          //rgb(255, 143, 64)
          let color1 = [256, 256, 256];

          //rgb(209, 195, 122);
          let color2 = companies[0].color;
          let color3 = companies[0].color;
          //rgb(144, 238, 144)
          let color4 = companies[1].color;
          let color5 = companies[1].color;
          //rgb(123, 119, 110);
          let color6 = companies[2].color;
          let color7 = companies[2].color;

          //255, 182, 193
          let color8 = companies[3].color;
          let color9 = companies[3].color;

          //255, 182, 193
          let color10 = companies[4].color;
          let color11 = companies[4].color;

          //255, 182, 193
          let color12 = companies[5].color;
          let color13 = companies[5].color;

          //255, 182, 193
          let color14 = companies[6].color;
          let color15 = companies[6].color;

          let position = pos * 100;

          let totalslice = 14;

          let ifpass = 100 / totalslice;

          let passpositionpass = position * totalslice;

          if (pos == 1) {
               return "rgb(256,256,256 )";
          }

          if (position <= ifpass * 1) {
               let passposition = (position - ifpass * 0) * totalslice;
               let p1 = colorchanged(color1[0], color2[0], passposition);
               let p2 = colorchanged(color1[1], color2[1], passposition);
               let p3 = colorchanged(color1[2], color2[2], passposition);

               let o = "rgb(" + p1 + "," + p2 + ", " + p3 + ")";

               return o;
          }

          if (position <= ifpass * 2) {
               let passposition = (position - ifpass * 1) * totalslice;
               let p1 = colorchanged(color2[0], color3[0], passposition);
               let p2 = colorchanged(color2[1], color3[1], passposition);
               let p3 = colorchanged(color2[2], color3[2], passposition);

               let o = "rgb(" + p1 + "," + p2 + ", " + p3 + ")";

               return o;
          }

          //---------------------------------------

          if (position <= ifpass * 3) {
               let passposition = (position - ifpass * 2) * totalslice;
               let p1 = colorchanged(color3[0], color4[0], passposition);
               let p2 = colorchanged(color3[1], color4[1], passposition);
               let p3 = colorchanged(color3[2], color4[2], passposition);

               let o = "rgb(" + p1 + "," + p2 + ", " + p3 + ")";

               return o;
          }

          if (position <= ifpass * 4) {
               let passposition = (position - ifpass * 3) * totalslice;
               let p1 = colorchanged(color4[0], color5[0], passposition);
               let p2 = colorchanged(color4[1], color5[1], passposition);
               let p3 = colorchanged(color4[2], color5[2], passposition);

               let o = "rgb(" + p1 + "," + p2 + ", " + p3 + ")";

               return o;
          }

          //-----------------------------------------------------------

          if (position <= ifpass * 5) {
               let passposition = (position - ifpass * 4) * totalslice;
               let p1 = colorchanged(color5[0], color6[0], passposition);
               let p2 = colorchanged(color5[1], color6[1], passposition);
               let p3 = colorchanged(color5[2], color6[2], passposition);

               let o = "rgb(" + p1 + "," + p2 + ", " + p3 + ")";

               return o;
          }

          if (position <= ifpass * 6) {
               let passposition = (position - ifpass * 5) * totalslice;
               let p1 = colorchanged(color6[0], color7[0], passposition);
               let p2 = colorchanged(color6[1], color7[1], passposition);
               let p3 = colorchanged(color6[2], color7[2], passposition);

               let o = "rgb(" + p1 + "," + p2 + ", " + p3 + ")";

               return o;
          }
          //-----------------------------------------------------------

          if (position <= ifpass * 7) {
               let passposition = (position - ifpass * 6) * totalslice;
               let p1 = colorchanged(color7[0], color8[0], passposition);
               let p2 = colorchanged(color7[1], color8[1], passposition);
               let p3 = colorchanged(color7[2], color8[2], passposition);

               let o = "rgb(" + p1 + "," + p2 + ", " + p3 + ")";

               console.log(o);
               return o;
          }

          if (position <= ifpass * 8) {
               let passposition = (position - ifpass * 7) * totalslice;
               let p1 = colorchanged(color8[0], color9[0], passposition);
               let p2 = colorchanged(color8[1], color9[1], passposition);
               let p3 = colorchanged(color8[2], color9[2], passposition);

               let o = "rgb(" + p1 + "," + p2 + ", " + p3 + ")";

               console.log(o);
               return o;
          }
          if (position <= ifpass * 9) {
               let passposition = (position - ifpass * 8) * totalslice;
               let p1 = colorchanged(color9[0], color10[0], passposition);
               let p2 = colorchanged(color9[1], color10[1], passposition);
               let p3 = colorchanged(color9[2], color10[2], passposition);

               let o = "rgb(" + p1 + "," + p2 + ", " + p3 + ")";

               console.log(o);
               return o;
          }
          if (position <= ifpass * 10) {
               let passposition = (position - ifpass * 9) * totalslice;
               let p1 = colorchanged(color10[0], color11[0], passposition);
               let p2 = colorchanged(color10[1], color11[1], passposition);
               let p3 = colorchanged(color10[2], color11[2], passposition);

               let o = "rgb(" + p1 + "," + p2 + ", " + p3 + ")";

               console.log(o);
               return o;
          }
          if (position <= ifpass * 11) {
               let passposition = (position - ifpass * 10) * totalslice;
               let p1 = colorchanged(color11[0], color12[0], passposition);
               let p2 = colorchanged(color11[1], color12[1], passposition);
               let p3 = colorchanged(color11[2], color12[2], passposition);

               let o = "rgb(" + p1 + "," + p2 + ", " + p3 + ")";

               console.log(o);
               return o;
          }
          if (position <= ifpass * 12) {
               let passposition = (position - ifpass * 11) * totalslice;
               let p1 = colorchanged(color12[0], color13[0], passposition);
               let p2 = colorchanged(color12[1], color13[1], passposition);
               let p3 = colorchanged(color12[2], color13[2], passposition);

               let o = "rgb(" + p1 + "," + p2 + ", " + p3 + ")";

               console.log(o);
               return o;
          }
          if (position <= ifpass * 13) {
               let passposition = (position - ifpass * 12) * totalslice;
               let p1 = colorchanged(color13[0], color14[0], passposition);
               let p2 = colorchanged(color13[1], color14[1], passposition);
               let p3 = colorchanged(color13[2], color14[2], passposition);

               let o = "rgb(" + p1 + "," + p2 + ", " + p3 + ")";

               console.log(o);
               return o;
          }
          if (position <= ifpass * 14) {
               let passposition = (position - ifpass * 13) * totalslice;
               let p1 = colorchanged(color14[0], color15[0], passposition);
               let p2 = colorchanged(color14[1], color15[1], passposition);
               let p3 = colorchanged(color14[2], color15[2], passposition);

               let o = "rgb(" + p1 + "," + p2 + ", " + p3 + ")";

               console.log(o);
               return o;
          }
     });

     const zindexfull = useTransform(
          fourthComUseScroll.scrollYProgress,
          [0, 0.9, 1],
          ["0%", "0%", "-100%"]
     );

     return (
          <>
               {/* <div className="w-full h-screen"></div> */}

               <div
                    ref={workRef}
                    className=" lg:block hidden w-full h-[1px] "
               ></div>
               <div>
                    <div
                         // style={{
                         //      top: zindexfull,
                         // }}
                         className=" lg:block sticky top-0  hidden w-full h-screen  lg:text-[20rem] md:text-[15rem] sm:text-[12rem] text-[7rem]  z-[5] overflow-hidden bg-white "
                    >
                         <motion.div
                              style={{
                                   backgroundColor: color,
                              }}
                              className=" text-center pt-[1%] w-full h-full flex flex-row justify-center lg:text-[10rem] md:text-[8rem] sm:text-[6rem] text-[5rem] "
                         >
                              OUR COMPANIES
                         </motion.div>
                    </div>
                    <div
                         className="lg:block hidden w-full min-h-screen "
                         ref={fullRef}
                    >
                         {/* companies one */}
                         <div
                              className=" w-full h-[400vh] flex flex-col justify-center items-center "
                              ref={firstComRef}
                         >
                              <motion.a
                                   href="https://google.com"
                                   target="blank"
                                   style={{
                                        top: imagetopFirst,
                                        left: "50%",
                                        x: "-50%",
                                   }}
                                   className=" w-[81vh] h-[81vh] bg-red-700 rounded-[10vh] fixed overflow-hidden z-[8]"
                              >
                                   <Image
                                        src={companies[0].image}
                                        fill
                                        objectFit="cover"
                                   />
                              </motion.a>

                              {/* <motion.div
                              style={{
                                   left: detailfirstCom,
                              }}
                              className="  w-full h-[50vh] fixed top-[50%] z-[7] flex flex-row justify-center items-center"
                         ></motion.div> */}

                              <motion.div
                                   style={{
                                        left: titlefirstCom,
                                   }}
                                   className=" w-full h-[50vh] fixed top-[50%] z-[9]  flex flex-col gap-[0rem] justify-center items-center"
                              >
                                   <p className=" lg:text-[6rem] md:text-[5rem] font-bold">
                                        {companies[0].name}
                                   </p>
                                   <p className=" lg:text-[1rem] md:text-[0.7rem]  w-[40%] text-center">
                                        Product Design, UIUX Design, Branding,
                                        Visual Design, Art Direction, Concept
                                        Design for Spotify
                                   </p>
                              </motion.div>
                         </div>

                         {/* companies two */}
                         <div
                              className=" w-full h-[400vh] flex flex-col justify-center items-center "
                              ref={secondComRef}
                         >
                              <motion.a
                                   href="https://google.com"
                                   target="blank"
                                   style={{
                                        top: imagetopsecond,
                                        left: "50%",
                                        x: "-50%",
                                   }}
                                   className=" w-[81vh] h-[81vh] bg-red-700 rounded-[10vh] fixed overflow-hidden z-[8]"
                              >
                                   <Image
                                        src={companies[1].image}
                                        fill
                                        objectFit="cover"
                                   />
                              </motion.a>

                              {/* <motion.div
                              style={{
                                   left: detailsecondCom,
                              }}
                              className="  w-full h-[50vh] fixed top-[50%] z-[7] flex flex-row justify-center items-center"
                              >
                              <p className=" lg:text-[1rem] md:text-[0.7rem]  w-[15%]">
                              Product Design, UIUX Design, Branding, Visual
                              Design, Art Direction, Concept Design for
                              Spotify
                              </p>
                         </motion.div> */}

                              <motion.div
                                   style={{
                                        left: titlesecondCom,
                                   }}
                                   className=" w-full h-[50vh] fixed top-[50%] z-[9]  flex flex-col gap-[0rem] justify-center items-center"
                              >
                                   <p className=" lg:text-[6rem] md:text-[5rem] font-bold">
                                        {companies[1].name}
                                   </p>
                                   <p className=" lg:text-[1rem] md:text-[0.7rem]  w-[40%] text-center">
                                        Product Design, UIUX Design, Branding,
                                        Visual Design, Art Direction, Concept
                                        Design for Spotify
                                   </p>
                              </motion.div>
                         </div>

                         {/* companies three */}
                         <div
                              className=" w-full h-[400vh] flex flex-col justify-center items-center "
                              ref={thirdComRef}
                         >
                              <motion.a
                                   href="https://google.com"
                                   target="blank"
                                   style={{
                                        top: imagetopthird,
                                        left: "50%",
                                        x: "-50%",
                                   }}
                                   className=" w-[81vh] h-[81vh] bg-red-700 rounded-[10vh] fixed overflow-hidden z-[8]"
                              >
                                   <Image
                                        src={companies[2].image}
                                        fill
                                        objectFit="cover"
                                   />
                              </motion.a>

                              {/* <motion.div
                              style={{
                                   left: detailthirdCom,
                              }}
                              className="  w-full h-[50vh] fixed top-[50%] z-[7] flex flex-row justify-center items-center"
                              >
                              <p className=" lg:text-[1rem] md:text-[0.7rem]  w-[15%]">
                              Product Design, UIUX Design, Branding, Visual
                              Design, Art Direction, Concept Design for
                              Spotify
                              </p>
                         </motion.div> */}

                              <motion.div
                                   style={{
                                        left: titlethirdCom,
                                   }}
                                   className=" w-full h-[50vh] fixed top-[50%] z-[9]  flex flex-col gap-[0rem] justify-center items-center"
                              >
                                   <p className=" lg:text-[6rem] md:text-[5rem] font-bold">
                                        {companies[2].name}
                                   </p>
                                   <p className=" lg:text-[1rem] md:text-[0.7rem]  w-[40%] text-center">
                                        Product Design, UIUX Design, Branding,
                                        Visual Design, Art Direction, Concept
                                        Design for Spotify
                                   </p>
                              </motion.div>
                         </div>

                         {/* companies fourth */}
                         <div
                              className=" w-full h-[400vh] flex flex-col justify-center items-center "
                              ref={fourthComRef}
                         >
                              <motion.a
                                   href="https://google.com"
                                   target="blank"
                                   style={{
                                        top: imagetopfourth,
                                        left: "50%",
                                        x: "-50%",
                                   }}
                                   className=" w-[81vh] h-[81vh] bg-red-700 rounded-[10vh] fixed overflow-hidden z-[8]"
                              >
                                   <Image
                                        src={companies[3].image}
                                        fill
                                        objectFit="cover"
                                   />
                              </motion.a>

                              <motion.div
                                   style={{
                                        left: titlefourthCom,
                                   }}
                                   className=" w-full h-[50vh] fixed top-[50%] z-[9]  flex flex-col gap-[0rem] justify-center items-center"
                              >
                                   <p className=" lg:text-[6rem] md:text-[5rem] font-bold">
                                        {companies[3].name}
                                   </p>
                                   <p className=" lg:text-[1rem] md:text-[0.7rem]  w-[40%] text-center">
                                        Product Design, UIUX Design, Branding,
                                        Visual Design, Art Direction, Concept
                                        Design for Spotify
                                   </p>
                              </motion.div>
                         </div>
                         {/* companies fiveth */}
                         <div
                              className=" w-full h-[400vh] flex flex-col justify-center items-center "
                              ref={fivethComRef}
                         >
                              <motion.a
                                   href="https://google.com"
                                   target="blank"
                                   style={{
                                        top: imagetopfiveth,
                                        left: "50%",
                                        x: "-50%",
                                   }}
                                   className=" w-[81vh] h-[81vh] bg-red-700 rounded-[10vh] fixed overflow-hidden z-[8]"
                              >
                                   <Image
                                        src={companies[4].image}
                                        fill
                                        objectFit="cover"
                                   />
                              </motion.a>

                              <motion.div
                                   style={{
                                        left: titlefivethCom,
                                   }}
                                   className=" w-full h-[50vh] fixed top-[50%] z-[9]  flex flex-col gap-[0rem] justify-center items-center"
                              >
                                   <p className=" lg:text-[6rem] md:text-[5rem] font-bold">
                                        {companies[4].name}
                                   </p>
                                   <p className=" lg:text-[1rem] md:text-[0.7rem]  w-[40%] text-center">
                                        Product Design, UIUX Design, Branding,
                                        Visual Design, Art Direction, Concept
                                        Design for Spotify
                                   </p>
                              </motion.div>
                         </div>
                         {/* companies sixth */}
                         <div
                              className=" w-full h-[400vh] flex flex-col justify-center items-center "
                              ref={sixthComRef}
                         >
                              <motion.a
                                   href="https://google.com"
                                   target="blank"
                                   style={{
                                        top: imagetopsixth,
                                        left: "50%",
                                        x: "-50%",
                                   }}
                                   className=" w-[81vh] h-[81vh] bg-red-700 rounded-[10vh] fixed overflow-hidden z-[8]"
                              >
                                   <Image
                                        src={companies[5].image}
                                        fill
                                        objectFit="cover"
                                   />
                              </motion.a>

                              <motion.div
                                   style={{
                                        left: titlesixthCom,
                                   }}
                                   className=" w-full h-[50vh] fixed top-[50%] z-[9]  flex flex-col gap-[0rem] justify-center items-center"
                              >
                                   <p className=" lg:text-[6rem] md:text-[5rem] font-bold">
                                        {companies[5].name}
                                   </p>
                                   <p className=" lg:text-[1rem] md:text-[0.7rem]  w-[40%] text-center">
                                        Product Design, UIUX Design, Branding,
                                        Visual Design, Art Direction, Concept
                                        Design for Spotify
                                   </p>
                              </motion.div>
                         </div>
                         {/* companies seventh */}
                         <div
                              className=" w-full h-[400vh] flex flex-col justify-center items-center "
                              ref={seventhComRef}
                         >
                              <motion.a
                                   href="https://google.com"
                                   target="blank"
                                   style={{
                                        top: imagetopseventh,
                                        left: "50%",
                                        x: "-50%",
                                   }}
                                   className=" w-[81vh] h-[81vh] bg-red-700 rounded-[10vh] fixed overflow-hidden z-[8]"
                              >
                                   <Image
                                        src={companies[6].image}
                                        fill
                                        objectFit="cover"
                                   />
                              </motion.a>

                              <motion.div
                                   style={{
                                        left: titleseventhCom,
                                   }}
                                   className=" w-full h-[50vh] fixed top-[50%] z-[9]  flex flex-col gap-[0rem] justify-center items-center"
                              >
                                   <p className=" lg:text-[6rem] md:text-[5rem] font-bold">
                                        {companies[6].name}
                                   </p>
                                   <p className=" lg:text-[1rem] md:text-[0.7rem]  w-[40%] text-center">
                                        Product Design, UIUX Design, Branding,
                                        Visual Design, Art Direction, Concept
                                        Design for Spotify
                                   </p>
                              </motion.div>
                         </div>
                    </div>
               </div>
          </>
     );
};

export default Companies;
