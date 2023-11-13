import styled from 'styled-components';

export const LandingPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10.5rem;
  position: relative;
  overflow: hidden;
  height: 500px;
  border: 2px solid green;
  width: 100%;

  .circle-radius {
    width: 70rem;
    height: 70rem;
    position: absolute;
    border-radius: 50%;
    top: -40rem;
    right: -8rem;
    background-color: #ffeede;
  }
`;

export const NavBarContainer = styled.section`
  width: 90%;
  margin: 0 auto;
  margin-top: 2rem;
  position: relative;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo-menu-con {
    display: flex;
    align-items: center;
    gap: 16rem;
  }

  .logo-menu-con__menu-items {
    display: flex;
    align-items: center;
    list-style-type: none;
    gap: 3rem;
  }
`;

export const HeroSectionContainer = styled.section`
  width: 90%;
  margin: 0 auto;
`;
