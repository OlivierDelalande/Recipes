import React, { Component } from 'react';

import _ from 'lodash';
import { connect } from 'react-redux'
import CartDetails from '../../components/Cart/CartDetails';
import { sortIngredients } from '../../store/actions/cartActions';
import { removeRecipe } from '../../store/actions/recipesActions';

class Cart extends Component {
    componentWillMount() {
        this.props.sortIngredients(this.props.recipes);
        this.props.getRoute('cart');
    }

    getCartList = () => {
        const { recipes, recipeList } = this.props;
        const cartRecipes = recipes.map(cartRecipe => recipeList.filter(item => item.id === cartRecipe.id)[0])
        const groupedCartRecipes = _.groupBy(cartRecipes, 'title')

        return groupedCartRecipes;
    }

    removeItem = (recipeId) => {
        this.props.removeRecipe(recipeId);
        this.props.sortIngredients(this.props.recipes);
    }
    
    render () {
        return (
            <div>
                {this.props.recipes.length > 0 ?<CartDetails
                    ingredients={this.props.ingredients}
                    recipeList={this.getCartList()}
                    removeFromCart={this.removeItem}
                />
                :<h3 style={{ textAlign: 'center' }}>Your cart is empty ! Choose recipes you want to make from the recipes page</h3>}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        recipes: state.cart.recipes,
        ingredients: state.cart.ingredients,
        recipeList: _.sortBy(state.recipes.recipeList, 'id'),
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        sortIngredients: (recipes) => dispatch(sortIngredients(recipes)),
        removeRecipe: (recipeId) => dispatch(removeRecipe(recipeId))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart)