import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

import { AiOutlineClockCircle } from 'react-icons/ai';
import { FiEdit3 } from 'react-icons/fi';
import { MdDeleteForever } from 'react-icons/md';

import { selectUser } from '@/app/redux/auth/selectors';
import { useAppSelector } from '@/app/redux/hooks';

import {
  SummaryWrapper,
  RecipeHeaderBar,
  Actions,
} from './SummarySection.styled';

import { deleteRecipe } from '@/features/recipes/api';
import { mainTags } from '@/features/recipes/constants';
import { getErrorMessage } from '@/features/recipes/utils';

import type { Recipe } from '@/types';

type SummarySectionProps = Pick<
  Recipe,
  'id' | 'user_id' | 'recipe_name' | 'description' | 'tags'
> & {
  cooking_time: string;
};

const SummarySection = ({
  id,
  user_id,
  recipe_name,
  cooking_time,
  description,
  tags,
}: SummarySectionProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id: currentUserId } = useAppSelector(selectUser);

  const isRecipeOwner = currentUserId === user_id; //только если залогиненный пользователь и автор рецепта один и тот же человек вернет true

  const findTagIcon = (tag: string) => {
    const foundTag = mainTags.find(
      (mainTag) => mainTag.value === tag.toLowerCase(),
    );
    return foundTag ? foundTag.icon : null;
  };

  const handleDeleteRecipe = async (recipeId: number, userId: string) => {
    try {
      await deleteRecipe(recipeId, userId);
      toast.success('Recipe deleted successfully.');
      navigate('/my-recipes');
    } catch (error) {
      console.error(getErrorMessage(error));
      toast.error('Failed to delete the recipe. Please try again.');
    }
  };

  return (
    <SummaryWrapper>
      <RecipeHeaderBar>
        <h1>{recipe_name}</h1>

        {isRecipeOwner && (
          <Actions>
            <Link
              className="actionsItem edit"
              to={`/my-recipes/${id}/edit`}
              state={location.state}
            >
              <FiEdit3 />
            </Link>
            <button
              className="actionsItem delete"
              type="button"
              onClick={() => handleDeleteRecipe(id, currentUserId)}
            >
              <MdDeleteForever />
            </button>
          </Actions>
        )}
      </RecipeHeaderBar>

      <p className="description">{description}</p>
      <span className="cookingTimeMain">
        <AiOutlineClockCircle className="accent" size={22} />
        <span> Prep time:</span>
        <span className="accent">{cooking_time}</span>
      </span>

      <ul className="tagsList">
        {tags?.map((tag) => (
          <li key={tag}>
            {findTagIcon(tag)}
            <span>{tag.toUpperCase()}</span>
          </li>
        ))}
      </ul>
    </SummaryWrapper>
  );
};

export { SummarySection };
