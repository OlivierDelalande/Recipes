import React from 'react';
import { connect } from 'react-redux'
import { initRecipes, addRecipe, removeRecipe } from '../../../shared/constants/ActionsTypes';
import Recipe from './Recipe';


class Recipes extends React.Component {

    componentWillMount() {
        this.props.initRecipes();
        this.props.getRoute('recipes');
    }

    addRecipeToCart = (id) => {
        const chosenRecipe = this.props.recipes.filter(item => item.id === id);
        this.props.addRecipe(chosenRecipe[0]);
    }

    removeItem = (recipeId) => {
      this.props.removeRecipe(recipeId);
    }
    render() {

        const listOfRecipes = this.props.recipes
        ? this.props.recipes.map(item => {
            const isInCart = this.props.cart.filter(recipe => item.id === recipe.id);

            return (
                <Recipe
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  instructions={item.instructions}
                  ingredients={item.ingredients}
                  servings={item.servings}
                  addToCart={this.addRecipeToCart}
                  removeFromCart={this.removeItem}
                  isInCart={isInCart.length > 0}
                />);
            })
        : null;

        return (<div>
            <h1 style={{textAlign: 'center'}}>Discover and make our greatest recipes !</h1>
            <h2 style={{textAlign: 'center'}}>Add recipes you want to make, and go in your cart check out what ingredients you need</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '100px'}}>
                {listOfRecipes}
            </div>
        </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        recipes: state.recipes.recipeList,
        cart: state.cart.recipes,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        initRecipes: () => dispatch(initRecipes()),
        addRecipe: (recipe) => dispatch(addRecipe(recipe)),
        removeRecipe: (recipeId) => dispatch(removeRecipe(recipeId))
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Recipes)