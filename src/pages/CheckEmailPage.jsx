import { Link } from 'react-router-dom';

const CheckEmailPage = () => {
  return (
    <div>
      <h1>Check your email</h1>

      <p>We've sent a confirmation email.</p>

      <p>Open your inbox and click the verification link before signing in.</p>

      <Link to="/auth/login">Back to Sign In</Link>
    </div>
  );
};

export default CheckEmailPage;
