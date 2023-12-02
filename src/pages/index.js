"use client";

import Companies from "@/components/Companies";
import CompaniesSmallScreen from "@/components/CompaniesSmallScreen";
import ContactUs from "@/components/ContactUs";
import EnrichinglifeSection from "@/components/EnrichinglifeSection";
import EnrichingsectionSmallScreen from "@/components/EnrichingsectionSmallScreen";
import FirstSection from "@/components/FirstSection";
import FooterSection from "@/components/FooterSection";
import Logosection from "@/components/Logosection";
import MeetOurTeam2 from "@/components/MeetOurTeam2";
import Meetourteam from "@/components/Meetourteam";
import Thankyou from "@/components/Thankyou";

import Timeline2 from "@/components/Timeline2";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
     return (
          <>
               {/* <FirstSection /> */}
               <Logosection />
               <EnrichingsectionSmallScreen />

               <EnrichinglifeSection />

               <div id="companies" className=" w-full h-[0.0001px] "></div>
               <Companies />
               <CompaniesSmallScreen />

               <Timeline2 />

               {/* <Meetourteam /> */}

               <MeetOurTeam2 />

               <ContactUs />

               <FooterSection />
               {/* <Thankyou /> */}
          </>
     );
}
