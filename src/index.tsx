import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import AppSolutions from "./AppSolutions";
import MobileSolutions from "./MobileSolutions";
import Software from "./Software";
import ScrollToTop from "./ScrollToTop";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/AppSolutions" element={<AppSolutions />} />
      <Route path="/MobileSolutions" element={<MobileSolutions/>} />
      <Route path="/Software" element={<Software/>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
