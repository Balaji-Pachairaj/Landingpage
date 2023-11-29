import React, { useRef } from "react";

import Image from "next/image";

import timeLine2007one from "../../public/timeline/timeline-2007-1.jpg";
import timeLine2010one from "../../public/timeline/timeline-2010-1.jpg";
import timeLine2010two from "../../public/timeline/timeline-2010-2.jpg";
import timeLine2015one from "../../public/timeline/timeline-2015-1.jpg";
import timeLine2015two from "../../public/timeline/timeline-2015-2.jpg";
import timeLine2016one from "../../public/timeline/timeline-2016-1.jpg";
import timeLine2016two from "../../public/timeline/timeline-2016-2.jpg";
import timeLine2018one from "../../public/timeline/timeline-2018-1.jpg";
import timeLine2019one from "../../public/timeline/timeline-2019-1.jpg";
import timeLine2020one from "../../public/timeline/timeline-2020-1.png";
import timeLine202015one from "../../public/timeline/timeline-2020-15-1.jpg";
import timeLine202015two from "../../public/timeline/timeline-2020-15-2.jpg";
import { useScroll, motion, useTransform } from "framer-motion";

const ScrollerTime = () => {
     return (
          <div className=" md:w-[100px] sm:w-[90px] w-[80px]  flex flex-row justify-center pt-4">
               <div className=" md:w-[48px] md:h-[48px]  w-[24px] h-[24px] bg-[#fff] rounded-[50%] z-[12] sticky top-[50vh] flex flex-col justify-center items-center">
                    <div className=" w-[50%] h-[50%] rounded-[50%] bg-dharangradient"></div>
               </div>
          </div>
     );
};
const TimeImageCard = (props) => {
     return (
          <div className="relative ms-4 md:mt-6 mt-4 w-[90%] lg:h-[320px] md:h-[240px] sm:h-[240px] h-[200px] md:gap-8 gap-4  lg:rounded-[28px] md:rounded-[22px] sm:rounded-[16px] rounded-[14px] overflow-hidden bg-[#D9D9D9]">
               {props.children}
          </div>
     );
};

const TimeLineText = (props) => {
     return (
          <p
               style={{ fontFamily: "Poppins" }}
               className=" text-[#fff] md:text-[18px]  text-[18px] font-Poppins ps-6 lg:pe-6 pe-2 mt-4"
          >
               {props.children}
          </p>
     );
};

const TimeLineComponent = (props) => {
     return (
          <div className=" flex flex-row   md:justify-evenly justify-between md:pt-8 pt-4  ">
               <div className=" lg:w-[30%] md:w-[20%]  text-end pe-4 md:block hidden">
                    <p
                         style={{ fontFamily: "Poppins" }}
                         className=" text-white sticky top-[50vh] font-poppins  lg:text-[60px] md:text-[40px] sm:text-[60px] text-[40px] font-extrabold bg-textcolor text-transparent bg-clip-text  "
                    >
                         {props.time}
                    </p>
               </div>

               <ScrollerTime />

               <div className=" md:w-[50%] w-[85%] flex flex-col  items-start">
                    <div className=" w-full  text-start ps-4 block md:hidden mb-8">
                         <p
                              style={{ fontFamily: "Poppins" }}
                              className=" font-Poppins text-white  sm:text-[40px] text-[35px]  font-bold bg-textcolor text-transparent bg-clip-text  "
                         >
                              {props.time}
                         </p>
                    </div>
                    {props.children}
               </div>
          </div>
     );
};

