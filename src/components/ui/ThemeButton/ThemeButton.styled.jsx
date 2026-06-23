import styled from 'styled-components';

export const ThemeBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  color: ${({ theme }) => theme.colors.icon};
  transition: ${({ theme }) => theme.transitions.main};
  svg {
    width: 24px;
    height: 24px;
  }

  &:hover {
    transform: scale(1.1);
  }
`;
