import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Sections from "../components/Sections";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="bg-[#09090B] text-white min-h-screen overflow-x-hidden">

      <Navbar />

      <Hero />

      <Sections />

      <Footer />

    </main>
  );
}