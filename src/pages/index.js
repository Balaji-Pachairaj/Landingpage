'use client'

import Companies from "@/components/Companies";
import CompaniesSmallScreen from "@/components/CompaniesSmallScreen";
import ContactUs from "@/components/ContactUs";
import EnrichinglifeSection from "@/components/EnrichinglifeSection";
import Logosection from "@/components/Logosection";
import Meetourteam from "@/components/Meetourteam";
import Thankyou from "@/components/Thankyou";
import Timeline from "@/components/Timeline";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
     return (
          <>
               <Logosection />

               <EnrichinglifeSection />

               <Companies />
               <CompaniesSmallScreen />

               <Timeline />

               <Meetourteam />

               <ContactUs />

               <Thankyou />
          </>
     );
}
