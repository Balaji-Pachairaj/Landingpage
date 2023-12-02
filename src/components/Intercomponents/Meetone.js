import Image from "next/image";
import { useState } from "react";

const Meetone = ({ content }) => {
     const src =
          "https://assets.website-files.com/647eff002a957f57cb330190/64a54c02dfd01f2800542e04_close-up-dentist-their-clinic-removebg-preview.png";

     const [hover, setHover] = useState(false);

     const onhover = () => {
          setHover(true);
     };
     const offhover = () => {
          setHover(false);
     };

     return (
          <div
               onMouseEnter={onhover}
               onMouseLeave={offhover}
               className=" cursor-pointer lg:w-[20vw] w-[40vw] h-[30vw] flex flex-col justify-end  relative z-[50]"
          >
               <Image src={content.image} fill objectFit="cover" />
               <div
                    className={`w-full h-[20vw]   cursor-pointer duration-1000 ${
                         hover
                              ? " bg-dharangradient bg-opacity-100"
                              : "bg-[#27BBAE] bg-opacity-30"
                    }`}
               ></div>

               <div className=" w-[70%] h-[20%] bg-white flex flex-col justify-center absolute bottom-0 left-[50%] -translate-x-[50%] translate-y-[50%] rounded-[10%]">
                    <div className=" w-full text-center text-[1vw] text-black">
                         <h1>{content.name}</h1>
                         <h2 className=" text-[0.9vw]">{content.work}</h2>
                    </div>
               </div>
          </div>
     );
};

export default Meetone;
