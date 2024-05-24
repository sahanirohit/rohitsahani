import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Service from "@/components/Service";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Portfolio />
      <Service />
      <Contact />
      <Footer />
    </>
  );
}
