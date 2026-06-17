import styled from 'styled-components';

const BackButtonWrapper = styled.a`
  margin-top: 20px;

  display: inline-flex;
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
`;

export { BackButtonWrapper };
