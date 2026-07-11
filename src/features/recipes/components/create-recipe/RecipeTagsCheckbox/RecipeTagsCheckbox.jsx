import { recipeCategories } from '@/features/recipes/constants';
import { TagsWrapper } from './RecipeTagsCheckbox.styled';
const RecipeTagsCheckbox = ({ onChange, values }) => {
  return (
    <TagsWrapper>
      {recipeCategories.map((tag) => (
        <label key={tag.value}>
          <input
            name="tags"
            type="checkbox"
            value={tag.value}
            checked={values.tags.includes(tag.value)}
            onChange={onChange}
          />
          <span className="customCheckbox"></span>
          <span className="tagContent">
            {tag.icon} {tag.label}
          </span>
        </label>
      ))}
    </TagsWrapper>
  );
};

export { RecipeTagsCheckbox };
