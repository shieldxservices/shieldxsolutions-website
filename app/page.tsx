import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import Services from "@/components/sections/Services";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Industries from "@/components/sections/Industries";
import WhyShieldX from "@/components/sections/WhyShieldX";
import Technology from "@/components/sections/Technology";
import Coverage from "@/components/sections/Coverage";
import CTA from "@/components/sections/CTA";
import EstimateCTA from "@/components/sections/EstimateCTA";
import ContactSection from "@/components/sections/ContactSection";


export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <FeaturedProjects />
        <TrustedBy />
        <WhyShieldX />
        <Coverage />
        <EstimateCTA />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}