import styled from 'styled-components';

export const ErrorMessage = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  padding: 5px 10px;
  font-size: 0.8rem;

  border-radius: ${({ theme }) => theme.radii.md};

  border: 1px solid ${({ theme }) => theme.colors.hoverBorderSecondary};
  background: ${({ theme }) => theme.colors.accentBgWarning};
  box-shadow: ${({ theme }) => theme.colors.hoverShadowSecondary};
  opacity: 0.8;

  svg {
    color: ${({ theme }) => theme.colors.accentSecondary};
  }

  span {
    color: ${({ theme }) => theme.colors.accentSecondary};
  }
`;
