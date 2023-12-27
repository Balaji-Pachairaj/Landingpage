import React from "react";
import TextOurTeamCom from "./Intercomponents/TextOurTeamCom";
import { dharan, teammember } from "@/asset/companies";
import Image from "next/image";

const Container = ({ team }) => {
     return (
          <div className=" md:w-[30%] w-[45%] h-[55vh]  relative  rounded-[10px] overflow-hidden">
               {team && <Image src={team.image} fill objectPosition="cover" />}
          </div>
     );
};

const MeetOurTeamMobile = () => {
     return (
          <>
          
               <div className=" w-full min-h-screen bg-black flex  gap-y-4 flex-wrap flex-row justify-evenly lg:hidden ">
                    {/* <div className=" w-[30%] h-[55vh] relative bg-blue-300">
                         <Image
                              src={teammember[0].image}
                              fill
                              objectPosition="cover"
                         />
                    </div> */}
                    <Container team={teammember[0]} />
                    <Container team={teammember[1]} />
                    <Container team={teammember[2]} />
                    <Container team={teammember[3]} />
                    <Container team={teammember[2]} />
                    <Container team={teammember[3]} />
                    <Container team={dharan} />
                    <Container team={false} />
                    <Container team={false} />
               </div>
          </>
     );
};

export default MeetOurTeamMobile;
