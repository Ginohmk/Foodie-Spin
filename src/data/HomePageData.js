import FoodItemOne from '../assets/images/food-item-one.svg';
import FoodItemTwo from '../assets/images/food-item-two.svg';
import PlateOne from '../assets/images/plate-one.svg';
import PlateTwo from '../assets/images/plate-two.svg';
import PlateThree from '../assets/images/plate-three.svg';
import PlateFour from '../assets/images/plate-four.svg';
import PlateFive from '../assets/images/plate-five.svg';

export const foodImages = [
  `${PlateFour}`,
  `${PlateFive}`,
  `${PlateOne}`,
  `${PlateTwo}`,
  `${PlateThree}`,
];

export const foodData = [
  {
    id: 1,
    price: '$35',
    name: 'Green Goddess',
    type: 'chicken Salad',
    description:
      'It is a non vegetarian salad which consists of the green goddess dressing mixed with chicken, peppers, olives and celery.',
    textColor: '#FF922C',
    circleColor: '#FFEEDE',
    BtnShadow: '#F4E2D1',
    foodImage: `${PlateOne}`,
    images: [
      `${PlateFour}`,
      `${PlateFive}`,
      `${PlateOne}`,
      `${PlateTwo}`,
      `${PlateThree}`,
    ],
  },
  {
    id: 2,
    price: '$35',
    name: 'Green Goddess',
    type: 'chicken Salad',
    description:
      'It is a non vegetarian salad which consists of the green goddess dressing mixed with chicken, peppers, olives and celery.',
    textColor: '#FF922C',
    circleColor: '#FFEEDE',
    BtnShadow: '#F4E2D1',
    foodImage: `${PlateTwo}`,
    images: [
      `${PlateFive}`,
      `${PlateOne}`,
      `${PlateTwo}`,
      `${PlateThree}`,
      `${PlateFour}`,
    ],
  },

  {
    id: 3,
    price: '$35',
    name: 'Green Goddess',
    type: 'chicken Salad',
    description:
      'It is a non vegetarian salad which consists of the green goddess dressing mixed with chicken, peppers, olives and celery.',
    textColor: '#FF922C',
    circleColor: '#FFEEDE',
    BtnShadow: '#F4E2D1',
    foodImage: `${PlateThree}`,
    images: [
      `${PlateOne}`,
      `${PlateTwo}`,
      `${PlateThree}`,
      `${PlateFour}`,
      `${PlateFive}`,
    ],
  },

  {
    id: 4,
    price: '$32',
    name: 'Asian Cucumber',
    type: 'Salad',
    description:
      'Asian Cucumber Salad Recipe made with crunchy cucumber, onion, rice wine vinegar, and a few secret ingredients!',
    textColor: '#54BF29',
    circleColor: '#EAFFE2',
    BtnShadow: '#DBF4D1',
    foodImage: `${PlateFour}`,
    images: [
      `${PlateTwo}`,
      `${PlateThree}`,
      `${PlateFour}`,
      `${PlateFive}`,
      `${PlateOne}`,
    ],
  },

  {
    id: 5,
    price: '$32',
    name: 'Asian Cucumber',
    type: 'Salad',
    description:
      'Asian Cucumber Salad Recipe made with crunchy cucumber, onion, rice wine vinegar, and a few secret ingredients!',
    textColor: '#54BF29',
    circleColor: '#EAFFE2',
    BtnShadow: '#DBF4D1',
    foodImage: `${PlateFive}`,
    images: [
      `${PlateThree}`,
      `${PlateFour}`,
      `${PlateFive}`,
      `${PlateOne}`,
      `${PlateTwo}`,
    ],
  },
];
