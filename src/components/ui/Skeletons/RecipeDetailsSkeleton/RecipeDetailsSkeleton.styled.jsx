import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

export const RecipeDetailsSkeletonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 24px;
  width: 100%;
  margin: 30px auto;
`;

export const RecipeDetailsHeader = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  align-items: stretch;
  gap: 24px;

  width: 100%;
  border-radius: ${({ theme }) => theme.radii.lg};
  flex-shrink: 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-rows: none;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    align-items: center;
  }

  .skeleton_image {
    width: 100%;
    aspect-ratio: 4 / 3;
    border-radius: ${({ theme }) => theme.radii.lg};
    flex-shrink: 0;

    background: linear-gradient(90deg, #e0e0e0 0%, #f5f5f5 50%, #e0e0e0 100%);
    background-size: 200% 100%;
    animation: ${shimmer} 1.4s infinite linear;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      border-top-left-radius: ${({ theme }) => theme.radii.lg};
      border-bottom-left-radius: ${({ theme }) => theme.radii.lg};
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  }

  .skeleton_summary {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    padding: 30px;

    width: 100%;
    height: 100%;

    flex-shrink: 0;

    background-color: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radii.lg};

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      border-top-right-radius: ${({ theme }) => theme.radii.lg};
      border-bottom-right-radius: ${({ theme }) => theme.radii.lg};
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
`;

export const RecipeDetailsMainContent = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  align-items: stretch;

  gap: 24px;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: none;
    align-items: center;
  }

  .skeleton_ingredients,
  .skeleton_instructions {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    padding: 30px;

    background-color: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radii.lg};
  }
`;

export const SkeletonItems = styled.div`
  background: linear-gradient(90deg, #e0e0e0 0%, #f5f5f5 50%, #e0e0e0 100%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.4s infinite linear;

  border-radius: ${({ theme }) => theme.radii.md};
  flex-shrink: 0;

  width: 100%;
  height: 25px;
`;
