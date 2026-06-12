import styled from 'styled-components';

export const SmartRecommendationsSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;

  padding: 80px 0px;

  margin: 0 auto 40px auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 60px;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  text-align: center;

  h2 {
    font-size: 1rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;

    color: var(--text-secondary);
    font-weight: 600;

    opacity: 0.8;

    margin-bottom: 20px;
  }

  h3 {
    margin: 16px 0;

    display: inline;
    font-size: 2.5rem;
    font-style: italic;
    font-weight: 800;
    line-height: 1.4;

    max-width: 540px;

    text-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);
    background: linear-gradient(
      120deg,
      var(--text-primary) 0%,
      var(--accent-color) 60%,
      rgba(94, 224, 163, 0.6) 100%
    );

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    letter-spacing: -0.02em;
    text-wrap: balance;

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      font-size: 2.7rem;
    }
  }

  span {
    margin-left: 15px;
    font-style: normal;
    -webkit-text-fill-color: initial;
    background: none;
    display: inline-block;
    transform: translateY(-2px);
    animation: floatEmoji 3s ease-in-out infinite;
  }

  @keyframes floatEmoji {
    0%,
    100% {
      transform: translateY(-2px);
    }
    50% {
      transform: translateY(-6px);
    }
  }

  p {
    color: var(--text-secondary);

    font-size: 2rem;
    line-height: 1.6;

    font-style: italic;
    font-weight: 700;
    letter-spacing: 1px;
  }
`;