const Timeline2 = () => {
     const seekTextRef = useRef(null);

     const seekTextRefUseScroll = useScroll({
          target: seekTextRef,
          offset: ["0 1", "1 0"],
     });

     const scaleSeekTextRef = useTransform(
          seekTextRefUseScroll.scrollYProgress,
          [0, 0.5, 1],
          [0, 1, 1]
     );

     const scaleLogo = useTransform(
          seekTextRefUseScroll.scrollYProgress,
          [0, 0.5, 1],
          [0, 1, 1]
     );

     const opacitySeekTextRef = useTransform(
          seekTextRefUseScroll.scrollYProgress,
          [0, 0.5, 0.8, 1],
          [1, 1, 0, 0]
     );

     return (
          <>
               <div
                    id="ourjourney"
                    className=" relative bg-dharangradient2 font-poppins"
               >
                    {/* <div className=" w-full min-h-screen ">
                         <motion.div
                              style={{
                                   x : "-50%",
                                   y: "-50%",
                              }}
                              className=" text-center   fixed top-[50%] left-[50%]  w-full  h-min"
                         >
                              <motion.h1 className=" sticky text-[60vw] font-thin">
                                   20
                              </motion.h1>
                         </motion.div>
                    </div> */}
                    {/* <div className=" w-full min-h-screen " ref={seekTextRef}>
                         <motion.div
                              className=" fixed top-[50%] left-[50%] w-full text-center"
                              style={{
                                //    opacity: opacitySeekTextRef,
                                //    scale: scaleSeekTextRef,
                                   y: "-50%",
                                   x: "-50%",
                              }}
                         >
                              <h1 className="  font-Poppins font-extrabold lg:text-[60px] md:text-[50px] sm:text-[40px] text-[24px]  bg-textcolor text-transparent bg-clip-text   ">
                                   Seeds to Skyscrapers
                              </h1>
                              <p className=" md:text-[24px] text-[16px] text-black font-Poppins ps-6 pe-6">
                                   pharetra diam sit amet nisl suscipit
                                   adipiscing bibendum est ultricies
                              </p>
                         </motion.div>
                    </div> */}
                    <div className=" w-full h-screen flex flex-col justify-center ">
                         <h1 className=" text-white text-center   flex-shrink-0 lg:text-[8rem] md:text-[6rem] sm:text-[4rem] text-[2rem]   font-[600] ">
                              OUR JOURNEY
                         </h1>
                    </div>
                    <div className=" w-full h-full flex flex-row justify-center items-center p-1 ">
                         <div className="  md:mt-[65px] mt-[50px] mb-[200px] w-full h-max flex flex-col gap-24 relative">
                              <div className=" md:w-[7px] w-[7px] h-full bg-white absolute  top-[25px] lg:left-[40%] md:left-[35%] sm:left-[45px] left-[38px] -translate-x-[50%] bg-textcolor rounded-[20px] z-10"></div>

                              <TimeLineComponent time={"2007"}>
                                   <>
                                        <TimeLineText>
                                             In the heart of Salem stood Dharan
                                             Hospital, a revolutionary
                                             Multispeciality Healthcare Hub,
                                             unveiled to the world on January
                                             22, 2007. With its 50-bed wonder
                                             and two cutting-edge operation
                                             theaters, this marvel was graced by
                                             the esteemed MLA Veerapandi V.
                                             RAJA, who added prestige to its
                                             grand inauguration, marking a
                                             historic moment in time
                                        </TimeLineText>

                                        <TimeImageCard>
                                             <Image
                                                  src={timeLine2007one}
                                                  objectFit="cover"
                                                  fill
                                             />
                                        </TimeImageCard>
                                   </>
                              </TimeLineComponent>

                              <TimeLineComponent time={"2010"}>
                                   <>
                                        <TimeLineText>
                                             In 2010, Dharan Natural Stone Park
                                             emerged as the visionary brainchild
                                             of industry veterans with two
                                             decades of expertise. With
                                             masterfully designed in-house
                                             operations and brands, they curated
                                             an exquisite array of niche quality
                                             products. Catering to the
                                             discerning 2nd Tier People in
                                             Western Districts of Tamil Nadu,
                                             the park offered an unparalleled
                                             opportunity to discover and procure
                                             national and international tiles,
                                             enriching their own spaces
                                        </TimeLineText>
                                        <TimeLineText>
                                             Dharan Hospital, once a humble
                                             facility, transformed into a
                                             state-of-the-art healthcare haven,
                                             accommodating 75 beds and equipped
                                             with four advanced operating
                                             theaters. The prestigious
                                             inauguration ceremony was graced by
                                             the honorable Mr. Veerapandi A.
                                             Arumugam, esteemed Agriculture
                                             Minister for Tamil Nadu, who also
                                             unveiled the exclusive CM Insurance
                                             scheme Ward, ensuring accessible
                                             healthcare for all.
                                        </TimeLineText>

                                        <TimeImageCard>
                                             <Image
                                                  src={timeLine2010one}
                                                  objectFit="cover"
                                                  fill
                                             />
                                        </TimeImageCard>
                                        <TimeImageCard>
                                             <Image
                                                  src={timeLine2010two}
                                                  objectFit="cover"
                                                  fill
                                             />
                                        </TimeImageCard>
                                   </>
                              </TimeLineComponent>

                              <TimeLineComponent time={"2015"}>
                                   <TimeLineText>
                                        Dharan Rock emerged from the culmination
                                        of over 25 years of hands-on experience
                                        in granite procurement and processing
                                        worldwide, meticulously orchestrated by
                                        Joint Managing Director Mr. V. Gunasekar
                                        and Director Mr. C. Venkatesan. Their
                                        visionary leadership paved the way for
                                        an exceptional journey that continues to
                                        leave an indelible mark in the
                                        industry's annals.
                                   </TimeLineText>
                                   <TimeImageCard>
                                        <Image
                                             src={timeLine2015one}
                                             objectFit="cover"
                                             fill
                                        />
                                   </TimeImageCard>
                                   <TimeImageCard>
                                        <Image
                                             src={timeLine2015two}
                                             objectFit="cover"
                                             fill
                                        />
                                   </TimeImageCard>
                              </TimeLineComponent>

                              <TimeLineComponent time={"2016"}>
                                   <TimeLineText>
                                        Dharan Hospital underwent a remarkable
                                        transformation, evolving into a
                                        state-of-the-art medical facility
                                        boasting 150 beds, 6 fully equipped
                                        operating theaters, and advanced
                                        amenities including CT scan, Cath Lab,
                                        ICU, ICCU, and NICU. This momentous
                                        occasion was graced by the esteemed
                                        presence of Mr. Eddappadi K.
                                        Palaniswami, then Honorable Highway
                                        Minister for Tamil Nadu, who inaugurated
                                        this groundbreaking milestone.
                                   </TimeLineText>
                                   <TimeImageCard>
                                        <Image
                                             src={timeLine2016one}
                                             objectFit="cover"
                                             fill
                                        />
                                   </TimeImageCard>
                                   <TimeImageCard>
                                        <Image
                                             src={timeLine2016two}
                                             objectFit="cover"
                                             fill
                                        />
                                   </TimeImageCard>
                              </TimeLineComponent>

                              <TimeLineComponent time={"2017"}>
                                   <TimeLineText>
                                        In the hallowed year of 2017, the
                                        esteemed Dharan Educational Charitable
                                        Trust (DECT) emerged, fostered by the
                                        gracious blessings of the venerable
                                        Shri. M. VENKATACHALAM and Smt.V.
                                        JAYAMMAL. A devoted management team,
                                        representing the revered Dharan Group,
                                        stood resolute as DECT's Life Trustees.
                                        As a testimony to their glorious decade
                                        of selfless healthcare, Dharan Hospital,
                                        sailing under the illustrious DECT
                                        banner, etched its indelible mark in the
                                        annals of DHARAN History.
                                   </TimeLineText>
                              </TimeLineComponent>

                              <TimeLineComponent time={"2018"}>
                                   <TimeLineText>
                                        On the 15th of July, 2018, Dharan
                                        Hospital proudly unveiled its inaugural
                                        'Centre of Excellence' known as DHARAN
                                        WOMENS CARE - FERTILITY CENTRE. This
                                        groundbreaking establishment surpassed
                                        Western standards, encompassing
                                        state-of-the-art facilities and
                                        infrastructures. The illustrious
                                        inauguration was graced by eminent
                                        industry leaders, etching a historic
                                        milestone in the annals of Salem's
                                        medical landscape.
                                   </TimeLineText>
                                   <TimeImageCard className="ms-4 md:mt-6 mt-4 w-[90%] lg:h-[320px] md:h-[240px] sm:h-[160px] h-[80px] md:gap-8 gap-4  rounded-md bg-[#D9D9D9]">
                                        <Image
                                             src={timeLine2018one}
                                             objectFit="cover"
                                             fill
                                        />
                                   </TimeImageCard>
                              </TimeLineComponent>
                              <TimeLineComponent time={"2019"}>
                                   <TimeLineText>
                                        Revolutionizing the realm of education,
                                        a groundbreaking initiative soared into
                                        existence as it unleashed a wave of
                                        Educational Institutes designed
                                        exclusively for nursing students.
                                        Empowering aspiring caregivers with
                                        knowledge and nurturing their passion,
                                        Dharan Health Institues under Dharan
                                        Educational Trust, blazed a path towards
                                        a brighter future, leaving an indelible
                                        mark on the realm of healthcare
                                        education
                                   </TimeLineText>
                                   <TimeImageCard>
                                        <Image
                                             src={timeLine2019one}
                                             objectFit="cover"
                                             fill
                                        />
                                   </TimeImageCard>
                              </TimeLineComponent>
                              <TimeLineComponent time={"2020"}>
                                   <TimeLineText>
                                        D-Ceramic, an exceptional unit within
                                        the esteemed Dharan Group, was
                                        ingeniously established as the Quality
                                        Budget Tiles (QBT0 Unit, embodying an
                                        exquisite array of multi-brand
                                        Floor/Wall Tiles and Bath Fittings.
                                        Showcasing an extensive range of models,
                                        boasting unparalleled quality, and
                                        offered at remarkably affordable prices,
                                        it proudly delivered unparalleled
                                        service both before and after purchase,
                                        emrged as an Salem’s Trusted Economical
                                        Showroom.
                                   </TimeLineText>
                                   <TimeImageCard>
                                        <Image
                                             src={timeLine2020one}
                                             objectFit="cover"
                                             fill
                                        />
                                   </TimeImageCard>
                              </TimeLineComponent>
                              <TimeLineComponent time={"15th Jan,2020"}>
                                   <TimeLineText>
                                        On the 15th of January, 2020, Dharan
                                        Hospital made a historic stride as it
                                        inaugurated its second 'Centre of
                                        Excellence' known as DHARAN CANCER
                                        SPECIALITY CENTRE. The distinguished
                                        honor of opening this remarkable
                                        facility was bestowed upon the esteemed
                                        Ex. Chief Minister of Tamil Nadu, Mr.
                                        Eddappadi K. Palaniswami. Pioneering the
                                        realm of cancer care, Dharan Hospital's
                                        first-of-its-kind Comprehensive Cancer
                                        Care Hospital in Salem emerged, boasting
                                        cutting-edge advancements such as "Radio
                                        Therapy," "PET CT Scan," and "SPECT
                                        Gamma Scan" that took the realm of
                                        medical technology to new heights
                                   </TimeLineText>
                                   <TimeImageCard>
                                        <Image
                                             src={timeLine202015one}
                                             objectFit="cover"
                                             fill
                                        />
                                   </TimeImageCard>
                                   <TimeImageCard>
                                        <Image
                                             src={timeLine202015two}
                                             objectFit="cover"
                                             fill
                                        />
                                   </TimeImageCard>
                              </TimeLineComponent>
                              <TimeLineComponent time={"2022"}>
                                   <TimeLineText>
                                        In a remarkable feat, Dharan unveiled
                                        the groundbreaking Rock Unit II,
                                        channeling its mastery towards handling
                                        an impressive load of 50 containers per
                                        month. Showcasing their prowess as
                                        world-leading exporters of majestic
                                        monuments, the team of skilled artisans,
                                        with an astounding 25 years of
                                        experience, spearheaded this
                                        extraordinary venture, leaving an
                                        indelible mark in the annals of
                                        excellence.
                                   </TimeLineText>
                              </TimeLineComponent>
                         </div>
                    </div>
               </div>
          </>
     );
};

export default Timeline2;

// <div className=" flex flex-row  md:justify-evenly justify-between pt-16 ">
// <div className=" w-[40%]  text-end pe-4 md:block hidden">
//      <p className=" sticky top-[50vh] font-Poppins lg:text-[80px] md:text-[70px] sm:text-[60px] text-[40px]  font-bold bg-textcolor text-transparent bg-clip-text  ">
//           {"2007"}
//      </p>
//      {/* <div className="w-[48px] pt-4 lg:h-[632px] md:h-[450px] sm:h-[300px] h-[250px] flex flex-row justify-center"></div> */}
// </div>

// {/* <div className=" md:w-[100px] sm:w-[90px] w-[80px]  flex flex-row justify-center pt-4">
//      <div className=" w-[48px] h-[48px] bg-slate-100 rounded-[50%] sticky top-[50vh]"></div>
// </div> */}
// <ScrollerTime />

// <div className=" md:w-[40%] w-[80%] flex flex-col  items-start">
//      <div className=" w-[40%]  text-start ps-4 pe-4 block md:hidden">
//           <p className=" sticky top-[50vh] font-Poppins lg:text-[80px] md:text-[70px] sm:text-[60px] text-[40px]  font-bold bg-textcolor text-transparent bg-clip-text  ">
//                {"2007"}
//           </p>
//           {/* <div className="w-[48px] pt-4 lg:h-[632px] md:h-[450px] sm:h-[300px] h-[250px] flex flex-row justify-center"></div> */}
//      </div>
//      <p className=" md:text-[24px] text-[18px] font-Poppins ps-6 pe-6">
//           A Chronological Saga of Unprecedented
//           Success by Our Group of Companies.
//      </p>

//      <div className="ms-4 md:mt-6 mt-4 w-[90%] lg:h-[320px] md:h-[240px] sm:h-[160px] h-[80px] md:gap-8 gap-4  rounded-md bg-[#D9D9D9]"></div>

// </div>
// </div>
