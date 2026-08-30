import {
  RecipeCardSkeletonWrapper,
  RecipeCardSkeletonItem,
} from './RecipeCardSkeleton.styled.js';

interface RecipeCardSkeletonProps {
  count?: number;
}

const RecipeCardSkeleton = ({ count = 6 }: RecipeCardSkeletonProps) => {
  return (
    <RecipeCardSkeletonWrapper>
      {Array.from({ length: count }).map((_, index) => (
        <RecipeCardSkeletonItem key={index}>
          <div className="skeleton_image"></div>
          <div className="skeleton_title"></div>

          <div className="skeleton_section_wrapper">
            <div className="skeleton_text"></div>
            <div className="skeleton_text"></div>
            <div className="skeleton_text"></div>
            <div className="skeleton_text"></div>
          </div>
        </RecipeCardSkeletonItem>
      ))}
    </RecipeCardSkeletonWrapper>
  );
};

export { RecipeCardSkeleton };
