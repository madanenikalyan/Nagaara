import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Legacy from "@/components/sections/Legacy";
import Transformation from "@/components/sections/Transformation";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import WhyNagaara from "@/components/sections/WhyNagaara";
import Impact from "@/components/sections/Impact";
import Testimonials from "@/components/sections/Testimonials";
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
      <Legacy />
      <Transformation />
      <Services />
      <Process />
      <WhyNagaara />
      <Impact />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <StickyCTA />
    </main>
  );
}
