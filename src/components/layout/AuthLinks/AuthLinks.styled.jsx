import styled from 'styled-components';

export const AuthLinksList = styled.ul`
  display: flex;
  align-items: center;
  gap: 15px;

  li a {
    padding: 12px 16px;

    font-size: 1rem;
    font-weight: 500;
    transition: ${({ theme }) => theme.transitions.main};

    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.4rem;
  }
`;
