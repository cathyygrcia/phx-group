import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Banner from "./Banner";
import AboutUs from "./AboutUs";
import Services from "./Services";
import ContactUs from "./ContactUs";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Banner/>
        <ContactUs/>
        <AboutUs/>
        <Services/>
      </header>
    </div>
  );
}

export default App;
