import styled from 'styled-components';

export const ResponsiveNavigationWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  padding: 24px 40px;
  margin: 40px auto;

  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const BurgerMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .burgerBtn svg {
    width: 30px;
    height: 30px;
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

export const MobileMenu = styled.div`
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  svg {
    width: 30px;
    height: 30px;
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  .closeBtn {
    top: 40px;
    right: 40px;
    position: absolute;

    width: 45px;
    height: 45px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: ${({ theme }) => theme.radii.rounded};

    transition: ${({ theme }) => theme.transitions.main};

    &:hover {
      background: ${({ theme }) => theme.colors.cardSecondary};
    }

    svg {
      width: 30px;
      height: 30px;
    }
  }

  .navigation,
  .themeSection,
  .userSection {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 20px 0;
  }

  .navigation {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }

  .themeSection {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }

  .userSection {
    margin-top: auto;
  }
`;
