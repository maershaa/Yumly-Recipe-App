import {
  FaUtensils,
  FaSun,
  FaLeaf,
  FaSeedling,
  FaMoon,
  FaBirthdayCake,
  FaConciergeBell,
} from 'react-icons/fa';
import { PiLightning, PiGauge, PiFireSimple } from 'react-icons/pi';

export const mainTags = [
  { value: 'italian', icon: <FaUtensils /> },
  { value: 'breakfast', icon: <FaSun /> },
  { value: 'lunch', icon: <FaConciergeBell /> },
  { value: 'dinner', icon: <FaMoon /> },

  { value: 'easy', icon: <PiLightning /> },
  { value: 'medium', icon: <PiGauge /> },
  { value: 'hard', icon: <PiFireSimple /> },

  { value: 'healthy', icon: <FaLeaf /> },
  { value: 'vegetarian', icon: <FaSeedling /> },
  { value: 'dessert', icon: <FaBirthdayCake /> },
];
