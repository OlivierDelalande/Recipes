import tomato_cucumber_avocado_salad from '../assets/tomato-cucumber-avocado-salad.jpg';
import baked_angel_hair_pasta_with_sausage from '../assets/baked-angel-hair-pasta-with-sausage.jpg';
import butter_and_herb_poached_shrimp from '../assets/butter-and-herb-poached-shrimp.jpg';
import crab_and_apple_coleslaw from '../assets/crab-and-apple-coleslaw.jpg';
import maple_soy_grilled_salmon_steak from '../assets/maple-soy-grilled-salmon-steak.jpg';
import salmon_on_the_grill_with_lemon_butt from '../assets/salmon-on-the-grill-with-lemon-butt.jpg';
import spicy_garlic_rosemary_shrimp_pasta from '../assets/spicy-garlic-rosemary-shrimp-pasta.jpg';
import summer_tomato_and_crab_salad from '../assets/summer-tomato-and-crab-salad.jpg';
import zucchini_noodles_with_lemon_garlic from '../assets/zucchini-noodles-with-lemon-garlic.jpg';
import angel_hair_pasta_with_lemon_and_garl from '../assets/angel_hair_pasta_with_lemon_and_garl.jpg';

const imgs =  [
    {name: 'tomato_cucumber_avocado_salad', url: tomato_cucumber_avocado_salad},
    {name: 'baked_angel_hair_pasta_with_sausage', url: baked_angel_hair_pasta_with_sausage},
    {name: 'butter_and_herb_poached_shrimp', url: butter_and_herb_poached_shrimp},
    {name: 'crab_and_apple_coleslaw', url: crab_and_apple_coleslaw},
    {name: 'maple_soy_grilled_salmon_steak', url: maple_soy_grilled_salmon_steak},
    {name: 'salmon_on_the_grill_with_lemon_butt', url: salmon_on_the_grill_with_lemon_butt},
    {name: 'spicy_garlic_rosemary_shrimp_pasta', url: spicy_garlic_rosemary_shrimp_pasta},
    {name: 'summer_tomato_and_crab_salad', url: summer_tomato_and_crab_salad},
    {name: 'zucchini_noodles_with_lemon_garlic', url: zucchini_noodles_with_lemon_garlic},
    {name: 'angel_hair_pasta_with_lemon_and_garl', url: angel_hair_pasta_with_lemon_and_garl}
];

export const buildCumulatedIngredient = (ingredient, qty) => ({
        ingredient_id: ingredient.ingredient_id,
        name: ingredient.name,
        dpt: ingredient.dpt,
        qty: qty,
        unit: ingredient.unit
    });


export const  buildRecipeModel = (recipes) => {
    return recipes.map(item => {

        const ingredients = item.ingredients.map(item => ({
            ingredient_id: item.display_index,
            name: item.name,
            dpt: item.department,
            qty: item.quantity,
            unit: item.unit,
        }))
        return {
          id: item.recipe_id,
          title: item.title,
          image: imgs.filter(img => img.name === item.image_name)[0],
          instructions: item.instructions,
          servings: item.servings,
          ingredients: ingredients,
        }
    })
}