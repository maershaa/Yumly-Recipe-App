import { RecipesList } from '@/features/recipes/components';
import {
  SmartRecommendationsSection,
  Header,
} from './SmartRecommendations.styled';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectRecipes } from '@/app/redux/recipes/selectors';
import { fetchRecipes } from '@/app/redux/recipes/operations';

const SmartRecommendations = () => {
  const dispatch = useDispatch();
  const recipes = useSelector(selectRecipes);

  const [datePart, setDatePart] = useState({
    title: '',
    emoji: '',
    tag: null,
  });

  const recipesToRender = useMemo(() => {
    if (!datePart.tag) return [];

    return recipes
      .filter(
        //проверка на дубликаты +  чтобы нужный тег был
        (recipe, index, arr) =>
          arr.findIndex((r) => r.recipe_name === recipe.recipe_name) ===
            index && recipe.tags?.includes(datePart.tag),
      )
      .slice(0, 3);
  }, [datePart.tag, recipes]);

  useEffect(() => {
    dispatch(fetchRecipes());

    const getPartOfDay = () => {
      const hour = new Date().getHours();

      if (hour > 6 && hour <= 11) {
        setDatePart({
          title: 'Good morning! What’s for breakfast?',
          emoji: '🍳',
          tag: 'breakfast',
        });
      } else if (hour > 11 && hour <= 16) {
        setDatePart({
          title: 'Hungry? Time for a hearty lunch!',
          emoji: '🍲',
          tag: 'lunch',
        });
      } else {
        setDatePart({
          title: 'Cozy dinners for tonight',
          emoji: '🌙',
          tag: 'dinner',
        });
      }
    };

    getPartOfDay();
  }, [dispatch]);

  if (!datePart.tag || !recipes) {
    return (
      <SmartRecommendationsSection>
        <Header>
          <h2>Smart Recommendation</h2>
          <h3>Loading personalized recipes...</h3>
        </Header>
      </SmartRecommendationsSection>
    );
  }
  return (
    <SmartRecommendationsSection>
      <Header>
        <div className="title-wrapper">
          <h2>Smart Recommendation</h2>
          <h3>
            {datePart.title}
            <span>{datePart.emoji}</span>
          </h3>
        </div>
        <p className="subtitle">
          Tailored specifically to your current time of day
        </p>
      </Header>

      <RecipesList recipes={recipesToRender} />
    </SmartRecommendationsSection>
  );
};

export { SmartRecommendations };
