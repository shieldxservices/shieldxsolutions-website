import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import Services from "@/components/sections/Services";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Industries from "@/components/sections/Industries";
import WhyShieldX from "@/components/sections/WhyShieldX";
import Technology from "@/components/sections/Technology";
import Coverage from "@/components/sections/Coverage";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";





export default function Home() {
  return (
    <main className="bg-[#09090B] text-white min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Sections />
      <Coverage />
      <CTA />
      <Footer />
    </main>
  );
}