import {
  Hero,
  ChefQuotes,
  SmartRecommendations,
  Benefits,
  Statistics,
  CallToAction,
} from '@/features/recipes/components/home';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Benefits />
      <SmartRecommendations />
      <Statistics />
      <ChefQuotes />

      <CallToAction />
    </div>
  );
};
export default HomePage;
