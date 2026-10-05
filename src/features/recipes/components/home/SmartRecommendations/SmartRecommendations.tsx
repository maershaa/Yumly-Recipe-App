import { RecipesList } from '@/features/recipes/components';
import {
  SmartRecommendationsSection,
  Header,
} from './SmartRecommendations.styled';
import { useEffect } from 'react';
import {
  selectRecipes,
  selectLoading,
  selectError,
} from '@/app/redux/recipes/selectors';
import { fetchRecipes } from '@/app/redux/recipes/operations';
import { useAppSelector, useAppDispatch } from '@/app/redux/hooks';

const getDayPart = () => {
  const hour = new Date().getHours();

  if (hour <= 12) {
    return {
      title: 'Good morning! What’s for breakfast?',
      emoji: '🍳',
      tag: 'breakfast',
    };
  } else if (hour > 12 && hour <= 16) {
    return {
      title: 'Hungry? Time for a hearty lunch!',
      emoji: '🍲',
      tag: 'lunch',
    };
  } else {
    return {
      title: 'Cozy dinners for tonight',
      emoji: '🌙',
      tag: 'dinner',
    };
  }
};

const SmartRecommendations = () => {
  const dispatch = useAppDispatch();
  const recipes = useAppSelector(selectRecipes);
  const loading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);

  const { tag, title, emoji } = getDayPart();

  useEffect(() => {
    dispatch(fetchRecipes({ currentPage: 1, tag }));
  }, [dispatch, tag]);

  if (loading && recipes.length === 0) {
    return (
      <SmartRecommendationsSection>
        <Header>
          <h2>Smart Recommendation</h2>
          <h3>Loading personalized recipes...</h3>
        </Header>
      </SmartRecommendationsSection>
    );
  }

  if (error || recipes.length === 0) {
    return null;
  }

  return (
    <SmartRecommendationsSection>
      <Header>
        <div className="title-wrapper">
          <h2>Smart Recommendation</h2>
          <h3>
            {title}
            <span>{emoji}</span>
          </h3>
        </div>
        <p className="subtitle">
          Tailored specifically to your current time of day
        </p>
      </Header>

      <RecipesList recipes={recipes.slice(0, 3)} />
    </SmartRecommendationsSection>
  );
};

export { SmartRecommendations };
