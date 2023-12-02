import React from "react";
import dlogo from "../../public/images/dlogo.png";
import Image from "next/image";
const EnrichingsectionSmallScreen = () => {
     return (
          <div className=" lg:hidden w-full bg-black"   id = "enrichsmallscreen">
               <div className=" w-full min-h-screen "></div>
               <div className=" w-full min-h-screen text-white  flex flex-col justify-evenly items-center z-[100] ">
                    <div className="w-full h-max">
                         <p className="  text-[10vw] text-center font-bold bg-whitelight text-transparent bg-clip-text">
                              Enriching Life
                         </p>
                    </div>
                    <div classname=" w-max h-max ">
                         <div className="  w-[25vw] h-[25vw] relative">
                              <Image src={dlogo} fill objectFit="cover" />
                         </div>
                    </div>
                    <div className="w-full h-max">
                         <p className="  text-[10vw] text-center font-bold  bg-whitelight text-transparent bg-clip-text">
                              Lives
                         </p>
                    </div>
               </div>
               <div className=" w-full  ps-[10vw] pe-[10vw] text-[5vw] font-bold bg-whitelight text-transparent bg-clip-text ">
                    With Transparency, Integrity and Commitment, Dharan elevates
                    the lives of people and brings impact to the world through
                    its universe of companies.
               </div>
               <div className=" w-full lg:h-[30vh] h-[10vh] "></div>
          </div>
     );
};

export default EnrichingsectionSmallScreen;
