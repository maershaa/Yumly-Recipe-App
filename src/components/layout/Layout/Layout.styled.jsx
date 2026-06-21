import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  position: relative;

  overflow-x: hidden;

  background:
    radial-gradient(
      circle at 10% 20%,
      ${({ theme }) => theme.colors.accentBgWarning},
      transparent 20%
    ),
    radial-gradient(
      circle at 90% 50%,
      ${({ theme }) => theme.colors.accentBgWarning},
      transparent 20%
    ),
    radial-gradient(
      circle at 50% 90%,
      ${({ theme }) => theme.colors.accentBgWarning},
      transparent 25%
    );
`;
