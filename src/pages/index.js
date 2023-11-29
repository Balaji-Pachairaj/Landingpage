"use client";

import Companies from "@/components/Companies";
import CompaniesSmallScreen from "@/components/CompaniesSmallScreen";
import ContactUs from "@/components/ContactUs";
import EnrichinglifeSection from "@/components/EnrichinglifeSection";
import EnrichingsectionSmallScreen from "@/components/EnrichingsectionSmallScreen";
import FooterSection from "@/components/FooterSection";
import Logosection from "@/components/Logosection";
import Meetourteam from "@/components/Meetourteam";
import Thankyou from "@/components/Thankyou";

import Timeline2 from "@/components/Timeline2";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
     return (
          <>
               <Logosection />
               <EnrichingsectionSmallScreen />

               <EnrichinglifeSection />

               <div id="companies" className=" w-full h-[0.0001px] "></div>
               <Companies />
               <CompaniesSmallScreen />

               <Timeline2 />

               <Meetourteam />

               <ContactUs />

               <FooterSection />
               {/* <Thankyou /> */}
          </>
     );
}
