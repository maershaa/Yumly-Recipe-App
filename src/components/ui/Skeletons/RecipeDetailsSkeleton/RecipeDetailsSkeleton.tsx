import {
  RecipeDetailsSkeletonWrapper,
  RecipeDetailsHeader,
  RecipeDetailsMainContent,
  SkeletonItems,
} from './RecipeDetailsSkeleton.styled';

const RecipeDetailsSkeleton = () => {
  return (
    <RecipeDetailsSkeletonWrapper>
      <RecipeDetailsHeader>
        <div className="skeleton_image"> </div>
        <div className="skeleton_summary">
          {Array.from({ length: 5 }, (_, i) => (
            <SkeletonItems key={i} />
          ))}
        </div>
      </RecipeDetailsHeader>

      <RecipeDetailsMainContent>
        <div className="skeleton_ingredients">
          {Array.from({ length: 6 }, (_, i) => (
            <SkeletonItems key={i} />
          ))}
        </div>
        <div className="skeleton_instructions">
          {Array.from({ length: 6 }, (_, i) => (
            <SkeletonItems key={i} />
          ))}
        </div>
      </RecipeDetailsMainContent>
    </RecipeDetailsSkeletonWrapper>
  );
};

export { RecipeDetailsSkeleton };
