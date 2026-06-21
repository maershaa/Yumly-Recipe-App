import { VerifyEmailWrapper } from './VerifyEmail.styled';
import { RedirectComponent } from '@/components';
import { SlEnvelopeOpen } from 'react-icons/sl';

const VerifyEmail = () => {
  return (
    <VerifyEmailWrapper>
      <div>
        <SlEnvelopeOpen size={32} />
      </div>
      <h1>Check your email</h1>

      <p>We've sent a confirmation email.</p>
      <p>
        Open your inbox and
        <span> click the verification link </span>
        before signing in.
      </p>
      <p>
        If you don't see the email, check your <span>Spam</span> folder.
      </p>

      <RedirectComponent to={'/auth/login'} linkText={'Move to Sign In'} />
    </VerifyEmailWrapper>
  );
};

export { VerifyEmail };
