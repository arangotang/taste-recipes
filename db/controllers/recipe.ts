import Recipe from '../models/recipe';

interface RecipeProps {
  title: string;
  cuisine: string;
  image: string;
  description: string;
  times: unknown;
  ingredients: string[];
  steps: string[];
  _id?: any;
  __v?: number;
  id: string;
}

export const getAllRecipes = async (): Promise<RecipeProps[] | false> => {
  try {
    const allRecipes = await Recipe.find({});
    return allRecipes;
  } catch (e) {
    console.error(e);
    return false;
  }
};

export const getOneRecipe = async (
  id: string
): Promise<any | RecipeProps | false> => {
  try {
    const oneRecipe = await Recipe.find({ id });
    return oneRecipe;
  } catch (e) {
    console.error(e);
    return false;
  }
};

export const addRecipe = async ({
  title,
  cuisine,
  image,
  description,
  times,
  ingredients,
  steps,
  id,
}: RecipeProps): Promise<boolean> => {
  try {
    await Recipe.create({
      title,
      cuisine,
      image,
      description,
      times,
      ingredients,
      steps,
      id,
    });
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
};
