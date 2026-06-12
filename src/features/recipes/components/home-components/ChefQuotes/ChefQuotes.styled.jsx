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
  /* горизонтальный скролл */
  overflow-x: auto;

  /* важно: даёт "воздух", чтобы snap не прилипал к краю */
  scroll-padding: 40px;

  /* мягкий scroll (работает в большинстве браузеров) */
  scroll-behavior: smooth;

  /* карусельный snap */
  scroll-snap-type: x mandatory;

  padding: 20px 40px 50px 40px;

  /* визуальный индикатор "есть контент справа" */
  box-shadow: inset -20px 0 20px -20px rgba(0, 0, 0, 0.15);

  /* scrollbar styling (WebKit) */
  &::-webkit-scrollbar {
    height: 8px; /* толщина горизонтального скролла */
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) =>
      theme.colors.accentSecondary}; /* ползунок */
    border-radius: ${({ theme }) => theme.radii.pill}; /* скругление */
  }
`;

export const QuotesList = styled.ul`
  display: flex;
  gap: 24px;

  /* убирает стандартные отступы UL */
  margin: 0;
  padding: 0;

  /* важно для snap поведения */
  list-style: none;
`;

export const QuotesItem = styled.li`
  /* фиксированная ширина карточки для карусели */
  flex: 0 0 380px;

  /* ключевой параметр snap */
  scroll-snap-align: start;

  /* делает "жёсткую остановку" при прокрутке */
  scroll-snap-stop: always;

  display: flex;
  flex-direction: column;

  min-height: 320px;

  padding: 28px;

  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.main};

  transition: ${({ theme }) => theme.transitions.main};

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
  }

  .quote-icon {
    position: absolute;
    top: -20px;
    left: -5px;

    font-size: 5rem;
    color: ${({ theme }) => theme.colors.accent};
    opacity: 0.2;
    line-height: 1;
  }

  blockquote p {
    font-size: 1rem;
    line-height: 1.8;
    font-style: italic;
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  figcaption {
    display: flex;
    align-items: center;

    gap: 14px;
    margin-top: 24px;
    padding-top: 20px;

    border-top: 1px solid ${({ theme }) => theme.colors.border};
  }

  .chef-avatar {
    width: 80px;
    height: 80px;

    border-radius: ${({ theme }) => theme.radii.rounded};
    object-fit: cover;
    border: 2px solid ${({ theme }) => theme.colors.hoverBorderAccent};
  }

  .chef-info {
    display: flex;
    flex-direction: column;
  }

  .chef-name {
    font-style: normal;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  .chef-status {
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;
