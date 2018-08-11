import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button/Button';

const styleDpt = {
    backgroundColor: '#3f51b5',
    position: 'relative',
    margin: '20px auto',
    width: '75%',
    padding: '10px',
    borderRadius: '15px'
}

const styleIng = {
    position: 'relative',
    marginLeft: '20%',
    marginBottom: '5px',
    display: 'flex',
    justifyContent: 'flex-start'
}

class CartDetails extends React.Component {
    componentWillMount() {
        window.scrollTo(0,0);
    }

    removeRecipe = (id) => (e) => this.props.removeFromCart(id);

    displayIngredients = () => {
        const { ingredients } = this.props;
        let res = [];
        for (let i in ingredients) {
            const result = ingredients[i].map(item => 
                <div key={item.name} style={styleIng}>
                    <div style={{ width: '50%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.name} :</div>
                    <strong> {item.qty}{item.unit}</strong>
                </div>
            )
            res.push(
                <div key={i} style={{width: '100%', overflow: 'scoll'}}>
                    <div style={styleDpt}>
                        <strong style={{color: 'white'}}>{i}</strong>
                    </div>
                    <br />
                        {result}
                </div>
            )
        }
        return res;
    }

    displayRecipes = () => {
        let { recipeList } = this.props;
        const res = [];
       for(let item in recipeList) {
           const recipe = recipeList[item][0];
            res.push(<ListItem key={item}>
                <Avatar alt="Recipe" src={recipe.image.url} />
                <ListItemText
                    primary={`${recipe.title} X${recipeList[item].length}`}
                    secondary={`For ${recipe.servings} people`}
                />
                <Button
                    style={{ backgroundColor: 'salmon' }}
                    onClick={this.removeRecipe(recipe.id)}
                >
                    Remove one
                </Button>
            </ListItem>);
       }
        return(<List>{res}</List>);
    }

    render() {
        return (<div>
            <h1 style={{textAlign: 'center'}}>To cook these recipes :</h1>
            <div style={{border: '1px solid black', boxShadow: '5px 5px 20px', margin: '50px'}}>
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', widt: '100%'}}>
                    {this.displayRecipes()}
                </div>
            </div>
            <h1 style={{textAlign: 'center'}}>get these ingredients :</h1>
            <div style={{border: '1px solid black', boxShadow: '5px 5px 20px', margin: '50px'}}>
                <div style={{width: '100%', padding: '15px'}}>
                    {this.displayIngredients()}
                </div>
            </div>
        </div>);
    }
}
export default CartDetails;