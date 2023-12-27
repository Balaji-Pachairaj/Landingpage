import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import dharan from "@/asset/footerdharanlogo.png";
import Image from "next/image";
const FooterCircle = () => {
     return (
          <div className="   lg:w-[125px] lg:h-[125px] md:w-[100px] md:h-[100px] sm:w-[75px] sm:h-[75px] w-[50px] h-[50px] bg-dharangradient rounded-full"></div>
     );
};

const FooterText = (props) => {
     return (
          <p className="  text-[#fff] lg:text-[40px] md:text-[24px] sm:text-[20px] text-[14px] font-Poppins font-bold truncate">
               {props.children}
          </p>
     );
};

const SmallBox = (props) => {
     return (
          <div className="p-1 lg:w-[700px] md:w-[500px] sm:w-[400px] w-[300px] border-2  border-gradientcolor rounded-[50px]   flex flex-row justify-center items-center">
               {props.children}
          </div>
     );
};
const BigBox = (props) => {
     return (
          <div className="p-1 lg:w-[900px] md:w-[700px] sm:w-[500px] w-[500px] border-2 border-gradientcolor rounded-[50px]  flex flex-row justify-center items-center">
               {props.children}
          </div>
     );
};

const Container = (props) => {
     return (
          <div className=" overflow-hidden lg:h-[150px] md:h-[120px] sm:h-[90px] h-[60px] relative">
               {props.children}
          </div>
     );
};

