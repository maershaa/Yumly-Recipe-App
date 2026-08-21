import { hero_girl_curly_square } from '@/assets/images';
import {
  HeroSection,
  HeroImageWrapper,
  HeroContentWrapper,
  ButtonsGroup,
  StyledLink,
} from './Hero.styled';
import { FiCompass, FiPlusCircle } from 'react-icons/fi';

const Hero = () => {
  return (
    <HeroSection>
      <HeroContentWrapper>
        <p>Cook. Create. Share.</p>

        <h1>Your Ultimate Digital Cookbook</h1>
        <h2>
          Store your favorite recipes, organize your collection and discover new
          dishes from the community.
        </h2>

        <ButtonsGroup>
          <StyledLink className="green" to={'/recipes'}>
            <FiCompass size={32} />
            Explore Recipes
          </StyledLink>
          <StyledLink className="orange" to={'/my-recipes/new'}>
            <FiPlusCircle size={32} />
            Create Recipe
          </StyledLink>
        </ButtonsGroup>
      </HeroContentWrapper>

      <HeroImageWrapper>
        <img
          src={hero_girl_curly_square}
          alt="Cooking illustration"
          loading="lazy"
        />
      </HeroImageWrapper>
    </HeroSection>
  );
};

export { Hero };
