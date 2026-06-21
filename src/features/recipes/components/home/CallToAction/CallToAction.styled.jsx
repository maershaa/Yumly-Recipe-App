import styled from 'styled-components';

export const CtaSection = styled.section`
  padding: 80px 0px;

  .content {
    position: relative;

    overflow: hidden;
    margin: 0 auto;
    text-align: center;
    padding: 80px 40px;

    background-color: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radii.lg};
    box-shadow: ${({ theme }) => theme.shadows.main};
  }

  .content::before {
    content: '';

    position: absolute;

    width: 300px;
    height: 300px;

    top: -120px;
    left: -120px;

    border-radius: 50%;

    background: rgba(94, 224, 163, 0.12);
    filter: blur(80px);

    pointer-events: none;
  }

  .content::after {
    content: '';

    position: absolute;

    width: 250px;
    height: 250px;

    right: -80px;
    bottom: -80px;

    border-radius: 50%;

    background: rgba(248, 184, 98, 0.12);
    filter: blur(80px);

    pointer-events: none;
  }

  .content .emoji {
    position: absolute;

    right: 30px;
    top: 20px;

    font-size: 6rem;

    opacity: 0.4;
    user-select: none;
    pointer-events: none;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 34px;

    color: ${({ theme }) => theme.colors.accentSecondary};

    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 2px;

    text-transform: uppercase;
  }

  h2 {
    max-width: 700px;
    margin: 0 auto 24px;
    font-size: 2.5rem;
    font-weight: 800;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.textPrimary};

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      font-size: 3rem;
    }
  }

  .description {
    max-width: 650px;
    margin: 0 auto 40px;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 1.1rem;
    line-height: 1.7;
    font-style: italic;
  }

  .ctaButton {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    min-width: 220px;
    padding: 16px 32px;
    border-radius: ${({ theme }) => theme.radii.pill};
    background-color: ${({ theme }) => theme.colors.accentSecondary};

    font-weight: 700;
    font-size: 1rem;

    transition: ${({ theme }) => theme.transitions.main};

    &:hover,
    &:focus {
      transform: translateY(-2px);
      box-shadow: ${({ theme }) => theme.colors.hoverShadowSecondary};
    }
  }
`;
