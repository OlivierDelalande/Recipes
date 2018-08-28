import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Recipes from './features/Products/Containers/Recipes';
import Cart from './features/Cart/Containers/Cart';

class App extends Component {
  state = {
    page:'',
  }

  getRoute = (route) => {
    this.setState({page: route});
  }

  render() {
    return (
      <div style={{margin: '0', padding:'0'}}>
        <Layout page={this.state.page}>
          <Switch>
            <Route path="/cart"  render={() => <Cart getRoute={this.getRoute} />} />
            <Route path="/" exact render={() => <Recipes getRoute={this.getRoute} />} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
