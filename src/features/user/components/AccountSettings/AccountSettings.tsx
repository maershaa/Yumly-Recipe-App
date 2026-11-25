import { useContext } from 'react';
import { ThemeContext } from '@/context';

import { IoSettingsOutline } from 'react-icons/io5';
import { FaSun } from 'react-icons/fa';
import { ImBlocked } from 'react-icons/im';
import { AccountSettingsSection } from './AccountSettings.styled';
import { ThemeButton } from '@/components/ui';
export const AccountSettings = () => {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error('HeaderComponent must be used within ThemeProvider');
  const { theme, toggleTheme } = context;

  return (
    <AccountSettingsSection>
      <header>
        <IoSettingsOutline />
        <h2>Account Settings</h2>
      </header>
      <div>
        <p>
          <FaSun />
          <span>Site theme </span> <span>{theme}</span>
          <ThemeButton />
        </p>

        <p>
          <ImBlocked />
          <button type="button"> Reset password</button>
        </p>
      </div>
    </AccountSettingsSection>
  );
};
