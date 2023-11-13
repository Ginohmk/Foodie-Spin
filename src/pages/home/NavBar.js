import React from 'react';
import { NavBarContainer } from '../../styles/LandingPage.style';
import Logo from '../../assets/images/logo.svg';
import Login from '../../assets/images/login.svg';

const NavBar = () => {
  return (
    <NavBarContainer>
      <div className="logo-menu-con">
        <div className="logo-menu-con__logo-con">
          <img src={Logo} alt="logo icon" />
        </div>

        <ul className="logo-menu-con__menu-items">
          <li>Breakfast</li>

          <li>Lunch</li>

          <li>Dinner</li>
        </ul>
      </div>

      <div className="login-con">
        <img src={Login} alt="Login" />
      </div>
    </NavBarContainer>
  );
};

export default NavBar;
