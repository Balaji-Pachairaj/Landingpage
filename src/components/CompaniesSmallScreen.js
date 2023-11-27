"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const SingleCom = ({ src }) => {
     return (
          <div className=" w-full h-screen flex flex-col justify-center items-center ">
               <a
                    href="https://google.com"
                    target="blank"
                    className=" w-[80vw] h-[80vw]  rounded-[10vw]  relative overflow-hidden "
               >
                    <Image
                         loader={() => src}
                         src={src}
                         fill
                         objectFit="cover"
                    />
               </a>
               <div className=" ps-[7%] pe-[7%] text-center text-[7vw] font-bold mt-[1rem]">
                    PROJECT NAME
               </div>
               <p className=" lg:text-[1rem] md:text-[0.7rem]  w-[40%] text-center">
                    Product Design, UIUX Design, Branding, Visual Design, Art
                    Direction, Concept Design for Spotify
               </p>
          </div>
     );
};

const CompaniesSmallScreen = () => {
     const src =
          "https://uploads-ssl.webflow.com/64aad5363e57b0b9435969ee/64cf952cd3768d39b73fd34a_prj1.jpg";
     const src2 =
          "https://uploads-ssl.webflow.com/64aad5363e57b0b9435969ee/64cfb9202dbb743b41b100a1_prj2.jpg";

     const src3 =
          "https://uploads-ssl.webflow.com/64aad5363e57b0b9435969ee/64caeb97f6e7d3c0a304fc6a_Prjcs.jpg";

     const src4 =
          "https://uploads-ssl.webflow.com/64aad5363e57b0b9435969ee/64af041f8c844012c92b94ec_pr4.jpg";

     //-----------------------------------------------------------------------------------
     ///-----------------------------------------------------

     const fullRef = useRef();

     const fullUseScroll = useScroll({
          target: fullRef,
          offset: ["0 0.5", "1 1"],
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
          let color6 = [0, 0, 0];
          let color7 = [0, 0, 0];

          //255, 182, 193
          let color8 = [255, 182, 193];
          let color9 = [256, 256, 256];

          let position = pos * 100;

          let totalslice = 8;

          let ifpass = 100 / totalslice;

          let passpositionpass = position * totalslice;

          console.log(ifpass);

          //   if (pos == 1) {
          //        return "rgb(0,0,0 )";
          //   }

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

          //---------------------------------------

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

          //-----------------------------------------------------------

          if (position <= ifpass * 5) {
               let passposition = (position - ifpass * 4) * totalslice;
               let p1 = colorchanged(color5[0], color6[0], passposition);
               let p2 = colorchanged(color5[1], color6[1], passposition);
               let p3 = colorchanged(color5[2], color6[2], passposition);

               let o = "rgb(" + p1 + "," + p2 + ", " + p3 + ")";

               console.log(o);
               return o;
          }

          if (position <= ifpass * 6) {
               let passposition = (position - ifpass * 5) * totalslice;
               let p1 = colorchanged(color6[0], color7[0], passposition);
               let p2 = colorchanged(color6[1], color7[1], passposition);
               let p3 = colorchanged(color6[2], color7[2], passposition);

               let o = "rgb(" + p1 + "," + p2 + ", " + p3 + ")";

               console.log(o);
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

     return (
          <div className=" w-full lg:hidden  ">
               <div className="w-full sm:h-[50vh] h-[2rem] "></div>
               <motion.div
                    style={{
                         backgroundColor: color,
                    }}
                    className=" lg:hidden text-center  w-full h-[80vh] flex flex-row justify-center items-center lg:text-[10rem] md:text-[8rem] sm:text-[6rem] text-[3rem] ps-[3%] pe-[3%] "
               >
                    OUR COMPANIES
               </motion.div>

               <motion.div
                    style={{
                         backgroundColor: color,
                    }}
                    className=" w-full gap-[8rem] flex flex-col "
                    ref={fullRef}
               >
                    <SingleCom src={src} />
                    <SingleCom src={src2} />
                    <SingleCom src={src3} />
                    <SingleCom src={src4} />

                    <div className="w-full h-[50vh]"></div>
               </motion.div>
          </div>
     );
};

export default CompaniesSmallScreen;
