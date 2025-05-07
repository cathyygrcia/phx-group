import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Banner from "./Banner";
import AboutUs from "./AboutUs";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Banner/>
        <AboutUs/>
      </header>
    </div>
  );
}

export default App;
