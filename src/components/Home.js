import React from 'react';
import CustomCarousel from './Carousel';
import Services from './Services';
import Portfolio from './Portfolio';
import Hero1 from "./Hero1";
import FeaturesSection from "./FeaturesSection";
import Hero3 from "./Hero3";
import Hero4 from "./Hero4";

const Home = () => {
  return (
    <div className="home-container">
      {/* Ensure all components exist and are correctly imported */}
      <CustomCarousel />
      <Hero1 />
      <FeaturesSection />
      <Hero3 />
      <Services />
      <Portfolio />
      {/* <AboutUs /> */}
      <Hero4 />
      {/* <Contact /> */}
    </div>
  );
};

export default Home;
