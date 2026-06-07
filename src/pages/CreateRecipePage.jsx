import { PageTitle } from '@/components';
import { RecipeForm } from '@/features/recipes/components';

const CreateRecipePage = () => {
  // !На бекенд будем отправлять что-то такого формата
  // {
  // calories:null,
  // cooking_time:null,
  // created_at: Date now(cooking_time),
  // cuisine:null,
  // difficulty:difficulty(),
  // id: uuId,
  // image_url:""
  // ingredients[{…},{…}]
  // instructions:"["Prepare custard", "Bake", "Caramelize sugar"]"
  // likes:0
  // recipe_name:"Creme Brulee"
  // tags:[]
  // updated_at:null
  // user_id: "bebbcbe2-5b78-416f-ac1d-dbfad7aa07f1"
  // }

  /*   const onSubmit = (e) => {
    e.preventDefault();

    const fullForm = {
      calories: null,
      cooking_time: infoForm.cooking_time,
      created_at: Date.now(),
      cuisine: infoForm?.cuisine || null,
      difficulty: difficulty(infoForm.cooking_time),
      id: recipeId,
      image_url: '',
      ingredients: ingredientsForm,
      instructions: stepsForm,
      likes: 0,
      recipe_name: infoForm.title,

      tags: [],
      updated_at: null,
      //! user_id: "bebbcbe2-5b78-416f-ac1d-dbfad7aa07f1"
    };

    console.log('🚀 ~ onSubmit ~ fullForm:', fullForm);
  }; */

  return (
    <div>
      <PageTitle>Add Recipe </PageTitle>

      <RecipeForm />
    </div>
  );
};

export default CreateRecipePage;
