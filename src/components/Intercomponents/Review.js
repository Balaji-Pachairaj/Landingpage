"useclient";
import React, { useRef } from "react";
import SingleCompanies from "./SingleCompanies";
import { motion, useScroll, useTransform } from "framer-motion";

const Review = () => {
     const firstComRef = useRef();

     const firstComUseScroll = useScroll({
          target: firstComRef,
          offset: ["0 1", "1 0.5"],
     });

     const xfirstCom = useTransform(
          firstComUseScroll.scrollYProgress,
          [0, 1],
          ["0%", "-100%"]
     );

     const scaleFirstCom = useTransform(
          firstComUseScroll.scrollYProgress,
          [0, 0.4, 1],
          [1, 1, 0.6]
     );

     //-------------------------------------------------------------

     const secondComRef = useRef();

     const secondComUseScroll = useScroll({
          target: secondComRef,
          offset: ["0 1", "1 0.5"],
     });

     const xsecondCom = useTransform(
          secondComUseScroll.scrollYProgress,
          [0, 0.5, 1],
          ["100%", "0%", "-100%"]
     );

     const scalesecondCom = useTransform(
          secondComUseScroll.scrollYProgress,
          [0, 0.5, 0.7, 0.85, 1],
          [1, 1, 0.8, 0.6, 0.4]
     );

     //-------------------------------------------------------------
     //-------------------------------------------------------------

     const thirdComRef = useRef();

     const thirdComUseScroll = useScroll({
          target: thirdComRef,
          offset: ["0 1", "1 0.5"],
     });

     const xthirdCom = useTransform(
          thirdComUseScroll.scrollYProgress,
          [0, 0.5, 1],
          ["100%", "0%", "-100%"]
     );

     const scalethirdCom = useTransform(
          thirdComUseScroll.scrollYProgress,
          [0, 0.5, 0.7, 0.85, 1],
          [1, 1, 0.8, 0.6, 0.4]
     );

     //-------------------------------------------------------------
     //-------------------------------------------------------------

     const fourthComRef = useRef();

     const fourthComUseScroll = useScroll({
          target: fourthComRef,
          offset: ["0 1", "1 0.5"],
     });

     const xfourthCom = useTransform(
          fourthComUseScroll.scrollYProgress,
          [0, 0.5, 1],
          ["100%", "0%", "-100%"]
     );

     const scalefourthCom = useTransform(
          fourthComUseScroll.scrollYProgress,
          [0, 0.5, 0.7, 0.85, 1],
          [1, 1, 0.8, 0.6, 0.4]
     );

     //-------------------------------------------------------------
     //-------------------------------------------------------------

     const lastbeforeComRef = useRef();

     const lastbeforeComUseScroll = useScroll({
          target: lastbeforeComRef,
          offset: ["0 1", "1 0.5"],
     });

     const xlastbeforeCom = useTransform(
          lastbeforeComUseScroll.scrollYProgress,
          [0, 0.5, 1],
          ["100%", "0%", "-100%"]
     );

     const scalelastbeforeCom = useTransform(
          lastbeforeComUseScroll.scrollYProgress,
          [0, 0.5, 0.7, 0.85, 1],
          [1, 1, 0.8, 0.6, 0.4]
     );

     //-------------------------------------------------------------
     //-------------------------------------------------------------

     const lastComRef = useRef();

     const lastComUseScroll = useScroll({
          target: lastComRef,
          offset: ["0 1", "1 0.5"],
     });

     const xlastCom = useTransform(
          lastComUseScroll.scrollYProgress,
          [0, 0.5, 1],
          ["100%", "0%", "0%"]
     );

     const scalelastCom = useTransform(
          lastComUseScroll.scrollYProgress,
          [0, 0.5, 1],
          [1, 1, 1]
     );

     //-------------------------------------------------------------

     const fullref = useRef();

     const fullUseScroll = useScroll({
          target: fullref,

          offset: ["0 0.5", "1 0.5"],
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
          let color7 = [171, 52, 40];
          let color1 = [256, 256, 256];
          //rgb(209, 195, 122);
          let color2 = [209, 195, 122];
          //rgb(5, 47, 95);
          let color3 = [5, 47, 95];
          //rgb(1, 8, 16)
          let color4 = [1, 8, 16];
          //rgb(123, 119, 110);
          let color5 = [123, 119, 110];
          //rgb(237, 161, 9)
          let color6 = [256, 256, 256];
          //   let color6 = [237, 161, 9];

          let position = pos * 100;

          let totalslice = 6;

          let ifpass = 100 / totalslice;

          let passpositionpass = position * totalslice;

          console.log(ifpass);

          if (pos == 1) {
               return "rgb(256,256,256 )";
          }

          if (position <= ifpass * 1) {
               let passposition = (position - ifpass * 0) * totalslice;
               let p1 = colorchanged(color1[0], color2[0], passposition);
               let p2 = colorchanged(color1[1], color2[1], passposition);
               let p3 = colorchanged(color1[2], color2[2], passposition);

               let o = "rgb(" + p1 + "," + p2 + ", " + p3 + ")";

               console.log(o);

               return o;
          }

          if (position <= ifpass * 2) {
               let passposition = (position - ifpass * 1) * totalslice;
               let p1 = colorchanged(color2[0], color3[0], passposition);
               let p2 = colorchanged(color2[1], color3[1], passposition);
               let p3 = colorchanged(color2[2], color3[2], passposition);

               let o = "rgb(" + p1 + "," + p2 + ", " + p3 + ")";

               console.log(o);
               return o;
          }

          if (position <= ifpass * 3) {
               let passposition = (position - ifpass * 2) * totalslice;
               let p1 = colorchanged(color3[0], color4[0], passposition);
               let p2 = colorchanged(color3[1], color4[1], passposition);
               let p3 = colorchanged(color3[2], color4[2], passposition);

               let o = "rgb(" + p1 + "," + p2 + ", " + p3 + ")";

               console.log(o);
               return o;
          }

          if (position <= ifpass * 4) {
               let passposition = (position - ifpass * 3) * totalslice;
               let p1 = colorchanged(color4[0], color5[0], passposition);
               let p2 = colorchanged(color4[1], color5[1], passposition);
               let p3 = colorchanged(color4[2], color5[2], passposition);

               let o = "rgb(" + p1 + "," + p2 + ", " + p3 + ")";

               console.log(o);
               return o;
          }

          if (position <= ifpass * 5) {
               let passposition = (position - ifpass * 4) * totalslice;
               let p1 = colorchanged(color5[0], color6[0], passposition);
               let p2 = colorchanged(color5[1], color6[1], passposition);
               let p3 = colorchanged(color5[2], color6[2], passposition);

               let o = "rgb(" + p1 + "," + p2 + ", " + p3 + ")";

               console.log(o);
               return o;
          }
     });

     return (
          <>
               <div className=" w-full min-h-screen lg:block hidden">
                    <motion.div
                         style={{
                              backgroundColor: color,
                         }}
                         className=" sticky top-0  w-full h-screen overflow-hidden   "
                    >
                         <div className="w-full h-full ">
                              <SingleCompanies
                                   style={{
                                        y: "-50%",
                                        x: xfirstCom,
                                        scale: scaleFirstCom,
                                   }}
                              />
                              <SingleCompanies
                                   style={{
                                        y: "-50%",
                                        x: xsecondCom,
                                        scale: scalesecondCom,
                                   }}
                              />
                              <SingleCompanies
                                   style={{
                                        y: "-50%",
                                        x: xthirdCom,
                                        scale: scalethirdCom,
                                   }}
                              />
                              <SingleCompanies
                                   style={{
                                        y: "-50%",
                                        x: xfourthCom,
                                        scale: scalefourthCom,
                                   }}
                              />
                              <SingleCompanies
                                   style={{
                                        y: "-50%",
                                        x: xlastbeforeCom,
                                        scale: scalelastbeforeCom,
                                   }}
                              />
                              <SingleCompanies
                                   style={{
                                        y: "-50%",
                                        x: xlastCom,
                                        scale: scalelastCom,
                                   }}
                              />
                              <SingleCompanies
                                   style={{
                                        y: "-50%",
                                        x: xthirdCom,
                                        scale: scalethirdCom,
                                   }}
                              />
                              <SingleCompanies
                                   style={{
                                        y: "-50%",
                                        x: xfourthCom,
                                        scale: scalefourthCom,
                                   }}
                              />
                         </div>
                    </motion.div>

                    <div className="w-full h-[20rem] "></div>

                    <div ref={fullref}>
                         <div className="w-full h-screen">
                              <div
                                   ref={firstComRef}
                                   className="w-full h-[50%] "
                              ></div>
                              <div
                                   ref={secondComRef}
                                   className="w-full h-[50%]  "
                              ></div>
                         </div>

                         <div className="w-full h-screen">
                              <div
                                   ref={thirdComRef}
                                   className="w-full h-[50%] "
                              ></div>
                              <div
                                   ref={fourthComRef}
                                   className="w-full h-[50%]  "
                              ></div>
                         </div>

                         <div className="w-full h-screen">
                              <div
                                   ref={lastbeforeComRef}
                                   className="w-full h-[50%] "
                              ></div>
                              <div
                                   ref={lastComRef}
                                   className="w-full h-[50%]  "
                              ></div>
                         </div>
                    </div>
                    <div className="w-full h-[30rem] "></div>
               </div>
          </>
     );
};

export default Review;
