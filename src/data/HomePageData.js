import FoodItemOne from '../assets/images/food-item-one.svg';
import FoodItemTwo from '../assets/images/food-item-two.svg';

export const foodData = [
  {
    id: 1,
    price: '$35',
    name: 'Green Goddess',
    type: 'chicken Salad',
    description:
      'It is a non vegetarian salad which consists of the green goddess dressing mixed with chicken, peppers, olives and celery.',
    textColor: '#FF922C',
    circleColor: '#E87F1E',
    BtnShadow: '#F4E2D1',
    foodImage: `${FoodItemOne}`,
  },

  {
    id: 2,
    price: '$32',
    name: 'Asian Cucumber',
    type: 'Salad',
    description:
      'Asian Cucumber Salad Recipe made with crunchy cucumber, onion, rice wine vinegar, and a few secret ingredients!',
    textColor: '#54BF29',
    circleColor: '#EAFFE2',
    BtnShadow: '#DBF4D1',
    foodImage: `${FoodItemTwo}`,
  },
];
