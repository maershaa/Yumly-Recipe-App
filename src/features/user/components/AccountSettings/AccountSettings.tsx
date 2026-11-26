import { useContext } from 'react';
import { ThemeContext } from '@/context';

import { IoSettingsOutline } from 'react-icons/io5';
import { FaSun } from 'react-icons/fa';
import { ImBlocked } from 'react-icons/im';
import {
  AccountSettingsSection,
  SectionHeader,
  InfoCard,
} from './AccountSettings.styled';
import { ThemeButton } from '@/components/ui';
export const AccountSettings = () => {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error('HeaderComponent must be used within ThemeProvider');
  const { theme, toggleTheme } = context;

  return (
    <AccountSettingsSection>
      <SectionHeader>
        <IoSettingsOutline className="sectionIcon" aria-hidden="true" />
        <h2 className="sectionTitle">Account Settings</h2>
      </SectionHeader>

      <InfoCard>
        <div className="settingRow">
          <FaSun className="settingIcon" aria-hidden="true" />
          <span className="settingLabel">Site theme </span>{' '}
          <div className="settingControl">
            <span className="settingValue">{theme}</span>
            <ThemeButton />
          </div>
        </div>

        <div className="settingRow">
          <ImBlocked className="settingIcon resetPassword" aria-hidden="true" />
          <span className="settingLabel">Password </span>{' '}
          <button type="button" className="actionButton">
            Reset password
          </button>
        </div>
      </InfoCard>
    </AccountSettingsSection>
  );
};
