import { FaSun, FaMoon, FaLeaf } from 'react-icons/fa';
import { AiOutlineClockCircle } from 'react-icons/ai';
import {
  SummaryWrapper,
  RecipeHeaderBar,
  Actions,
} from './SummarySection.styled';
import { PiLightning } from 'react-icons/pi';
import { FiEdit3 } from 'react-icons/fi';
import { MdDeleteForever } from 'react-icons/md';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { deleteRecipe } from '@/features/recipes/api';
import { selectUser } from '@/app/redux/auth/selectors';
import { useSelector } from 'react-redux';
import { Toaster, toast } from 'sonner';

const SummarySection = ({
  id,
  user_id,
  recipe_name,
  cooking_time,
  description,
  tags,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id: currentUserId } = useSelector(selectUser);

  const isRecipeOwner = currentUserId === user_id; //только если залогиненный пользователь и автор рецепта один и тот же человек вернет true

  const TAG_ICONS = {
    breakfast: <FaSun />,
    dinner: <FaMoon />,
    healthy: <FaLeaf />,
    easy: <PiLightning />,
  };

  const handleDeleteRecipe = async (recipeId) => {
    try {
      await deleteRecipe(recipeId);

      toast.success('Recipe deleted successfully.');

      navigate('/my-recipes');
    } catch (error) {
      console.error('Failed to delete recipe:', error);
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
              onClick={() => handleDeleteRecipe(id)}
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
        <span className="accent">{cooking_time} min</span>
      </span>

      <ul className="tagsList">
        {tags?.map((tag) => (
          <li key={tag}>
            {TAG_ICONS[tag.toLowerCase()] || null}{' '}
            <span>{tag.toUpperCase()}</span>
          </li>
        ))}
      </ul>
      <Toaster />
    </SummaryWrapper>
  );
};

export { SummarySection };
