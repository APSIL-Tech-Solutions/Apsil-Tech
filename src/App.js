import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import NotFound from './components/NotFound'; // Import the NotFound component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/NotFound" element={<Testimonials />} />
        
        {/* Add a fallback route for unmatched paths */}
        <Route path="*" element={<NotFound />} /> {/* This will catch all undefined paths */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
