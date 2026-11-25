import styled from 'styled-components';

export const ProfileHeaderContainer = styled.header`
  position: relative;
  isolation: isolate;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 100%;
  margin: 0 auto;
  padding: 24px 20px;

  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.main};

  &::before,
  &::after {
    content: '';
    position: absolute;

    border-radius: 50%;
    filter: blur(80px);
    pointer-events: none;
  }

  &&::before {
    width: 300px;
    height: 300px;

    top: -120px;
    left: -120px;

    background: ${({ theme }) => theme.colors.accentBgSuccess};
  }

  &&::after {
    width: 250px;
    height: 250px;

    right: -80px;
    bottom: -80px;

    background: ${({ theme }) => theme.colors.accentBgWarning};

    pointer-events: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 40px;
    gap: 30px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 48px;
  }
`;

export const ProfileHeaderMain = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  position: relative;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 24px;
  }
`;

export const ProfileAvatar = styled.div`
  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 64px;
  height: 64px;

  border-radius: ${({ theme }) => theme.radii.rounded};

  background-color: ${({ theme }) => theme.colors.cardSecondary};
  color: ${({ theme }) => theme.colors.accent};

  font-size: 2rem;
  font-weight: 700;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100px;
    height: 100px;

    font-size: 3.5rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 120px;
    height: 120px;

    font-size: 4rem;
  }
`;

export const ProfileGreeting = styled.div`
  display: flex;
  flex-direction: column;

  gap: 6px;
  min-width: 0;

  .greetingTitle {
    font-size: 1.3rem;

    font-weight: 700;
    line-height: 1.3;

    overflow-wrap: anywhere;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 2rem;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      font-size: 2.5rem;
    }

    span {
      color: ${({ theme }) => theme.colors.accent};
    }
  }

  .greetingSubtitle {
    font-size: 0.8rem;

    font-weight: 500;
    line-height: 1.5;

    color: ${({ theme }) => theme.colors.textSecondary};

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 1rem;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      font-size: 1.1rem;
    }
  }
`;

export const ProfileDescription = styled.div`
  position: relative;

  padding-top: 16px;

  border-top: 1px solid ${({ theme }) => theme.colors.border};

  font-size: 0.9rem;
  font-style: italic;
  line-height: 1.6;
`;
