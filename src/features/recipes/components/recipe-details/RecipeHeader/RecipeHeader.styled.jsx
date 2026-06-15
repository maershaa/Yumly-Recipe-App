import styled from 'styled-components';

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
    align-items: center;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    align-items: flex-start;
  }
`;

export const ImgWrapper = styled.div`
  position: relative;

  img {
    width: 100%;
    aspect-ratio: 4 / 3;
    object-fit: cover;

    border-radius: ${({ theme }) => theme.radii.lg}
      ${({ theme }) => theme.radii.lg} 0 0;

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

  .liked {
    position: absolute;
    top: 10px;
    right: 10px;

    width: 40px;
    height: 40px;

    padding: 6px;
    border: 1px solid ${({ theme }) => theme.colors.textPrimary};
    border-radius: ${({ theme }) => theme.radii.rounded};

    background-color: transparent; //надо наверное чтото придумать чтобы кнопку видно было

    color: ${({ theme }) => theme.colors.textPrimary};

    cursor: pointer;
  }

  .chosen {
    color: red;
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
