import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Biographie from "./components/Biographie";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <Biographie />
    </main>
  );
}
