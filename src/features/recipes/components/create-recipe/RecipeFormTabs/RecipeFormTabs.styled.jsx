import styled from 'styled-components';

export const TabsBar = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  margin-bottom: 20px;
  overflow-x: auto;
`;

export const TabButton = styled.button`
  cursor: pointer;

  position: relative;
  padding: 12px 16px;
  white-space: nowrap;
  background: none;
  border: none;

  border-bottom: 2px solid
    ${({ $isActive, theme }) =>
      $isActive ? theme.colors.accentSecondary : 'transparent'};

  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.textPrimary : theme.colors.textSecondary};

  transition: ${({ theme }) => theme.transitions.main};

  &:hover {
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  span {
    font-size: 1rem;
    font-weight: 600;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 1.2rem;
    }
  }
`;
