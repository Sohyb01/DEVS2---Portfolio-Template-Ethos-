import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";
import Photoswipe from "./components/Photoswipe";

export default function Home() {
  return (
    <>
      {/* Preloader */}
      {/* <div id="preloader">
        <div id="loader" className="dots-fade">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div> */}

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Portfolio Section */}
      {/* <PortfolioSection /> */}

      {/* Testimonials Section */}
      {/* <TestimonialsSection /> */}

      {/* Footer */}
      <Footer />

      {/* Something */}
      <Photoswipe />
    </>
  );
}
