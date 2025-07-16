import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Banner from "./Banner";
import AboutUs from "./AboutUs";
import Services from "./Services";
import ContactUs from "./ContactUs";
import Testimonials from "./Testimonials";
import WhyChooseUs from "./WhyChooseus";
import Footer from "./Footer";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        // Slight delay ensures DOM is rendered
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />

        <div  data-aos="fade-up">
          <Banner />
        </div>

        <div id="contact" className="scroll-mt-8">
          <ContactUs />
        </div>

        <div id="about" className="scroll-mt-8">
          <AboutUs />
        </div>

        <div id="services" className="scroll-mt-16">
          <Services />
        </div>

        <div data-aos="fade-up" id="reviews" className="scroll-mt-0">
          <Testimonials />
        </div>

        <div id="chooseus">
          <WhyChooseUs />
        </div>

        <Footer />
      </header>
    </div>
  );
}

export default App;
