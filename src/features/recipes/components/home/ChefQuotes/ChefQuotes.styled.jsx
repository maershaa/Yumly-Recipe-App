import styled from 'styled-components';

export const QuotesSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 48px;
  padding: 60px 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 80px 0;
    gap: 60px;
  }
`;

export const QuotesHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .sectionLabel {
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;

    color: ${({ theme }) => theme.colors.accent};
    background-color: ${({ theme }) => theme.colors.accentBgSuccess};
    padding: 8px 16px;
    border-radius: ${({ theme }) => theme.radii.pill};
    margin-bottom: 18px;
  }

  h2 {
    max-width: 700px;

    font-size: 2.5rem;
    font-weight: 800;
    line-height: 1.2;

    margin-bottom: 16px;
  }

  h2 span {
    background: ${({ theme }) => theme.gradients.textAccent};

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .sectionDescription {
    max-width: 650px;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;

export const ScrollContainer = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;

    padding: 10px 24px 40px;

    &::-webkit-scrollbar {
      height: 6px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.accentSecondary};
      border-radius: ${({ theme }) => theme.radii.pill};
    }
  }
`;

export const QuotesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    gap: 20px;
    align-items: stretch;
  }
`;

export const QuotesItem = styled.li`
  flex: 0 0 280px;
  width: 100%;

  padding: 24px;
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.main};

  transition: ${({ theme }) => theme.transitions.main};

  @media (min-width: ${({ theme }) => theme.breakpoints.mobileLarge}) {
    flex: 0 0 320px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex: 0 0 360px;
    scroll-snap-align: start;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.colors.accent};
  }

  figure {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  blockquote {
    position: relative;
    flex: 1;
    margin: 0;
  }

  .quote-icon {
    position: absolute;
    top: -18px;
    left: -4px;

    font-size: 4rem;
    color: ${({ theme }) => theme.colors.accent};
    opacity: 0.15;
  }

  blockquote p {
    font-size: 1rem;
    line-height: 1.7;
    font-style: italic;
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  figcaption {
    display: flex;
    align-items: center;
    gap: 12px;

    margin-top: 20px;
    padding-top: 16px;
    border-top: 1px solid ${({ theme }) => theme.colors.border};
  }

  .chef-avatar {
    width: 64px;
    height: 64px;
    border-radius: ${({ theme }) => theme.radii.rounded};
    object-fit: cover;
    border: 2px solid ${({ theme }) => theme.colors.hoverBorderAccent};
  }

  .chef-name {
    font-weight: 700;
    font-style: normal;
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  .chef-status {
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;
