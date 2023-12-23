import Pattern11SVG from "@/asset/pattern/Pattern11SVG";
import Pattern12SVG from "@/asset/pattern/Pattern12SVG";
import React from "react";

const ParagraphTextSection = () => {
     return (
          <div className="w-full h-screen bg-[#000]  flex flex-col justify-center relative">
               <div className=" w-full h-full  absolute flex flex-row justify-between overflow-hidden ">
                    <div className=" md:w-[50%] w-[45%]  h-full">
                         <Pattern11SVG />
                    </div>
                    <div className=" md:w-[50%] w-[45%] h-full">
                        <Pattern12SVG />
                    </div>
               </div>
               <h1 className=" md:p-8 p-4 z-50 lg:text-[60px] md:text-[50px] sm:text-[40px] text-[30px] font-[600] lg:leading-[80px] md:leading-[78px] sm:leading-[66px] leading-[54px] text-[#fff]">
                    With Transparency, Integrity and Commitment, Dharan elevates
                    the lives of people and brings impact to the world through
                    its universe of companies.
               </h1>
          </div>
     );
};

export default ParagraphTextSection;
