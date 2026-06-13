import styled from 'styled-components';

export const RecipeDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  margin: 0 auto;
  padding: 50px 0;
`;

export const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  align-items: flex-start;

  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 0.9fr;
    gap: 30px;
  }
`;

export const ImgWrapper = styled.div`
  position: relative;

  img {
    width: 100%;
    aspect-ratio: 4 / 3;
    object-fit: cover;

    border-top-left-radius: ${({ theme }) => theme.radii.lg};
    border-bottom-left-radius: ${({ theme }) => theme.radii.lg};
  }

  .favorite {
    position: absolute;
    top: 10px;
    right: 10px;

    width: 40px;
    height: 40px;

    padding: 6px;
    border: 1px solid ${({ theme }) => theme.colors.textPrimary};
    border-radius: ${({ theme }) => theme.radii.rounded};
    background-color: transparent;

    color: ${({ theme }) => theme.colors.textPrimary};

    cursor: pointer;
  }

  .cookingTimeBadge {
    position: absolute;
    bottom: 10px;
    left: 10px;

    display: flex;
    flex-direction: row;
    gap: 5px;

    padding: 6px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radii.pill};
    background-color: ${({ theme }) => theme.colors.cardSecondary};

    color: ${({ theme }) => theme.colors.textPrimary};

    img {
      width: 40px;
      height: 40px;
    }
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
  padding: 15px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 30px;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 800;
    line-height: 1.4;

    max-width: 540px;

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      font-size: 2.7rem;
    }
  }

  .description {
    font-size: 1.2;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.textSecondary};

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      font-size: 1.3rem;
    }
  }

  .cookingTimeMain {
    display: flex;
    flex-direction: row;
    gap: 5px;

    font-size: 1.4;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textPrimary};

    .accent {
      color: ${({ theme }) => theme.colors.accent};
    }
  }

  .tagsList {
    display: flex;
    flex-direction: row;
    gap: 15px;

    li {
      padding: 8px;
      background-color: ${({ theme }) => theme.colors.cardSecondary};
      border: 1px solid ${({ theme }) => theme.colors.border};
      border-radius: ${({ theme }) => theme.radii.pill};
      color: ${({ theme }) => theme.colors.accentSecondary};
    }
  }
`;

export const RecipeDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* !как сделать одной высоты их? */

  gap: 40px;
  align-items: flex-start;

  .ingredientsAndTips,
  .preparingSteps {
    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;

    background-color: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radii.lg};

    h3 {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;

      font-size: 1.8rem;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.textPrimary};

      margin-bottom: 30px;

      &:after {
        //!только нужно чтобы она была под текстом!!! а ен справа от него
        content: '';
        width: 100px;
        height: 1px;
        background-color: ${({ theme }) => theme.colors.accent};
      }

      svg {
        width: 40px;
        height: 40px;

        color: ${({ theme }) => theme.colors.accent};
      }
    }
  }

  .ingredientsAndTips {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: baseline;

    gap: 10px;

    li {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
    }

    .dot {
      font-size: 1.8rem;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.accent};
    }

    .ingredient {
      font-size: 1.3rem;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.textPrimary};
    }

    .tips {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      gap: 20px;

      padding: 20px;
      max-width: 500px;

      border: 1px solid ${({ theme }) => theme.colors.border};
      background-color: ${({ theme }) => theme.colors.accentBgSuccess};
      border-radius: ${({ theme }) => theme.radii.lg};

      svg {
        color: ${({ theme }) => theme.colors.accent};
      }
    }
  }

  .preparingSteps {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: baseline;

    gap: 10px;

    ul {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: baseline;

      gap: 20px;
    }

    li {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 10px;

      .step {
        padding: 6px 12px;
        border-radius: ${({ theme }) => theme.radii.rounded};

        background-color: ${({ theme }) => theme.colors.accentBgSuccess};
        color: ${({ theme }) => theme.colors.accent};
      }

      .text {
      }
    }
  }
`;
