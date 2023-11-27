"useclient";
import React from "react";

import Review from "./Intercomponents/Review";
import ReviewSmallerScreen from "./Intercomponents/ReviewSmallerScreen";

const Timeline = () => {
     return (
          <>
               <div className=" w-full min-h-[5rem] flex lg:flex-row flex-col justify-center ps-[5%] pe-[5%] bg-[#fff] ">
                    {/* <div className="lg:w-[60%] w-[100%] ps-[5%] pe-[5%] lg:p-0  border-1 text-white lg:text-[5rem] sm:text[42px] text-[7.2vh] font-extrabold font-syne  lg:leading-[7.5rem] sm:leading-[60px] leading-[10vh]">
                         Creative Art Direction, Marketing & Photography
                    </div>
                    <div className=" lg:w-[40%] flex flex-col md:gap-[3rem] gap-[2rem] md:mt-[2rem] mt-[1.5rem]">
                         <div className="w-full ps-[5%] pe-[5%] md:text-[28px] text-[24px]">
                              Zaddle is an agency/portfolio template for
                              creative agencies or freelancers looking to
                              showcase their work in a stylish and interactive
                              way.
                         </div>
                         <div className="w-full ps-[5%] pe-[5%] md:text-[28px] text-[22px] text-[#f5ee9e]">
                              Purchase this template for only $49 USD, customize
                              to your brand, and start impressing future
                              clientele.
                         </div>
                    </div> */}
               </div>
               <Review />
               <ReviewSmallerScreen />
          </>
     );
};

export default Timeline;
