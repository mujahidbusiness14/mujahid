import Hero from "../components/Hero";
import Logos from "../components/Logos";
import About from "../components/About";
import Services from "../components/Services";
import HowItWorks from "../components/HowItWorks";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <>
      <Hero />
      <Logos />
      <About />
      <Services />
      <HowItWorks />
      <Features />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
};

export default Home;
