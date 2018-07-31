import { combineReducers } from 'redux';
import recipes from './recipesReducer';
import cart from './cartReducer';

export default combineReducers({
  recipes: recipes,
  cart: cart
});
