import { PageTitle } from '@/components';
import { RecipeForm } from '@/features/recipes/components';

const CreateRecipePage = () => {
  return (
    <div>
      <PageTitle title={'Add Recipe'}> </PageTitle>

      <RecipeForm />
    </div>
  );
};

export default CreateRecipePage;
