import styled from 'styled-components';

export const ThemeBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 44px;
  height: 44px;
  padding: 12px 0 12px 16px;

  transition: ${({ theme }) => theme.transitions.main};

  svg {
    color: ${({ theme }) => theme.colors.icon};

    width: 30px;
    height: 30px;
  }

  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 10px;
    justify-content: center;
  }
`;
