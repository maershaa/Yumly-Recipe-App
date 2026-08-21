import styled from 'styled-components';

export const MainContentGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0px, 1fr);

  gap: 40px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    align-items: stretch; //обе колонки грида будут строго одинаковой высоты, независимо от количества ингредиентов или шагов
  }

  .ingredientsAndTips {
    .tips {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      gap: 20px;

      padding: 18px;
      max-width: 600px;

      border: 1px solid ${({ theme }) => theme.colors.border};
      background-color: ${({ theme }) => theme.colors.accentBgSuccess};
      border-radius: ${({ theme }) => theme.radii.lg};

      font-size: 0.9rem;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.textPrimary};
      line-height: 1.4;

      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 1rem;
      }
      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        font-size: 1.1rem;
      }

      svg {
        width: 30px;
        height: 30px;
        flex-shrink: 0; //  запрещаем иконке сжиматься, если текст длинный */
        color: ${({ theme }) => theme.colors.accent};

        @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
          width: 40px;
          height: 40px;
        }
      }
    }
  }
`;

export const InfoCard = styled.div`
  width: 100%;
  padding: 30px;

  display: flex;
  flex-direction: column;
  align-items: stretch; /* растягиваем по ширине */
  justify-content: flex-start;
  gap: 30px;

  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};

  h3 {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;

    font-size: 1.25rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textPrimary};

    margin-bottom: 30px;

    padding-bottom: 25px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.accent};

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 1.5rem;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      font-size: 1.7rem;
    }

    svg {
      width: 30px;
      height: 30px;
      flex-shrink: 0; //  запрещаем иконке сжиматься, если текст длинный */
      color: ${({ theme }) => theme.colors.accent};
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      width: 40px;
      height: 40px;
    }
  }
`;

export const IngredientsList = styled.ul`
  padding: 0;
  margin: 0;

  li {
    width: 100%;

    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 15px;

    padding: 10px 20px;

    align-items: center;
    border-bottom: 1px dashed ${({ theme }) => theme.colors.border};
  }

  .dot {
    font-size: 1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.accent};

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 1.8rem;
    }
  }

  .ingredient {
    font-size: 0.9rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.textPrimary};
    line-height: 1.4;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 1rem;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      font-size: 1.1rem;
    }
  }
`;

export const StepsList = styled.ul`
  padding: 0;
  margin: 0;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: baseline;

  gap: 20px;

  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    gap: 10px;
    padding: 5px 10px;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      gap: 20px;
      padding: 10px 20px;
    }

    .step {
      width: 20px;
      height: 20px;

      display: flex;
      align-items: center;
      justify-content: center;

      flex-shrink: 0;

      border-radius: ${({ theme }) => theme.radii.rounded};
      background-color: ${({ theme }) => theme.colors.accentBgSuccess};
      color: ${({ theme }) => theme.colors.accent};

      font-size: 0.9rem;
      font-weight: 600;

      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 40px;
        height: 40px;

        font-size: 1rem;
      }
      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        font-size: 1.1rem;
      }
    }

    .text {
      font-size: 0.9rem;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.textPrimary};
      line-height: 1.4;

      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 1rem;
      }
      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        font-size: 1.1rem;
      }
    }
  }
`;
