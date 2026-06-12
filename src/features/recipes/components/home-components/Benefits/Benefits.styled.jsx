import styled from 'styled-components';

const BenefitsSection = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  margin: 0 auto 40px auto;

  align-items: center;

  .sectionLabel {
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 1px;

    color: ${({ theme }) => theme.colors.accent};
    background-color: ${({ theme }) => theme.colors.accentBgSuccess};
    border-radius: ${({ theme }) => theme.radii.pill};

    padding: 6px 14px;
  }

  h2 {
    text-align: center;

    margin-bottom: 30px;

    font-size: 2.5rem;
    font-weight: 800;
    line-height: 1.4;

    max-width: 540px;

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      font-size: 2.7rem;
    }
    span {
      text-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);
      background: linear-gradient(
        120deg,
        var(--text-primary) 0%,
        var(--accent-color) 60%,
        rgba(94, 224, 163, 0.6) 100%
      );

      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .sectionDescription {
    text-align: center;

    max-width: 650px;

    font-size: 1.6rem;
    color: var(--text-secondary);
    font-weight: 500;
    line-height: 1.4;
    margin-bottom: 30px;
  }
`;

const BenefitsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
  }
`;

const BenefitCard = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: var(--surface-color);
  box-shadow: ${({ theme }) => theme.shadows.main};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 24px;

  transition: ${({ theme }) => theme.transitions.main};

  &:hover,
  &:focus {
    border: ${({ theme }) => theme.colors.hoverBorderAccent};
    box-shadow: ${({ theme }) => theme.colors.hoverShadowAccent};
    transform: translateY(-2px);
  }

  .badge {
    max-width: fit-content;

    padding: 6px 14px;

    letter-spacing: 1px;
    font-size: 12px;
    font-weight: 700;

    border-radius: ${({ theme }) => theme.radii.pill};
  }

  .success {
    background-color: ${({ theme }) => theme.colors.accentBgSuccess};
    color: ${({ theme }) => theme.colors.accent};
  }

  .warning {
    background-color: ${({ theme }) => theme.colors.accentBgWarning};
    color: ${({ theme }) => theme.colors.accentSecondary};
  }

  img {
    margin: 0 auto;
    width: 90px;
    height: 90px;
  }

  h3 {
    text-align: left;

    font-size: 2rem;
    color: var(--text-primary);
    font-weight: 500;
    line-height: 1.4;
    margin-bottom: 10px;
  }

  p {
    text-align: left;

    font-size: 1.2rem;
    color: var(--text-secondary);
    font-weight: 500;
    line-height: 2;
    margin-bottom: 10px;
  }

  .number {
    position: absolute;

    bottom: 10px;
    right: 10px;
    font-size: 5rem;
    color: var(--text-secondary);
    font-weight: 500;
    line-height: 1.4;
    opacity: 0.1;
  }
`;

export { BenefitsSection, BenefitsList, BenefitCard };
