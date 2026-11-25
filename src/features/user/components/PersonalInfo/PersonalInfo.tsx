import { FaRegUser } from 'react-icons/fa6';
import {
  PersonalInfoSection,
  SectionHeader,
  InfoCard,
} from './PersonalInfo.styled';

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
      <SectionHeader>
        <FaRegUser className="sectionIcon" aria-hidden="true" />
        <h2 className="sectionTitle">Personal Information</h2>
      </SectionHeader>
      <InfoCard>
        <dl className="infoRow">
          <dt className="infoLabel">Name</dt>
          <dd className="infoValue">{name}</dd>
        </dl>

        <dl className="infoRow">
          <dt className="infoLabel">Email</dt>
          <dd className="infoValue">{email}</dd>
        </dl>

        <dl className="infoRow">
          <dt className="infoLabel">Member Since</dt>
          <dd className="infoValue">{registerDate}</dd>
        </dl>
      </InfoCard>
    </PersonalInfoSection>
  );
};
