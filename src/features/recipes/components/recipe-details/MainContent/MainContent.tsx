import { FaShoppingBasket } from 'react-icons/fa';
import { GiCook } from 'react-icons/gi';
import { HiOutlineLightBulb } from 'react-icons/hi';

import {
  MainContentGrid,
  InfoCard,
  IngredientsList,
  StepsList,
} from './MainContent.styled';

import type { Recipe } from '@/types';

type MainContentProps = Pick<Recipe, 'ingredients' | 'instructions' | 'tips'>;

const MainContent = ({ ingredients, instructions, tips }: MainContentProps) => {
  return (
    <MainContentGrid>
      <InfoCard className="ingredientsAndTips">
        <h3>
          <FaShoppingBasket />
          Ingredients
        </h3>
        <IngredientsList>
          {ingredients.map(({ name, amount, unit }, index) => (
            <li key={index}>
              <span className="dot">•</span>
              <span className="ingredient">{name}</span>
              <span className="ingredient">
                {amount} {unit}
              </span>
            </li>
          ))}
        </IngredientsList>
        <p className="tips">
          <HiOutlineLightBulb />
          <span>{tips} </span>
        </p>
      </InfoCard>

      <InfoCard className="preparingSteps">
        <h3>
          <GiCook />
          Instructions
        </h3>
        <StepsList>
          {instructions.map(({ step, text }, index) => {
            return (
              <li key={index}>
                <span className="step">{step}.</span>
                <span className="text">{text}</span>
              </li>
            );
          })}
        </StepsList>
      </InfoCard>
    </MainContentGrid>
  );
};

export { MainContent };
