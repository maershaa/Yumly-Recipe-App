import styled from 'styled-components';

export const NextButton = styled.button`
  margin: 20px 0 20px auto;

  display: flex;
  align-items: center;
  gap: 8px;

  padding: 10px 18px;

  border-radius: ${({ theme }) => theme.radii.md};
  border: none;

  border: 2px solid ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.textPrimary};

  background: ${({ theme }) => theme.colors.accentBgSuccess};
  cursor: pointer;

  transition: ${({ theme }) => theme.transitions.main};

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    box-shadow: ${({ theme }) => theme.colors.hoverShadowAccent};
    transform: translateY(-2px);
  }

  span {
    font-size: 0.9rem;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 1rem;
    }
  }
`;
