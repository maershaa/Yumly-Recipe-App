import styled from 'styled-components';

export const ThemeBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 44px;
  height: 44px;
  padding: 12px 0 12px 16px;

  color: ${({ theme }) => theme.colors.icon};
  transition: ${({ theme }) => theme.transitions.main};

  svg {
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
