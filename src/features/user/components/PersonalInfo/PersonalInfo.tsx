import { FaRegUser } from 'react-icons/fa6';
import { PersonalInfoSection } from './PersonalInfo.styled';

interface PersonalInfoProps {
  name: string;
  email: string;
  registerDate: string;
}

export const PersonalInfo = ({
  name,
  email,
  registerDate,
}: PersonalInfoProps) => {
  return (
    <PersonalInfoSection>
      <header>
        <FaRegUser />
        <h2>Personal Information</h2>
      </header>
      <div>
        <p>
          Name <span>{name}</span>!
        </p>
        <p>
          Email <span>{email}</span>
        </p>
        <p>
          Member Since <span>{registerDate}</span>
        </p>
      </div>
    </PersonalInfoSection>
  );
};
