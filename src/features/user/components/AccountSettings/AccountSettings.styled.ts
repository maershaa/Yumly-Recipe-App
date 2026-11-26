import styled from 'styled-components';

export const AccountSettingsSection = styled.section`
  margin-top: 70px;

  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const SectionHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 12px;

  .sectionIcon {
    width: 30px;
    height: 30px;
    flex-shrink: 0; //  запрещаем иконке сжиматься, если текст длинный */
    color: ${({ theme }) => theme.colors.textPrimary};
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

  .settingRow {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px 16px;

    font-size: 1.2rem;
    font-weight: 500;

    color: ${({ theme }) => theme.colors.textPrimary};
  }

  .settingIcon {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  .settingLabel {
    font-size: 1.1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  .settingControl {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
    margin-left: auto;
  }

  .settingValue {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  .actionButton {
    padding: 8px 12px;
    border: 1px solid ${({ theme }) => theme.colors.danger};
    border-radius: ${({ theme }) => theme.radii.md};
    background-color: transparent;

    color: ${({ theme }) => theme.colors.textPrimary};
    font: inherit;

    transition: ${({ theme }) => theme.transitions.main};

    &:hover {
      background-color: ${({ theme }) => theme.colors.dangerHover};
      box-shadow: ${({ theme }) => theme.colors.hoverShadowDanger};
    }
  }
`;
