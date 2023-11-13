import React from 'react';
import NavBar from './NavBar';
import HeroSection from './HeroSection';
import { LandingPageContainer } from '../../styles/NavBar.style';

const LandingPage = () => {
  return (
    <LandingPageContainer>
      <div className="circle-radius"></div>
      <NavBar />
      <HeroSection />
    </LandingPageContainer>
  );
};

export default LandingPage;
