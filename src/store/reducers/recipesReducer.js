import { INIT_RECIPES } from '../actions/types';

const initialState = {
    recipeList: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case INIT_RECIPES: {
            return {
                ...state,
                recipeList: action.payload.recipeList,
            };
        }
        default:
            return state;
    }
}