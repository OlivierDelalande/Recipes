import { combineReducers } from 'redux';
import recipes from '../features/Products/recipesReducer';
import cart from '../features/Cart/cartReducer';

export default combineReducers({
  recipes: recipes,
  cart: cart
});
