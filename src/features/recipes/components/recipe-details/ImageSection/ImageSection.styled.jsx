import styled from 'styled-components';

export const ImgWrapper = styled.div`
  position: relative;

  img {
    width: 100%;
    aspect-ratio: 4 / 3;
    object-fit: cover;

    border-top-left-radius: ${({ theme }) => theme.radii.lg};
    border-bottom-left-radius: 0;
    border-top-right-radius: ${({ theme }) => theme.radii.lg};
    border-bottom-right-radius: 0;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      border-top-left-radius: ${({ theme }) => theme.radii.lg};
      border-bottom-left-radius: ${({ theme }) => theme.radii.lg};
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  }

  .badgesWrapper {
    position: absolute;
    bottom: 10px;
    left: 10px;

    display: flex;
    flex-direction: row;
    gap: 10px;
  }

  .badge {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;

    padding: 6px 9px;
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

export const ToggleFavoriteBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;

  width: 45px;
  height: 45px;

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
    width: 33px;
    height: 33px;

    color: ${({ theme }) => theme.colors.danger};
  }
`;
