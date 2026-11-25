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
  flex: 1; /* равнозначно flex: 1 1 0% — делит доступное пространство поровну */
  min-width: 0; /* помогает при длинном тексте без переноса */
  min-height: 100px;

  padding: 24px;
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};

  transition: ${({ theme }) => theme.transitions.main};

  &:hover {
    transform: translateY(-4px);
  }

  .info {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    gap: 16px;

    width: 100%;
    min-width: 0;

    svg {
      display: block;

      flex-shrink: 0;

      width: 26px;
      height: 26px;
    }

    h3 {
      min-width: 0;
      margin: 0;

      overflow-wrap: anywhere; //разрешает браузеру переносить длинное слово в любом месте, если оно не помещается в контейнер
      text-align: left;

      font-size: 1rem;
      font-weight: 500;
      line-height: 1.4;

      color: ${({ theme }) => theme.colors.textPrimary};

      @media (min-width: ${({ theme }) => theme.breakpoints.mobileLarge}) {
        font-size: 1.6rem;
      }
    }

    h2 {
      flex-shrink: 0;
      margin: 0 0 0 auto;

      font-size: 1.8rem;
      font-weight: 800;
      line-height: 1.2;

      color: ${({ theme }) => theme.colors.textPrimary};

      @media (min-width: ${({ theme }) => theme.breakpoints.mobileLarge}) {
        font-size: 2.1rem;
      }
    }

    h2:last-child {
      margin-right: 40px; //так как 3 компонент не имеет > для перехода по ссылке

      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        margin-right: 0;
      }
    }
  }
`;
