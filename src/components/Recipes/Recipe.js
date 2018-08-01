import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button/Button';

const styles = theme => ({
  card: {
    maxWidth: 400,
    margin: '20px 30px'
  },
  root: {
    height: 50,
  },
  title: {
    width: 330,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  cardHeader: {
    backgroundColor: 'red',

  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class Recipe extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  addRecipe = () => {
    this.props.addToCart(this.props.id)
  }

  removeRecipe = () => {
    this.props.removeFromCart(this.props.id)
  }

  sliceInstructions = () => {
    const { instructions } = this.props;
    return instructions.length > 150 ? `${instructions.slice(0, 150)}...` : instructions;
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card className={classes.card}>
          
            <CardHeader
              title={
                <div
                  classes={{ title: classes.title}}>
                    {this.props.title}
                </div>}
              subheader={`For ${this.props.servings} people`}
              style={{ height: 100}}
            />
          
          <CardMedia
            className={classes.media}
            image={this.props.image.url}
            title="Recipe"
          />
          <CardContent>
            <Typography component="p">
              {this.sliceInstructions()}
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <Button
              style={{ backgroundColor: '#2196f3' }}
              onClick={this.addRecipe}
            >
              Add to cart
            </Button>
            {this.props.isInCart && <Button
              style={{ backgroundColor: 'salmon' }}
              onClick={this.removeRecipe}
            >
              Remove from cart
            </Button>}
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
            <Typography component="h4" style={{fontWeight: 'bold', marginBottom: '10px'}}>
             {this.props.title}
            </Typography>
            <Typography component="p" style={{marginBottom: '10px'}}>
              {this.props.instructions}
              </Typography>
              <Typography paragraph variant="body2">
                Ingredients
              </Typography>
              {this.props.ingredients.map(item => <Typography paragraph key={item.ingredient_id}>{item.name} : {item.qty} {item.unit}</Typography>)}
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
}

Recipe.propTypes = {
  classes: PropTypes.object.isRequired,
  addToCart: PropTypes.func,
  removeFromCart: PropTypes.func,
};


export default withStyles(styles)(Recipe);