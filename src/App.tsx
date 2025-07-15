import React, { useEffect } from "react";
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
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (ms)
      once: false,     // whether animation happens only once
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        
        {/* Add data-aos attribute here */}
        <div data-aos="fade-up">
          <Banner />
        </div>
        
        <div>
          <ContactUs />
        </div>
        
        <div>
          <AboutUs />
        </div>
        
        <div>
          <Services />
        </div>
        
        <div>
          <Testimonials />
        </div>
        
        <div>
          <WhyChooseUs />
        </div>
        
        <Footer />
      </header>
    </div>
  );
}

export default App;
