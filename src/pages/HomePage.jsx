import {
  Hero,
  QuickActions,
  SmartRecommendations,
  Benefits,
  Statistics,
} from '@/features/recipes/components/home-components';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <QuickActions /> //! пока мне не нравится эта секция
      <Benefits />
      <SmartRecommendations />
      <Statistics />
      <section>
        <p>Start building your cookbook today</p>
        <button>Create Your First Recipe</button>
      </section>
    </div>
  );
};
export default HomePage;
