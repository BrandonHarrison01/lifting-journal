import React from 'react';
import TopNav from './navmenus/Nav';
import Footer from './navmenus/Footer';
import BottomCTA from './contentcontainers/BottomCTA';
import Testimonials from './contentcontainers/Testimonials';
import MiddleContent from './contentcontainers/MiddleContent';
import MainButtonContainer from './contentcontainers/MainbuttonsContainer';
import HeroImage from './contentcontainers/HeroImage';

function HomePage() {

  let tkn = localStorage.getItem('token');

  const deleteTkn = event => {
    localStorage.removeItem('token');
  }
  
  return (
    <>
      <TopNav />
      <div className="siteContainer">
      <HeroImage />
      <MainButtonContainer />
      <MiddleContent />
      <Testimonials />
      <BottomCTA />
      </div>
      <Footer />
    </>
  );
}

export default HomePage;