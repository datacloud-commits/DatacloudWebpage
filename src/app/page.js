import Image from "next/image";
import HeroSection from "./sections/hero";
import About from "./sections/about";
import Services from "./sections/services";
import Footer from "./sections/footer";

export default function Home() {
  return (
    <>
    <HeroSection />
    <About />
    <Services />
    <Footer />
    </>
  );
}
