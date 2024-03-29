import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Biographie from "./components/Biographie";
import Avis from "./components/Avis";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <Biographie />
      <Avis />
      <Footer />
    </main>
  );
}
