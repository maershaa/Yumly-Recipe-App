import styled from 'styled-components';

export const ProfileStatsSection = styled.section`
  margin-top: 70px;

  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: stretch;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    gap: 20px;
    justify-content: space-around;
  }

  .nextSvg {
    display: block;
    width: 26px;
    height: 26px;
    flex-shrink: 0;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      width: 32px;
      height: 32px;
    }
  }
`;

export const StatsElement = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: baseline;
  justify-content: center;

  flex: 0 0 320px;
  width: 100%;

  padding: 24px;
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};

  &:hover {
    transform: translateY(-4px);
  }

  .info {
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
    justify-content: space-between;

    svg {
      display: block;
      width: 26px;
      height: 26px;
      flex-shrink: 0;

      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 32px;
        height: 32px;
      }
    }

    h3 {
      text-align: left;

      font-size: 2rem;
      color: ${({ theme }) => theme.colors.textPrimary};
      font-weight: 500;
      line-height: 1.4;
      margin-bottom: 10px;
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

    /* p {
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      color: ${({ theme }) => theme.colors.textSecondary};
    } */
  }
`;
