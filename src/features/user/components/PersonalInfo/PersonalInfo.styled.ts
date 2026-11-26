import styled from 'styled-components';

export const PersonalInfoSection = styled.section`
  margin-top: 70px;

  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const SectionHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;

  .sectionIcon {
    width: 30px;
    height: 30px;
    flex-shrink: 0; //  запрещаем иконке сжиматься, если текст длинный */
  }

  .sectionTitle {
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.2;

    color: ${({ theme }) => theme.colors.textPrimary};

    @media (min-width: ${({ theme }) => theme.breakpoints.mobileLarge}) {
      font-size: 2rem;
    }
  }
`;

export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: start;

  padding: 24px;
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};

  .infoRow {
    margin: 0 0 5px 0;
    @media (min-width: ${({ theme }) => theme.breakpoints.mobileLarge}) {
      margin: 12px 0;
    }
  }

  .infoLabel {
    margin: 0 0 5px 0;

    overflow-wrap: anywhere; //разрешает браузеру переносить длинное слово в любом месте, если оно не помещается в контейнер

    font-size: 1.2rem;
    font-weight: 500;

    color: ${({ theme }) => theme.colors.textPrimary};

    @media (min-width: ${({ theme }) => theme.breakpoints.mobileLarge}) {
      margin: 0;
      width: 150px;
      float: left; // это способ создать две колонки. или можно использовать Grid
    }
  }

  .infoValue {
    margin: 0 0 15px 0;

    overflow-wrap: anywhere; //разрешает браузеру переносить длинное слово в любом месте, если оно не помещается в контейнер

    font-size: 1.2rem;
    font-weight: 500;

    color: ${({ theme }) => theme.colors.textSecondary};

    @media (min-width: ${({ theme }) => theme.breakpoints.mobileLarge}) {
      margin: 0 0 0 150px; //отступ на размер ширины левой колонки
    }
  }
`;
