import { TabsBar, TabButton } from './RecipeFormTabs.styled';

const RecipeFormTabs = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'generalInfo', label: 'Basic Info' },
    { id: 'ingredients', label: 'Ingredients' },
    { id: 'cooking', label: 'Cooking Steps' },
  ];

  return (
    <TabsBar role="tablist">
      {tabs.map(({ id, label }) => {
        const isActive = activeTab === id;
        return (
          <TabButton
            key={id}
            type="button"
            role="tab"
            aria-selected={isActive}
            $isActive={isActive}
            onClick={() => onTabChange(id)}
          >
            <span> {label}</span>
          </TabButton>
        );
      })}
    </TabsBar>
  );
};

export { RecipeFormTabs };
