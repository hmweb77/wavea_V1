import Faq from "@/components/FAQ";
import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";

import HeroSection from "@/components/Hero";
import Meeting from "@/components/Meeting";
import NavBar from "@/components/NavBar";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import WhatsAppButton from "@/components/WhatsAppButton";
import * as React from "react";

export default function Home() {
  return (
    <main >
      <NavBar/>
      <HeroSection/>
      <Services/>
      <Process/>
      <Meeting/>
      <Feedback/>
      <Projects/>
      <Faq/>
      <Footer/>
      <WhatsAppButton/>
    </main>
  )
}
