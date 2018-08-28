import { INIT_RECIPES, ADD_RECIPE, REMOVE_RECIPE } from '../../../shared/constants/ActionsTypes';

import { buildRecipeModel } from '../../../shared/model/recipes';
import recipes from '../../../shared/data/recipes.json';

export const initRecipes = () => {
    const recipeList = buildRecipeModel(recipes);

    return {
        type: INIT_RECIPES,
        payload: { recipeList },
    }
}

export const addRecipe = (recipe) => {
    
    return {
        type: ADD_RECIPE,
        payload: {
            recipeId: recipe.id,
            ingrediends: recipe.ingredients,
            title: recipe.title,
            servings: recipe.servings
        }
    }
};

export const removeRecipe = (recipeId) => ({
    type: REMOVE_RECIPE,
    payload: { recipeId },
});