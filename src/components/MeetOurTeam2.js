import React from "react";
import MeetAnimation from "./Intercomponents/MeetAnimation";
import MeetAnimation2 from "./Intercomponents/MeetAnimation2";

const MeetOurTeam2 = () => {
     return (
          <>
               <div className=" w-full h-[5vw] bg-white"></div>
               {/* <div className=" w-full h-min  bg-white">
                    <h2 className=" w-full text-center font-poppins text-[40px]">
                         Meet Our Team
                    </h2>
                    <p className=" mt-[1%] ps-[7%] pe-[7%] lg:text-[16px] text-[14px] lg:leading-[30px] leading-[16px]">
                         At our dental practice, we have a dedicated team of
                         highly skilled and compassionate professionals who are
                         committed to providing exceptional dental care. Get to
                         know our team of experts who will ensure that you
                         receive the highest standard of treatment and
                         personalized care
                    </p>
               </div> */}{" "}
               <div
                    id="meetourteam"
                    className=" w-full h-[40vh] flex flex-col justify-center  bg-white"
               >
                    <h1 className="  bg-dharangradient text-transparent bg-clip-text text-center   flex-shrink-0 lg:text-[6rem] md:text-[6rem] sm:text-[4rem] text-[2rem]   font-[600] ">
                         Meet Our Team
                    </h1>
               </div>
               <div className=" w-full h-[1vw] bg-white"></div>
               <MeetAnimation />
               <MeetAnimation2 />
          </>
     );
};

export default MeetOurTeam2;
