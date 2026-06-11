import { QuickActionsSection } from './QuickActions.styled';

const QuickActions = () => {
  return (
    <QuickActionsSection>
      <h2>Quick Actions</h2>
      <button>Create Recipe</button>
      <button>Browse Recipes</button>
      <button>My Cookbook</button>
    </QuickActionsSection>
  );
};

export { QuickActions };
