import styled from 'styled-components';

const FooterWrapper = styled.footer`
  margin-top: 3.75rem;
  padding: 1.5rem 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  text-align: center;
`;

const Tagline = styled.p`
  max-width: 22rem;

  font-size: 1rem;
  line-height: 1.5;
  margin: 0;
  font-style: italic;

  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Socials = styled.ul`
  display: flex;
  gap: 0.75rem;

  list-style: none;
  padding: 0;
  margin-top: 0.375rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2.25rem;
  height: 2.25rem;

  border-radius: ${({ theme }) => theme.radii.rounded};
  background-color: ${({ theme }) => theme.colors.cardSecondary};
  color: ${({ theme }) => theme.colors.textPrimary};

  transition: ${({ theme }) => theme.transitions.main};

  svg {
    font-size: 1.25rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentSecondary};
    color: ${({ theme }) => theme.colors.background};

    transform: translateY(-2px);

    box-shadow: ${({ theme }) => theme.shadows.main};
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.accentSecondary};
  }
`;

const Bottom = styled.div`
  margin-top: 1rem;
  padding-top: 0.75rem;

  border-top: 1px solid ${({ theme }) => theme.colors.border};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  font-size: 1rem;
  flex-wrap: wrap;
  text-align: center;

  color: ${({ theme }) => theme.colors.textSecondary};
`;

export { FooterWrapper, Main, Tagline, Socials, SocialLink, Bottom };
