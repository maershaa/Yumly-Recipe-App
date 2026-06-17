import { FaSun, FaMoon, FaLeaf } from 'react-icons/fa';
import { AiOutlineClockCircle } from 'react-icons/ai';
import {
  SummaryWrapper,
  RecipeHeaderBar,
  EditBtn,
  DeleteBtn,
} from './SummarySection.styled';
import { PiLightning } from 'react-icons/pi';
import { FiEdit3 } from 'react-icons/fi';
import { MdDeleteForever } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
const SummarySection = ({
  id,
  recipe_name,
  cooking_time,
  description,
  tags,
}) => {
  const location = useLocation();

  const TAG_ICONS = {
    breakfast: <FaSun />,
    dinner: <FaMoon />,
    healthy: <FaLeaf />,
    easy: <PiLightning />,
  };

  const onDeleteRecipe = (recipeId) => {
    console.log('delete recipe', recipeId);
  };
  return (
    <SummaryWrapper>
      <RecipeHeaderBar>
        <h1>{recipe_name}</h1>
        <EditBtn
          className="btn"
          to={`/my-recipes/${id}/edit`}
          state={location.state}
        >
          <FiEdit3 />
          <span>Edit</span>
        </EditBtn>

        <DeleteBtn
          className="btn"
          type="button"
          onClick={() => onDeleteRecipe(id)}
        >
          <MdDeleteForever />
          <span>Delete</span>{' '}
        </DeleteBtn>
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
    </SummaryWrapper>
  );
};

export { SummarySection };
