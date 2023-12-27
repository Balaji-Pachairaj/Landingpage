"use client";

import Companies from "@/components/Companies";
import CompaniesSmallScreen from "@/components/CompaniesSmallScreen";
import ContactUs from "@/components/ContactUs";
import FinalMeetOurTeam from "@/components/FinalMeetOurTeam";
import FirstSectionVideoSection from "@/components/FirstSectionVideoSection";
import FooterSection from "@/components/FooterSection";
import ParagraphTextSection from "@/components/ParagraphTextSection"
import Timeline2 from "@/components/Timeline2";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
     return (
          <>
               <FirstSectionVideoSection />

               <ParagraphTextSection />

               <div id="companies" className=" w-full h-[0.0001px] "></div>
               <Companies />
               <CompaniesSmallScreen />

               <Timeline2 />

               <FinalMeetOurTeam />

               <ContactUs />

               <FooterSection />
          </>
     );
}
