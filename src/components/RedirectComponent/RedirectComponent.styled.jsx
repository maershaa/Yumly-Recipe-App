import styled from 'styled-components';

const Redirect = styled.p`
  margin-top: 24px;

  display: flex;
  justify-content: center;
  gap: 6px;

  color: ${({ theme }) => theme.colors.textSecondary};

  a {
    color: ${({ theme }) => theme.colors.accent};
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export { Redirect };
