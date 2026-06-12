import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {
  FooterWrapper,
  Main,
  Tagline,
  Socials,
  SocialLink,
  Bottom,
} from './Footer.styled';

import { Logo } from '@/components/Logo/Logo';

const Footer = () => {
  return (
    <FooterWrapper>
      <Main>
        <Logo></Logo>

        <Tagline>
          Explore recipes, organize your favorites, and share your cooking
          ideas.
        </Tagline>

        <Socials>
          <li>
            <SocialLink
              href="https://github.com/maershaa"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </SocialLink>
          </li>

          <li>
            <SocialLink
              href="https://www.linkedin.com/in/valeriiayefremova/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </SocialLink>
          </li>
        </Socials>
      </Main>

      <Bottom>© 2026 Yumly. Built with React, Redux Toolkit and Love.</Bottom>
    </FooterWrapper>
  );
};

export { Footer };
