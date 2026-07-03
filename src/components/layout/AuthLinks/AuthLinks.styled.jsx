import styled from 'styled-components';

export const AuthLinksList = styled.ul`
  display: flex;
  align-items: center;
  gap: 15px;

  li a {
    padding: 12px 16px;

    font-size: 0.9rem;
    font-weight: 500;
    line-height: 1.2;

    transition: ${({ theme }) => theme.transitions.main};

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 1rem;
      padding: 10px 16px;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;
