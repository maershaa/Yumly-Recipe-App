import { TabsBar, TabButton } from './RecipeFormTabs.styled';
import type { RecipeFormTabsId, RecipeFormTabsLabel } from '@/types';

interface Tab {
  id: RecipeFormTabsId;
  label: RecipeFormTabsLabel;
}
type Tabs = Tab[];

interface RecipeFormTabsProps {
  activeTab: RecipeFormTabsId;
  onTabChange: (id: RecipeFormTabsId) => void;
}

const RecipeFormTabs = ({ activeTab, onTabChange }: RecipeFormTabsProps) => {
  const tabs: Tabs = [
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
