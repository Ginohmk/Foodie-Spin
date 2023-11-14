import React, { useState } from 'react';
import { HeroSectionContainer } from '../../styles/LandingPage.style';
import ArrowDown from '../../components/ArrowDown';
import { foodData, foodImages } from '../../data/HomePageData';

// import PlateOne from '../../assets/images/plate-one.svg';
// import PlateTwo from '../../assets/images/plate-two.svg';
// import PlateThree from '../../assets/images/plate-three.svg';
// import PlateFour from '../../assets/images/plate-four.svg';
// import PlateFive from '../../assets/images/plate-five.svg';

const HeroSection = () => {
  const [foodId, setFoodId] = useState(0);
  const [textAnimate, setTextAnimate] = useState(false);
  const [imageAnimate, setImageAnimate] = useState(null);
  const [foods, setFoods] = useState([...foodImages]);

  const increamentFoodId = () => {
    if (foodId < foodData.length - 1) {
      // remove first food element push it to last
      let foodItem = foods.shift();
      setFoods([...foods, foodItem]);

      setTextAnimate(true);

      setTimeout(() => {
        setTextAnimate(false);
        setImageAnimate((prev) => !prev);
        setFoodId((prevState) => prevState + 1);
      }, 1000);
    }
  };

  const decreamentFoodId = () => {
    if (foodId > 0) {
      // remove last food element push it to first
      let foodItem = foods.pop();
      setFoods([foodItem, ...foods]);

      setTextAnimate(true);

      setTimeout(() => {
        setTextAnimate(false);
        setImageAnimate((prev) => !prev);

        setFoodId((prevState) => prevState - 1);
      }, 1000);
    }
  };

  return (
    <HeroSectionContainer colorId={foodId}>
      <section className="food-details-con">
        <h2 className={textAnimate ? 'scale-down' : 'scale-up'}>
          {foodData[`${foodId}`]?.price}
        </h2>

        <div
          className={`${
            textAnimate ? 'scale-down' : 'scale-up'
          } food-details-con__food-name`}
        >
          <p>{foodData[`${foodId}`]?.name}</p>

          <p>{foodData[`${foodId}`]?.type}</p>
        </div>

        <p
          className={`${
            textAnimate ? 'scale-down' : 'scale-up'
          } food-details-con__food-descrip`}
        >
          {foodData[`${foodId}`]?.description}
        </p>

        <button
          className={`${
            textAnimate ? 'scale-down' : 'scale-up'
          } food-details-con__food-btn`}
        >
          ORDER NOW
        </button>
      </section>

      <section className="food-selection">
        <section className="food-selection__food-spin-con">
          <div className="food-selection__food-spin-con__img-con">
            <div className="food-selection__food-spin-con__img-con__plate plate-one">
              <img src={foods[0]} alt="plate view" />
            </div>
            <div className="food-selection__food-spin-con__img-con__plate plate-two">
              <img src={foods[1]} alt="plate view" />
            </div>
            <div className="food-selection__food-spin-con__img-con__plate plate-three">
              <img src={foods[2]} alt="plate view" />
            </div>
            <div className="food-selection__food-spin-con__img-con__plate plate-four">
              <img src={foods[3]} alt="plate view" />
            </div>
            <div className="food-selection__food-spin-con__img-con__plate plate-five">
              <img src={foods[4]} alt="plate view" />
            </div>
          </div>
        </section>

        <section className="nav-food-con">
          <div className="nav-food-con__arrow-con">
            <ArrowDown
              fill={foodData[`${foodId}`]?.textColor}
              func={decreamentFoodId}
            />
          </div>

          <div
            className={`${
              imageAnimate ? 'rotate-right' : 'rotate-left'
            } nav-food-con__img-con`}
          >
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
