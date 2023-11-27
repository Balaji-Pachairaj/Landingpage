"useclient";
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

     const detailfourthCom = useTransform(
          fourthComUseScroll.scrollYProgress,
          [0, 0.1, 0.6],
          ["100%", "100%", "-100%"]
     );
     const titlefourthCom = useTransform(
          fourthComUseScroll.scrollYProgress,
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
          if (c1 == c2) return;
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
          let color2 = [255, 143, 64];
          let color3 = [255, 143, 64];
          //rgb(144, 238, 144)
          let color4 = [144, 238, 144];
          let color5 = [144, 238, 144];
          //rgb(123, 119, 110);
          let color6 = [256, 256, 256];
          let color7 = [256, 256, 256];

          //255, 182, 193
          let color8 = [255, 182, 193];
          let color9 = [256, 256, 256];

          let position = pos * 100;

          let totalslice = 8;

          let ifpass = 100 / totalslice;

          let passpositionpass = position * totalslice;

          //   if (pos == 1) {
          //        return "rgb(0,0,0 )";
          //   }

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
     });

     const zindexfull = useTransform(
          fourthComUseScroll.scrollYProgress,
          [0, 0.9, 1],
          ["0%", "0%", "-100%"]
     );

     return (
          <>
               <motion.div
                    style={{
                         top: zindexfull,
                    }}
                    className=" lg:block  hidden w-full h-screen  lg:text-[20rem] md:text-[15rem] sm:text-[12rem] text-[7rem]  z-[5] fixed top-0 overflow-hidden bg-white "
               >
                    <motion.div
                         style={{
                              zIndex: zindexfull,
                              scale: scaleWorkUseScroll,
                              backgroundColor: color,
                         }}
                         className=" text-center w-full h-full flex flex-row justify-center lg:text-[10rem] md:text-[8rem] sm:text-[6rem] text-[5rem] "
                    >
                         OUR COMPANIES
                    </motion.div>
               </motion.div>
               <div
                    ref={workRef}
                    className=" lg:block hidden w-full min-h-screen "
               ></div>

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
                                   loader={() => src}
                                   src={src}
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
                                   PROJECT NAME
                              </p>
                              <p className=" lg:text-[1rem] md:text-[0.7rem]  w-[40%] text-center">
                                   Product Design, UIUX Design, Branding, Visual
                                   Design, Art Direction, Concept Design for
                                   Spotify
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
                                   loader={() => src2}
                                   src={src2}
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
                                   PROJECT NAME
                              </p>
                              <p className=" lg:text-[1rem] md:text-[0.7rem]  w-[40%] text-center">
                                   Product Design, UIUX Design, Branding, Visual
                                   Design, Art Direction, Concept Design for
                                   Spotify
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
                                   loader={() => src3}
                                   src={src3}
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
                                   PROJECT NAME
                              </p>
                              <p className=" lg:text-[1rem] md:text-[0.7rem]  w-[40%] text-center">
                                   Product Design, UIUX Design, Branding, Visual
                                   Design, Art Direction, Concept Design for
                                   Spotify
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
                                   loader={() => src4}
                                   src={src4}
                                   fill
                                   objectFit="cover"
                              />
                         </motion.a>

                         {/* <motion.div
                              style={{
                                   left: detailfourthCom,
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
                                   left: titlefourthCom,
                              }}
                              className=" w-full h-[50vh] fixed top-[50%] z-[9]  flex flex-col gap-[0rem] justify-center items-center"
                         >
                              <p className=" lg:text-[6rem] md:text-[5rem] font-bold">
                                   PROJECT NAME
                              </p>
                              <p className=" lg:text-[1rem] md:text-[0.7rem]  w-[40%] text-center">
                                   Product Design, UIUX Design, Branding, Visual
                                   Design, Art Direction, Concept Design for
                                   Spotify
                              </p>
                         </motion.div>
                    </div>
               </div>
          </>
     );
};

export default Companies;
