import styled from 'styled-components';

const TagsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  align-items: center;
  justify-content: center;

  margin: 50px auto;

  li {
    padding: 6px 10px;

    background-color: ${({ theme }) => theme.colors.cardSecondary};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radii.lg};
    color: ${({ theme }) => theme.colors.accentSecondary};

    &.active {
      background-color: ${({ theme }) => theme.colors.accentSecondary};
      border: ${({ theme }) => theme.colors.hoverBorderSecondary};
      box-shadow: ${({ theme }) => theme.colors.hoverShadowSecondary};
    }

    button {
      font-size: 0.9rem;
      font-weight: 500;
    }
  }
`;

export { TagsList };
