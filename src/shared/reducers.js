import { combineReducers } from 'redux';
import recipes from '../features/Products/Reducer/recipesReducer';
import cart from '../features/Cart/Reducer/cartReducer';

export default combineReducers({
  recipes: recipes,
  cart: cart
});