const FooterSection = () => {
     //--------------------------------------------------------
     const firstSectionRef = useRef();

     const firstSectionUseScroll = useScroll({
          target: firstSectionRef,
          offset: ["0 1", "0 0"],
     });

     const scaleFirstSection = useTransform(
          firstSectionUseScroll.scrollYProgress,
          [0, 1],
          [4, 1]
     );

     const topFirstSection = useTransform(
          firstSectionUseScroll.scrollYProgress,
          [0, 1],
          ["100%", "0"]
     );

     return (
          <>
               <div
                    className=" bg-[#000] w-full h-[10rem] font-bold font-poppins text-center"
                    ref={firstSectionRef}
               >
                    <div className=" w-full flex flex-col text-[24px] text-[#fff]">
                         <p>
                              Our culture is rooted in{" "}
                              <span className=" bg-dharangradient text-transparent bg-clip-text">
                                   respect{" "}
                              </span>{" "}
                              ,
                         </p>
                         <p>
                              <span className=" bg-dharangradient text-transparent bg-clip-text">
                                   honesty ,{" "}
                              </span>{" "}
                              and{" "}
                              <span className=" bg-dharangradient text-transparent bg-clip-text">
                                   a commitment{" "}
                              </span>{" "}
                              to drive
                         </p>
                         <p>
                              important change{" "}
                              <span className=" bg-dharangradient text-transparent bg-clip-text">
                                   globally.{" "}
                              </span>
                         </p>
                    </div>
               </div>
               <div className=" w-full h-[10vh] bg-[#000]"></div>
               <div className=" w-full overflow-x-hidden">
                    <motion.div className=" flex flex-col bg-[#000] relative">
                         <Container>
                              <div className="  flex flex-row absolute animate-slideleft1">
                                   <FooterCircle />
                                   <SmallBox>
                                        <FooterText>
                                             We prioritize integrity
                                        </FooterText>
                                   </SmallBox>

                                   <FooterCircle />
                                   <SmallBox>
                                        <FooterText>
                                             We are passionate
                                        </FooterText>
                                   </SmallBox>

                                   <FooterCircle />
                                   <SmallBox>
                                        <FooterText>
                                             We prioritize integrity
                                        </FooterText>
                                   </SmallBox>

                                   <FooterCircle />
                                   <SmallBox>
                                        <FooterText>
                                             We respect our customers
                                        </FooterText>
                                   </SmallBox>

                                   <FooterCircle />
                                   <SmallBox>
                                        <FooterText>
                                             Striving Excellence
                                        </FooterText>
                                   </SmallBox>
                              </div>
                         </Container>

                         <Container>
                              <div className=" absolute flex flex-row animate-slideright ">
                                   <FooterCircle />
                                   <BigBox>
                                        <FooterText>
                                             Empowering Through Innovation
                                        </FooterText>
                                   </BigBox>
                                   <FooterCircle />{" "}
                                   <SmallBox>
                                        <FooterText>WE ARE HUMANS</FooterText>
                                   </SmallBox>
                                   <FooterCircle />
                                   <BigBox>
                                        <FooterText>
                                             We respect our customers
                                        </FooterText>
                                   </BigBox>
                                   <FooterCircle />
                                   <SmallBox>
                                        <FooterText>
                                             We are passionate
                                        </FooterText>
                                   </SmallBox>
                                   <FooterCircle />
                                   <BigBox>
                                        <FooterText>
                                             Empowering Through Innovation
                                        </FooterText>
                                   </BigBox>
                              </div>
                         </Container>
                    </motion.div>
               </div>
               <div className=" w-full h-[10vh] bg-[#000]"></div>
               <div className=" w-full md:h-[50vh] h-[80vh] flex flex-col justify-between font-poppins bg-[#000]">
                    <div className=" w-full h-[80%] flex md:flex-row flex-col justify-between items-center">
                         <div className=" md:w-[25%]  w-[50%] md:h-[75%] h-[25%] flex flex-col  justify-center items-center relative">
                              <Image src={dharan} width="280px" height="300px" />
                         </div>
                         <div className=" md:w-[15%]  w-[50%] md:h-full h-[25%] flex flex-col text-[#fff]  justify-evenly lg:items-start items-center relative text-[24px]">
                              <a
                                   href="#companies"
                                   className="  scroll-m-5"
                                   style={{
                                        transition: " scroll-behavior 0.3s",
                                   }}
                              >
                                   Our Companies
                              </a>
                              {/* <a
                                   href="#companies"
                                   className=" lg:hidden  scroll-m-5"
                                   style={{
                                        transition: " scroll-behavior 0.3s",
                                   }}
                              >
                                   Our Companies
                              </a> */}
                              <a
                                   href="#ourjourney"
                                   className="  scroll-m-5"
                                   style={{
                                        transition: " scroll-behavior 0.3s",
                                   }}
                              >
                                   Our Journey
                              </a>
                         </div>
                         <div className=" md:w-[15%] w-[50%] md:h-full h-[25%] flex flex-col text-[#fff]  justify-evenly lg:items-start items-center relative text-[24px]">
                              <a
                                   href="#meetourteam"
                                   className="  scroll-m-5"
                                   style={{
                                        transition: " scroll-behavior 0.3s",
                                   }}
                              >
                                   Our Team
                              </a>
                              <a
                                   href="#contact"
                                   className="  scroll-m-5"
                                   style={{
                                        transition: " scroll-behavior 0.5s",
                                        transitionDuration: "5s",
                                   }}
                              >
                                   Contact
                              </a>
                         </div>

                         <div className=" md:w-[25%] w-[50%] md:h-full h-[25%] flex flex-col  justify-center items-center relative">
                              <div className=" w-full flex flex-row justify-center gap-[1rem]">
                                   <div className=" w-[48px] h-[48px] rounded-[50%]  shadow-socialborder cursor-pointer flex flex-row justify-center items-center">
                                        <FaFacebookF color="white" />
                                   </div>
                                   <div className=" w-[48px] h-[48px] rounded-[50%]  shadow-socialborder cursor-pointer flex flex-row justify-center items-center">
                                        <FaLinkedinIn color="white" />
                                   </div>
                                   <div className=" w-[48px] h-[48px] rounded-[50%]  shadow-socialborder cursor-pointer flex flex-row justify-center items-center">
                                        <FaInstagram color="white" />
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <div classname=" w-full h-[25vh] ps-[20vh]   bg-black text-[24px] text-center ">
                    <p className=" ps-[10vh] text-[#fff]">
                         2023 Dharan Group. All rights reserved
                    </p>
               </div>
          </>
     );
};

export default FooterSection;
