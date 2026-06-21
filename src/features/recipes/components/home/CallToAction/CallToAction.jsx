import { Link, useLocation } from 'react-router-dom';
import { CtaSection } from './CallToAction.styled';

const CallToAction = () => {
  const location = useLocation();

  return (
    <CtaSection>
      <div className="content">
        <span className="emoji">✨</span>

        <p className="badge">READY TO COOK?</p>

        <h2>Every Great Recipe Has a Story</h2>

        <p className="description">
          Capture your culinary journey, save memorable dishes, and create a
          cookbook you'll return to again and again.
        </p>

        <Link
          to="/my-recipes/new"
          state={{
            from: location.pathname + location.search,
          }}
          className="ctaButton"
        >
          Get Started
        </Link>
      </div>
    </CtaSection>
  );
};

export { CallToAction };
