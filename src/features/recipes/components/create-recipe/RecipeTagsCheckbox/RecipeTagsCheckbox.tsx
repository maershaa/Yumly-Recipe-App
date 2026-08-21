import { recipeCategories } from '@/features/recipes/constants';
import { TagsWrapper } from './RecipeTagsCheckbox.styled';
import { recipeCategoriesValue } from '@/types';

interface RecipeTagsCheckboxProps {
  onChange: () => void;
  tags: recipeCategoriesValue[];
}
const RecipeTagsCheckbox = ({ onChange, tags }: RecipeTagsCheckboxProps) => {
  return (
    <TagsWrapper>
      {recipeCategories.map(({ value, icon, label }) => {
        return (
          <label key={value}>
            <input
              name="tags"
              type="checkbox"
              value={value}
              checked={tags.includes(value)}
              onChange={onChange}
            />
            <span className="customCheckbox"></span>
            <span className="tagContent">
              {icon} {label}
            </span>
          </label>
        );
      })}
    </TagsWrapper>
  );
};

export { RecipeTagsCheckbox };
