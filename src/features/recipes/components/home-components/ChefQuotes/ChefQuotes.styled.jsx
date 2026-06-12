import styled from 'styled-components';

export const QuotesSection = styled.section`
  display: flex;
  flex-direction: column;

  gap: 60px;

  padding: 80px 0px;
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
    margin-bottom: 24px;
  }

  h2 {
    max-width: 700px;

    font-size: 2.5rem;
    font-weight: 800;
    line-height: 1.2;

    margin-bottom: 20px;
  }

  h2 span {
    background: linear-gradient(
      120deg,
      var(--text-primary) 0%,
      var(--accent-color) 60%,
      rgba(94, 224, 163, 0.6) 100%
    );

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .sectionDescription {
    max-width: 650px;
    color: var(--text-secondary);
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;

export const ScrollContainer = styled.div`
  overflow-x: auto;

  padding: 20px 40px 50px 40px;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--card-secondary-color);
    border-radius: 999px;
  }
`;

export const QuotesList = styled.ul`
  display: flex;
  gap: 24px;
`;

export const QuotesItem = styled.li`
  flex: 0 0 380px;

  display: flex;
  flex-direction: column;

  min-height: 320px;

  padding: 28px;

  background-color: var(--surface-color);
  border: 1px solid var(--border-color);
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.main};

  transition: ${({ theme }) => theme.transitions.main};

  &:hover {
    transform: translateY(-4px);

    border-color: var(--accent-color);
  }

  figure {
    display: flex;
    flex-direction: column;

    height: 100%;
  }

  blockquote {
    position: relative;
    flex: 1;
  }

  .quote-icon {
    position: absolute;
    top: -20px;
    left: -5px;

    font-size: 5rem;
    color: var(--accent-color);
    opacity: 0.2;
    line-height: 1;
  }

  blockquote p {
    font-size: 1rem;
    line-height: 1.8;
    font-style: italic;
    color: var(--text-primary);
  }

  figcaption {
    display: flex;
    align-items: center;

    gap: 14px;
    margin-top: 24px;
    padding-top: 20px;
    border-top: 1px solid var(--border-color);
  }

  .chef-avatar {
    width: 80px;
    height: 80px;

    border-radius: ${({ theme }) => theme.radii.rounded};
    object-fit: cover;
    border: 2px solid var(--accent-color);
  }

  .chef-info {
    display: flex;
    flex-direction: column;
  }

  .chef-name {
    font-style: normal;
    font-weight: 700;
    color: var(--text-primary);
  }

  .chef-status {
    font-size: 0.85rem;
    color: var(--text-secondary);
  }
`;
