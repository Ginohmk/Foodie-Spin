import styled from 'styled-components';
import { foodData } from '../data/HomePageData';

export const LandingPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12.5rem;
  position: relative;
  overflow: hidden;
  height: 100%;
  border: 2px solid green;
  width: 100%;
  padding-bottom: 1.5rem;

  .circle-radius {
    width: 70rem;
    height: 70rem;
    position: absolute;
    border-radius: 50%;
    top: -40rem;
    right: -8rem;
    background-color: #ffeede;
    overflow: hidden;
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
    cursor: pointer;
  }
`;

export const HeroSectionContainer = styled.section`
  width: 90%;
  margin: 0 auto;
  display: flex;
  overflow: hidden;

  .food-details-con {
    max-width: 360px;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    z-index: 2;

    h2 {
      font-size: 2.4rem;
      font-weight: 500;
      line-height: 1.9rem;
      letter-spacing: 0em;
      text-align: left;
      color: ${({ colorId }) => foodData[colorId].textColor || 'blue'};
    }

    &__food-name {
      font-size: 1.56rem;
      font-weight: 400;
      line-height: 2.3rem;
      letter-spacing: 0em;
      text-align: left;
    }

    &__food-descrip {
      font-size: 0.8rem;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: 0em;
      text-align: left;
    }

    &__food-btn {
      margin-top: 1.5rem;
      display: block;
      max-width: 163px;
      height: 48px;
      border-radius: 69px;
      border: none;
      color: #fff;
      background-color: ${({ colorId }) =>
        foodData[colorId].textColor || '#ffeede'};
      box-shadow: 0px 20px 40px 0px
        ${({ colorId }) => foodData[colorId].BtnShadow || '#ffeede'};
    }
  }

  .food-selection {
    &__food-spin-con {
      border-radius: 50%;
      width: 70rem;
      height: 70rem;
      position: absolute;
      top: -40rem;
      right: -10rem;
      background-color: ${({ colorId }) =>
        foodData[colorId]?.circleColor || '#ffeede'};
      overflow: hidden;

      &__img-con {
        img {
          width: 72.5%;
          height: 18rem;
          position: absolute;
          bottom: 1rem;
          right: 9.5rem;
        }
      }
    }

    display: flex;
    width: 100%;
    align-items: flex-end;
    justify-content: flex-end;
    text-align: right;

    .nav-food-con {
      width: 80%;
      position: relative;
      display: flex;
      justify-content: space-between;
      gap: 1rem;

      &__arrow-con {
        align-self: flex-end;
        cursor: pointer;
      }

      &__img-con {
        width: 11rem;
        height: 11rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;
