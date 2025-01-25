import React from 'react';
import AboutUs from './AboutUs';
import CustomCarousel from './Carousel';
import Services from './Services';
import Portfolio from './Portfolio';
// import Testimonials from './Testimonials';
import Contact from './Contact';

const Home = () => {
  return (
    <div className="home-container">
      <CustomCarousel/>
      <AboutUs/>
      <Services/>
      <Portfolio/>
      {/* <Testimonials/> */}
      <Contact/>
    </div>
  );
};

export default Home;