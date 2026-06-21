import styled from 'styled-components';

export const StatsSection = styled.section`
  padding: 80px 0;
`;

export const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1.2fr 1fr;
    gap: 80px;
  }
`;

export const SocialProof = styled.div`
  h2 {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.textPrimary};
    margin-bottom: 16px;
    font-weight: 700;
  }

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 32px;
  }
`;

export const AvatarGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  align-items: flex-start;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    align-items: center;
  }

  .avatars {
    display: flex;
    align-items: center;
  }

  .avatar-plus {
    width: 44px;
    height: 44px;

    border-radius: ${({ theme }) => theme.radii.rounded};

    background: ${({ theme }) => theme.colors.cardSecondary};
    border: 2px solid ${({ theme }) => theme.colors.background};

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 0.85rem;
    font-weight: 600;

    color: ${({ theme }) => theme.colors.accent};

    margin-left: -12px;

    z-index: 5;
  }
`;

export const Avatar = styled.img`
  width: 44px;
  height: 44px;

  border-radius: ${({ theme }) => theme.radii.rounded};

  border: 2px solid ${({ theme }) => theme.colors.background};

  object-fit: cover;

  margin-left: -12px;

  position: relative;

  z-index: 1;

  transition:
    transform 0.3s ease,
    z-index 0.3s ease;

  &:first-child {
    margin-left: 0;
  }

  &:hover {
    transform: translateY(-4px);
    z-index: 10;
  }
`;

export const ProofText = styled.span`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textSecondary};

  strong {
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const StatCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};

  border: 1px solid transparent;

  box-shadow: ${({ theme }) => theme.shadows.main};

  border-radius: ${({ theme }) => theme.radii.lg};

  padding: 24px;

  display: flex;
  align-items: center;
  gap: 20px;

  transition: ${({ theme }) => theme.transitions.main};

  &:hover {
    border: ${({ theme }) => theme.colors.hoverBorderAccent};

    box-shadow: ${({ theme }) => theme.shadows.hoverShadowAccent};

    transform: translateY(-2px);
  }

  h3 {
    font-size: 2rem;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.textPrimary};
    line-height: 1.2;
  }

  p {
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-top: 2px;
  }
`;

export const IconWrapper = styled.div`
  width: 56px;
  height: 56px;

  flex-shrink: 0;

  border-radius: ${({ theme }) => theme.radii.lg};

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.8rem;

  &.green {
    background-color: ${({ theme }) => theme.colors.accentBgSuccess};
  }

  &.orange {
    background-color: ${({ theme }) => theme.colors.accentBgWarning};
  }
`;
