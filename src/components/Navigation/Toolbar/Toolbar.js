import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';


const styles = {
  root: {
    flexGrow: 1,
    color: '#2196f3',
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ToolBar(props) {
  const { classes, page } = props;
  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Button color="inherit">
            <NavLink
              to={`/${page === 'cart' ? '' : 'cart'}`}
              style={{textDecoration: 'none', color: 'white'}}
            >
              {page === 'recipes' ? 'Cart' : 'Recipes'}
            </NavLink>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ToolBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ToolBar);
