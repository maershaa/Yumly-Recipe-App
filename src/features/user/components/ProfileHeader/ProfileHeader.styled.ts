import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10%;

  position: relative;

  overflow: hidden;
  margin: 0 auto;
  text-align: center;
  padding: 80px 40px;

  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.main};

  &&::before {
    content: '';

    position: absolute;

    width: 300px;
    height: 300px;

    top: -120px;
    left: -120px;

    border-radius: 50%;

    background: ${({ theme }) => theme.colors.accentBgSuccess};
    filter: blur(80px);

    pointer-events: none;
  }

  &&::after {
    content: '';

    position: absolute;

    width: 250px;
    height: 250px;

    right: -80px;
    bottom: -80px;

    border-radius: 50%;

    background: ${({ theme }) => theme.colors.accentBgWarning};
    filter: blur(80px);

    pointer-events: none;
  }

  .avatarLetter {
    font-size: 6rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const UserAvatarWrapper = styled.div`
  position: relative;

  width: 250px;
  height: 250px;
  border-radius: ${({ theme }) => theme.radii.rounded};

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors.cardSecondary};
`;
