import { BenefitsSection, BenefitsList, BenefitCard } from './Benefits.styled';

import { cake, chef_hat, rice } from '@/assets/images';

const Benefits = () => {
  return (
    <BenefitsSection>
      <p className="sectionLabel">Why Yumly ?</p>

      <h2>
        Everything You Need to Manage
        <span> Your Recipes</span>
      </h2>

      <p className="sectionDescription">
        Create your own recipes, discover new dishes and keep everything
        organized in one personal cookbook.
      </p>

      <BenefitsList>
        <BenefitCard>
          <div className="badge success">Create</div>

          <img src={cake} alt="" loading="lazy" />

          <h3>Create Your Own Recipes</h3>

          <p>
            Add ingredients, cooking instructions and photos to build recipes
            exactly the way you like.
          </p>

          <span className="number">01</span>
        </BenefitCard>

        <BenefitCard>
          <div className="badge warning">Discover</div>

          <img src={chef_hat} alt="" loading="lazy" />

          <h3>Find Recipes Instantly</h3>

          <p>
            Search recipes by cuisine, cooking time and difficulty to discover
            your next favorite meal.
          </p>

          <span className="number">02</span>
        </BenefitCard>

        <BenefitCard>
          <div className="badge success">Save</div>

          <img src={rice} alt="" loading="lazy" />

          <h3>Build Your Personal Cookbook</h3>

          <p>
            Store all your favorite recipes in one place and access them anytime
            from any device.
          </p>

          <span className="number">03</span>
        </BenefitCard>
      </BenefitsList>
    </BenefitsSection>
  );
};

export { Benefits };
