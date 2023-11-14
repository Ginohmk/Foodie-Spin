import React from 'react';

import styled from 'styled-components';
import FoodSpin from './assets/images/food-one.svg';

const TestRun = () => {
  return (
    <TestRunContainer>
      {/* <div className="cicle">
        <img src={FoodSpin} alt="Foods" />
      </div> */}

      <div className="line"></div>
    </TestRunContainer>
  );
};

const TestRunContainer = styled.section`
  border: 2px solid red;
  margin-top: 15rem;
  padding: 6rem 0;

  img {
    /* animation: GFG 5s infinite linear;

    @keyframes GFG {
      0% {
        transform: rotate(0deg) translateX(100px) rotate(0deg);
      }

      100% {
        transform: rotate(-360deg) translateX(100px) rotate(360deg);
      }
    } */
  }

  .cicle {
    /* width: 23rem;
    height: 23rem;
    border: 2px dashed green;
    border-radius: 50%;
    position: relative; */

    /* .dot-on {
      width: 45px;
      height: 45px;

      border-radius: 50%;
      background-color: green;
      position: absolute;
      top: 20px;


      display: block;
      margin-left: auto;
      margin-right: auto;
      animation: GFG 5s infinite linear;

      @keyframes GFG {
        0% {
          transform: rotate(0deg) translateX(100px) rotate(0deg);
        }

        100% {
          transform: rotate(-360deg) translateX(100px) rotate(360deg);
        }
      }
    } */
  }
`;

export default TestRun;
