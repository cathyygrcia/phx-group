import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Banner from "./Banner";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Banner/>
      </header>
    </div>
  );
}

export default App;
