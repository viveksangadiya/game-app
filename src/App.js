import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import HomePage from "./components/HomePage";
import PolicyPage from "./components/PolicyPage";
import TermsAndConditions from "./components/TermsAndConditions";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GameDetail from './components/GameDetail';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/privacy-policy" element={<PolicyPage />} />
        <Route path="/t&c" element={<TermsAndConditions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/:slug" element={<GameDetail />} />
      </Routes>
      <Footer />
    </Router>
   
  );
};

export default App;
