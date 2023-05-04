import React from "react";
import "./App.css";
import NavigationBar from "./components/Navbar/navigationBar";
import { Routes, Route } from "react-router-dom";
import PrivacyContent from "./components/PrivacyContent/privacyContent";
import AllFiles from "./components/AllFiles";
import Footer from "./components/Footer.js/Footer";
import TermCondition from "./components/TermCondition/TermCondition";

function App() {
  return (
    <>
      <div className="navContainerOne">
        <NavigationBar />
      </div>
      <Routes>
        <Route path="/" element={<AllFiles />} />
        <Route path="/privacy-policy" element={<PrivacyContent />} />
        <Route path="/term-condition" element={<TermCondition />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
