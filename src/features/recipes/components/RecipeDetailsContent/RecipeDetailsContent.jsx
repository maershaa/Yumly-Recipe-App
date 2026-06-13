import {
  RecipeDetailsWrapper,
  Header,
  ImgWrapper,
  ContentWrapper,
  RecipeDetails,
} from './RecipeDetailsContent.styled';
import { noImgPlaceholder } from '@/assets/images';

import { AiOutlineClockCircle } from 'react-icons/ai';
import { FaShoppingBasket } from 'react-icons/fa';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { GiCook } from 'react-icons/gi';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { FaLeaf, FaMoon, FaSun } from 'react-icons/fa';
import { PiLightning } from 'react-icons/pi';

const RecipeDetailsContent = ({ recipe }) => {
  const {
    recipe_name,
    image_url,
    cooking_time,
    tags = [],
    ingredients = [],
    instructions,
  } = recipe;

  const recipeImage = image_url ? image_url : noImgPlaceholder;

  const getTagSvg = (tag) => {
    {
      if (tag === 'breakfast') {
        return <FaSun />;
      } else if (tag === 'dinner') {
        return <FaMoon />;
      } else if (tag === 'healthy') {
        return <FaLeaf />;
      } else if (tag === 'easy') {
        return <PiLightning />;
      } else return;
      // не знаю что.
    }
  };

  return (
    <RecipeDetailsWrapper>
      <Header>
        <ImgWrapper>
          <img src={recipeImage} alt={recipe_name} loading="lazy" />

          <MdFavoriteBorder size={22} className="favorite" />
          <MdFavorite size={22} className="favorite" />

          <span className="cookingTimeBadge">
            <AiOutlineClockCircle size={22} />
            {cooking_time} min
          </span>
        </ImgWrapper>

        <ContentWrapper>
          <h1>{recipe_name}</h1>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            aperiam nesciunt consequatur unde, illo commodi vero quasi fugiat
            facilis exercitationem assumenda labore magnam ipsam rerum, illum
            quos voluptatem harum hic?
          </p>
          {cooking_time && (
            <span className="cookingTimeMain">
              <AiOutlineClockCircle className="accent" size={22} />
              <span> Prep time:</span>
              <span className="accent">{cooking_time} min</span>
            </span>
          )}
          <ul className="tagsList">
            {tags?.map((tag) => (
              <li key={tag}>
                {getTagSvg(tag)}
                <span>{tag.toUpperCase()}</span>
              </li>
            ))}
          </ul>
        </ContentWrapper>
      </Header>

      <RecipeDetails>
        <div className="ingredientsAndTips">
          <h3>
            <FaShoppingBasket />
            Ingredients
          </h3>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>
                <span className="dot">•</span>
                <span className="ingredient">{ingredient.name}</span>
                <span className="ingredient">
                  {ingredient.amount} {ingredient.unit}
                </span>
              </li>
            ))}
          </ul>
          <p className="tips">
            <HiOutlineLightBulb size={40} />
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
          </p>
        </div>

        <div className="preparingSteps">
          <h3>
            <GiCook />
            Instructions
          </h3>
          <ul>
            {instructions.map((step, index) => {
              return (
                <li key={index}>
                  <span className="step">{step.step}.</span>
                  <span className="text">{step.text}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </RecipeDetails>
    </RecipeDetailsWrapper>
  );
};

export { RecipeDetailsContent };
