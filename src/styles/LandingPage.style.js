import styled from 'styled-components';
import { foodData } from '../data/HomePageData';

export const LandingPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12.5rem;
  position: relative;
  overflow: hidden;
  height: 100%;
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
      min-height: 80px;
    }

    &__food-btn {
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
        border: 2px dashed red;

        width: 38rem;
        height: 38rem;

        position: absolute;
        bottom: -19rem;
        right: 17.5rem;

        border-radius: 50%;

        &__plate {
          width: 10rem;
          height: 10rem;
        }

        .plate-one {
          position: absolute;
          bottom: 19.5rem;
          left: -4rem;
        }

        .plate-two {
          position: absolute;
          bottom: 28.5rem;
          left: 3rem;
        }

        .plate-three {
          position: absolute;
          bottom: 31.95rem;
          left: 14rem;
        }

        .plate-four {
          position: absolute;
          bottom: 27.5rem;
          right: 2.5rem;
        }

        .plate-five {
          position: absolute;
          bottom: 17.5rem;
          right: -4.5rem;
        }
      }
    }

    display: flex;
    width: 100%;
    align-items: flex-end;
    justify-content: center;
    text-align: right;

    .nav-food-con {
      width: 80%;
      position: relative;
      display: flex;
      justify-content: space-between;
      gap: 1.5rem;

      &__arrow-con {
        align-self: flex-end;
        cursor: pointer;

        margin-bottom: -2rem;
      }

      &__img-con {
        width: 15.5rem;
        height: 15.5rem;

        margin-right: -5.2rem;

        img {
          margin-top: 3rem;
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  /* ======
  --- ANIMATIONS ---
  =========== */

  /* landing food detail */
  .scale-down {
    animation: in 1.2s ease-in-out;

    @keyframes in {
      from {
        transform: scale(1);
      }

      to {
        transform: scale(0);
      }
    }
  }

  .scale-up {
    animation: out 1.2s ease-in-out;

    @keyframes out {
      from {
        transform: scale(0);
      }

      to {
        transform: scale(1);
      }
    }
  }

  /* Image Item Animation */

  .rotate-right {
    animation: roll-right 1.2s ease-in-out;

    @keyframes roll-right {
      from {
        transform: scale(0.5) rotate(360deg);
      }

      to {
        transform: scale(1) rotate(0deg);
      }
    }
  }

  .rotate-left {
    animation: roll-left 1.2s ease-in-out;

    @keyframes roll-left {
      from {
        transform: scale(0.5) rotate(-360deg);
      }

      to {
        transform: scale(1) rotate(0deg);
      }
    }
  }
`;
