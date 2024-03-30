import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Biographie from "./components/Biographie";
import Avis from "./components/Avis";
import Footer from "./components/Footer";
import AvisSection from "./components/AvisSection";
import MediaSection from "./components/MediaSection";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <Avis />
      <Biographie />
      <MediaSection />
      <AvisSection />
      <Footer />
    </main>
  );
}
