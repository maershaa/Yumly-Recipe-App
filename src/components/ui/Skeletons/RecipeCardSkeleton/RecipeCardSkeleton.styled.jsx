import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

export const RecipeCardSkeletonWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  width: 100%;
  padding: 0 16px;
  justify-content: space-evenly;

  margin: 30px auto;
`;

export const RecipeCardSkeletonItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 22px;

  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};

  width: 100%;
  box-sizing: border-box;

  .skeleton_image,
  .skeleton_title,
  .skeleton_text {
    background: linear-gradient(90deg, #e0e0e0 0%, #f5f5f5 50%, #e0e0e0 100%);
    background-size: 200% 100%;
    animation: ${shimmer} 1.4s infinite linear;
  }

  .skeleton_image {
    width: 100%;
    aspect-ratio: 16 / 10;
    border-radius: ${({ theme }) => theme.radii.lg};
    flex-shrink: 0;
  }

  .skeleton_title {
    width: 80%;
    height: 30px;
    border-radius: ${({ theme }) => theme.radii.lg};
    margin: 30px auto;

    margin: 24px auto;
    flex-shrink: 0;
  }

  .skeleton_section_wrapper {
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-top: auto;
  }

  .skeleton_text {
    width: 100%;
    height: 25px;
    border-radius: ${({ theme }) => theme.radii.lg};
    margin-bottom: 12px;
  }
`;
