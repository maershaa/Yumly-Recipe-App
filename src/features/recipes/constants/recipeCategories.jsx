import {
  FaSun,
  FaLeaf,
  FaSeedling,
  FaMoon,
  FaBirthdayCake,
  FaConciergeBell,
} from 'react-icons/fa';

export const recipeCategories = [
  {
    value: 'breakfast',
    label: 'Breakfast',
    icon: <FaSun />,
  },
  {
    value: 'lunch',
    label: 'Lunch',
    icon: <FaConciergeBell />,
  },
  {
    value: 'dinner',
    label: 'Dinner',
    icon: <FaMoon />,
  },
  {
    value: 'healthy',
    label: 'Healthy',
    icon: <FaLeaf />,
  },
  {
    value: 'vegan',
    label: 'Vegan',
    icon: <FaSeedling />,
  },
  {
    value: 'dessert',
    label: 'Dessert',
    icon: <FaBirthdayCake />,
  },
];
