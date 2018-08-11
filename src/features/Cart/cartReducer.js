import { ADD_RECIPE, REMOVE_RECIPE, SORT_INGREDIENTS } from '../../shared/constants/ActionsTypes';

const initialState = {
    recipes: [],
    ingredients: null
}

export default function (state = initialState, action) {

    switch (action.type) {
        case ADD_RECIPE: {
            return {
                ...state,
                recipes: [...state.recipes,
                    {
                    id: action.payload.recipeId,
                    ingredients: action.payload.ingrediends
                }],
            }
        }
        case REMOVE_RECIPE: {
            const recipeIndex = state.recipes.findIndex(item => item.id === action.payload.recipeId);
            const newRecipeList = state.recipes;
            newRecipeList.splice(recipeIndex, 1);
            return {
                ...state,
                recipes: [...newRecipeList],
            }
        }

        case SORT_INGREDIENTS: {
            return {
                ...state,
                ingredients: action.payload.orderedIngredients,
            }
        }
        default:
            return state;
    }
}