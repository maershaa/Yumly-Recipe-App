import { FaSun, FaMoon, FaLeaf } from 'react-icons/fa';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { SummaryWrapper } from './SummarySection.styled';
import { PiLightning } from 'react-icons/pi';

const SummarySection = ({ recipe_name, cooking_time, description, tags }) => {
  const TAG_ICONS = {
    breakfast: <FaSun />,
    dinner: <FaMoon />,
    healthy: <FaLeaf />,
    easy: <PiLightning />,
  };
  return (
    <SummaryWrapper>
      <h1>{recipe_name}</h1>
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
