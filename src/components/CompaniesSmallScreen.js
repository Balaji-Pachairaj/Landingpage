"use client";
import { companies } from "@/asset/companies";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const SingleCom = ({ src, name, textcolor, link }) => {
     return (
          <div className=" w-full h-screen flex flex-col justify-center items-center ">
               <a
                    href={link}
                    target="blank"
                    className=" w-[80vw] h-[80vw]  rounded-[10vw]  relative overflow-hidden "
               >
                    <Image src={src} fill objectFit="cover" />
               </a>
               <motion.div
                    style={{
                         color: textcolor,
                    }}
                    className=" ps-[7%] pe-[7%] text-center text-[3.5vw] font-semibold mt-[1rem]"
               >
                    {name}
               </motion.div>
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

        //  console.log(c1, c2, returnvalue, percentage);

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
               return "rgb(0,0, 0 )";
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

               // console.log(o);
               return o;
          }

          if (position <= ifpass * 8) {
               let passposition = (position - ifpass * 7) * totalslice;
               let p1 = colorchanged(color8[0], color9[0], passposition);
               let p2 = colorchanged(color8[1], color9[1], passposition);
               let p3 = colorchanged(color8[2], color9[2], passposition);

               let o = "rgb(" + p1 + "," + p2 + ", " + p3 + ")";

               // console.log(o);
               return o;
          }
          if (position <= ifpass * 9) {
               let passposition = (position - ifpass * 8) * totalslice;
               let p1 = colorchanged(color9[0], color10[0], passposition);
               let p2 = colorchanged(color9[1], color10[1], passposition);
               let p3 = colorchanged(color9[2], color10[2], passposition);

               let o = "rgb(" + p1 + "," + p2 + ", " + p3 + ")";

               // console.log(o);
               return o;
          }
          if (position <= ifpass * 10) {
               let passposition = (position - ifpass * 9) * totalslice;
               let p1 = colorchanged(color10[0], color11[0], passposition);
               let p2 = colorchanged(color10[1], color11[1], passposition);
               let p3 = colorchanged(color10[2], color11[2], passposition);

               let o = "rgb(" + p1 + "," + p2 + ", " + p3 + ")";

               // console.log(o);
               return o;
          }
          if (position <= ifpass * 11) {
               let passposition = (position - ifpass * 10) * totalslice;
               let p1 = colorchanged(color11[0], color12[0], passposition);
               let p2 = colorchanged(color11[1], color12[1], passposition);
               let p3 = colorchanged(color11[2], color12[2], passposition);

               let o = "rgb(" + p1 + "," + p2 + ", " + p3 + ")";

               // console.log(o);
               return o;
          }
          if (position <= ifpass * 12) {
               let passposition = (position - ifpass * 11) * totalslice;
               let p1 = colorchanged(color12[0], color13[0], passposition);
               let p2 = colorchanged(color12[1], color13[1], passposition);
               let p3 = colorchanged(color12[2], color13[2], passposition);

               let o = "rgb(" + p1 + "," + p2 + ", " + p3 + ")";

               // console.log(o);
               return o;
          }
          if (position <= ifpass * 13) {
               let passposition = (position - ifpass * 12) * totalslice;
               let p1 = colorchanged(color13[0], color14[0], passposition);
               let p2 = colorchanged(color13[1], color14[1], passposition);
               let p3 = colorchanged(color13[2], color14[2], passposition);

               let o = "rgb(" + p1 + "," + p2 + ", " + p3 + ")";

               // console.log(o);
               return o;
          }
          if (position <= ifpass * 14) {
               let passposition = (position - ifpass * 13) * totalslice;
               let p1 = colorchanged(color14[0], color15[0], passposition);
               let p2 = colorchanged(color14[1], color15[1], passposition);
               let p3 = colorchanged(color14[2], color15[2], passposition);

               let o = "rgb(" + p1 + "," + p2 + ", " + p3 + ")";

               // console.log(o);
               return o;
          }
     });

     return (
          <div className=" w-full lg:hidden  ">
               {/* <div className="w-full sm:h-[50vh] h-[2rem] bg-white "></div> */}
               <motion.div
                    style={{
                         backgroundColor: "black",
                    }}
                    id="companiessmallscreen"
                    className=" lg:hidden text-center  w-full h-[80vh] flex flex-row justify-center items-center lg:text-[10rem] md:text-[8rem] sm:text-[6rem] text-[3rem] ps-[3%] pe-[3%] "
               >
                    <h1 className=" bg-dharangradient text-transparent bg-clip-text">
                         OUR COMPANIES
                    </h1>
               </motion.div>

               <motion.div
                    style={{
                         backgroundColor: "black",
                    }}
                    className=" w-full gap-[8rem] flex flex-col "
                    ref={fullRef}
               >
                    <SingleCom
                         src={companies[0].image}
                         name={companies[0].name}
                         textcolor={companies[0].textcolor}
                         link={companies[0].link}
                    />
                    <SingleCom
                         src={companies[1].image}
                         name={companies[1].name}
                         textcolor={companies[1].textcolor}
                         link={companies[1].link}
                    />
                    <SingleCom
                         src={companies[2].image}
                         name={companies[2].name}
                         textcolor={companies[2].textcolor}
                         link={companies[2].link}
                    />
                    <SingleCom
                         src={companies[3].image}
                         name={companies[3].name}
                         textcolor={companies[3].textcolor}
                         link={companies[3].link}
                    />
                    <SingleCom
                         src={companies[4].image}
                         name={companies[4].name}
                         textcolor={companies[4].textcolor}
                         link={companies[4].link}
                    />
                    <SingleCom
                         src={companies[5].image}
                         name={companies[5].name}
                         textcolor={companies[5].textcolor}
                         link={companies[5].link}
                    />
                    <SingleCom
                         src={companies[6].image}
                         name={companies[6].name}
                         textcolor={companies[6].textcolor}
                         link={companies[6].link}
                    />

                    <div className="w-full h-[50vh]"></div>
               </motion.div>
          </div>
     );
};

export default CompaniesSmallScreen;
