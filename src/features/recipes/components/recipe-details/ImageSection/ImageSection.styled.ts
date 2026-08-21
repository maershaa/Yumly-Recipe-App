import styled from 'styled-components';

export const ImgWrapper = styled.div`
  position: relative;
  overflow: hidden;

  border-radius: ${({ theme }) => theme.radii.lg};
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    border-top-left-radius: ${({ theme }) => theme.radii.lg};
    border-bottom-left-radius: ${({ theme }) => theme.radii.lg};
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  img {
    width: 100%;
    display: block;
    aspect-ratio: 4 / 3;
    object-fit: cover;
  }

  .badgesWrapper {
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 6px;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      gap: 10px;
      right: auto; /* На планшетах отключаем ограничение по правой стороне */
    }
  }

  .badge {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
    flex-shrink: 0;

    padding: 4px 8px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radii.pill};
    background-color: ${({ theme }) => theme.colors.cardSecondary};

    span {
      font-size: 0.7rem;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.textPrimary};
      white-space: nowrap; /* Запрещаем тексту внутри бейджа разбиваться на 2 строки */
    }

    svg {
      width: 14px;
      height: 14px;
      color: ${({ theme }) => theme.colors.textPrimary};
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      padding: 6px 9px;
      gap: 6px;

      span {
        font-size: 0.9rem;
      }

      svg {
        width: 18px;
        height: 18px;
      }
    }
  }
`;

export const ToggleFavoriteBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;

  width: 35px;
  height: 35px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors.cardSecondary};
  border-radius: ${({ theme }) => theme.radii.rounded};
  border: none;

  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.main};

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.96);
  }

  svg {
    width: 25px;
    height: 25px;

    color: ${({ theme }) => theme.colors.danger};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 45px;
    height: 45px;

    svg {
      width: 33px;
      height: 33px;
    }
  }
`;
