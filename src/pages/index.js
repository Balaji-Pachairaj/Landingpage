"use client";

import Companies from "@/components/Companies";
import CompaniesSmallScreen from "@/components/CompaniesSmallScreen";
import ContactUs from "@/components/ContactUs";
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

               <Companies />
               <CompaniesSmallScreen />

               <Timeline />

               <Meetourteam />

               <ContactUs />

               <Thankyou />
          </>
     );
}
