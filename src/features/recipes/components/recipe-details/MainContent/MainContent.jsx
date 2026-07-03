import { FaShoppingBasket } from 'react-icons/fa';
import { GiCook } from 'react-icons/gi';
import { HiOutlineLightBulb } from 'react-icons/hi';

import {
  MainContentGrid,
  InfoCard,
  IngredientsList,
  StepsList,
} from './MainContent.styled';

const MainContent = ({ ingredients, instructions, tips }) => {
  return (
    <MainContentGrid>
      <InfoCard className="ingredientsAndTips">
        <h3>
          <FaShoppingBasket />
          Ingredients
        </h3>
        <IngredientsList>
          {ingredients.map((ingredient, index) => (
            <li key={index}>
              <span className="dot">•</span>
              <span className="ingredient">{ingredient.name}</span>
              <span className="ingredient">
                {ingredient.amount} {ingredient.unit}
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
          {instructions.map((step, index) => {
            return (
              <li key={index}>
                <span className="step">{step.step}.</span>
                <span className="text">{step.text}</span>
              </li>
            );
          })}
        </StepsList>
      </InfoCard>
    </MainContentGrid>
  );
};

export { MainContent };
