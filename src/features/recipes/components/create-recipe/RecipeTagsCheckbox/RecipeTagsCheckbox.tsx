import { recipeCategories } from '@/features/recipes/constants';
import { TagsWrapper } from './RecipeTagsCheckbox.styled';
import { RecipeCategoryValue } from '@/types';
import type { ChangeEvent } from 'react';

interface RecipeTagsCheckboxProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  tags: RecipeCategoryValue[];
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
