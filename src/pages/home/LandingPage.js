import React from 'react';
import NavBar from './NavBar';
import HeroSection from './HeroSection';
import { LandingPageContainer } from '../../styles/LandingPage.style';

const LandingPage = () => {
  return (
    <LandingPageContainer>
      <NavBar />
      <HeroSection />
    </LandingPageContainer>
  );
};

export default LandingPage;
