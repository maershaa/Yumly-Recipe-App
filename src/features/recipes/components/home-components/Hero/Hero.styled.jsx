import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeroSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  align-items: center;

  border: 2px dashed ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};

  padding: 20px 30px;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 0.9fr;
    gap: 60px;
  }
`;

export const HeroContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  text-align: center;

  @media (min-width: 768px) {
    align-items: flex-start;
    text-align: left;
  }

  p {
    color: var(--text-secondary);

    font-size: 2rem;
    line-height: 1.6;

    font-style: italic;
    font-weight: 700;
    letter-spacing: 1px;
  }

  h1 {
    font-size: 2.8rem;
    color: var(--text-primary);
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: 16px;

    @media (min-width: 1200px) {
      font-size: 3.5rem;
    }
  }

  h2 {
    font-size: 1.5rem;
    color: var(--text-secondary);
    font-style: italic;

    font-weight: 400;
    line-height: 1.6;
    margin-bottom: 35px;
    max-width: 540px;

    @media (min-width: 1200px) {
      font-size: 2rem;
    }
  }
`;

export const ButtonsGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;

  @media (min-width: 480px) {
    flex-direction: row;
    width: auto;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  font-weight: 600;
  font-size: 1rem;
  padding: 14px 28px;
  border-radius: ${({ theme }) => theme.radii.lg};
  transition: all 0.3s ease;
  width: 100%;

  @media (min-width: 480px) {
    width: auto;
  }

  &.green {
    background-color: ${({ theme }) => theme.colors.accentBgSuccess};

    &:hover {
      transform: translateY(-2px);
      box-shadow: var(--hover-shadow-accent);
    }
  }

  &.orange {
    background-color: ${({ theme }) => theme.colors.accentBgWarning};

    &:hover {
      transform: translateY(-2px);
      box-shadow: var(--hover-shadow-secondary);
    }
  }
`;

export const HeroImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: ${({ theme }) => theme.radii.lg};
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
`;
