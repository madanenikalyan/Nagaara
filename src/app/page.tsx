import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Impact from "@/components/sections/Impact";
import WhyNagaara from "@/components/sections/WhyNagaara";
import OurRoots from "@/components/sections/OurRoots";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import StickyCTA from "@/components/ui/StickyCTA";
import CustomCursor from "@/components/ui/CustomCursor";
import GrainOverlay from "@/components/ui/GrainOverlay";

export default function Home() {
  return (
    <main className="relative site-wrapper">
      <CustomCursor />
      <GrainOverlay />
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <Process />
      <Impact />
      <WhyNagaara />
      <OurRoots />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <StickyCTA />
    </main>
  );
}
