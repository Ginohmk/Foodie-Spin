import React, { useState } from 'react';
import { HeroSectionContainer } from '../../styles/LandingPage.style';
import FoodSpin from '../../assets/images/food-one.svg';
import ArrowDown from '../../components/ArrowDown';
import { foodData } from '../../data/HomePageData';

const HeroSection = () => {
  const [foodId, setFoodId] = useState(0);

  const increamentFoodId = () => {
    console.log(foodId, ' in food id');
    if (foodId < foodData.length - 1) {
      setFoodId((prevState) => prevState + 1);
    }
  };

  const decreamentFoodId = () => {
    if (foodId > 0) {
      setFoodId((prevState) => prevState - 1);
    }
  };

  return (
    <HeroSectionContainer colorId={foodId}>
      <section className="food-details-con">
        <h2>{foodData[`${foodId}`]?.price}</h2>

        <div className="food-details-con__food-name">
          <p>{foodData[`${foodId}`]?.name}</p>

          <p>{foodData[`${foodId}`]?.type}</p>
        </div>

        <p className="food-details-con__food-descrip">
          {foodData[`${foodId}`]?.description}
        </p>

        <button className="food-details-con__food-btn">ORDER NOW</button>
      </section>

      <section className="food-selection">
        <section className="food-selection__food-spin-con">
          <div className="food-selection__food-spin-con__img-con">
            <img src={FoodSpin} alt="Foods" />
          </div>
        </section>

        <section className="nav-food-con">
          <div className="nav-food-con__arrow-con">
            <ArrowDown
              fill={foodData[`${foodId}`]?.textColor}
              func={decreamentFoodId}
            />
          </div>

          <div className="nav-food-con__img-con">
            <img src={foodData[`${foodId}`]?.foodImage} alt="Food item" />
          </div>

          <div className="nav-food-con__arrow-con">
            <ArrowDown
              fill={foodData[`${foodId}`]?.textColor}
              func={increamentFoodId}
            />
          </div>
        </section>
      </section>
    </HeroSectionContainer>
  );
};

export default HeroSection;
