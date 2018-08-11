import _ from 'lodash';
import {SORT_INGREDIENTS} from '../../shared/constants/ActionsTypes';
import { buildCumulatedIngredient } from '../../shared/model/recipes';

export const sortIngredients = (recipes) => {
    const ingredients = _.flatten(recipes.map(item => item.ingredients));
    const groupIngredientsByDpt = _.groupBy(ingredients, 'name');

    let newIngre = [];
    for(let item in groupIngredientsByDpt) {
        const newQty = _.sumBy(groupIngredientsByDpt[item], (o) => o.qty);
        newIngre.push(buildCumulatedIngredient(groupIngredientsByDpt[item][0], newQty));
    }

    const orderedIngredients = _.groupBy(newIngre, 'dpt');
    return {
        type: SORT_INGREDIENTS,
        payload: { orderedIngredients },
    }
}

