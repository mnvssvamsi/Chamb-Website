import React, { Component } from 'react';
import './App.css';
import Home from './container/Home/Home';
import { Route, Switch } from 'react-router-dom';
import HowItWorks from './container/HowItWorks/HowItWorks';
import ProductDetails from './container/ProductDetails/ProductDetails';
import Pricing from './container/Pricing/Pricing'
class App extends Component {
  render() {
    return (
      <div className='App'>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path='/howItWorks' component={HowItWorks} />
          <Route path='/pricing' component={Pricing} />
          <Route path='/:id' exact component={ProductDetails} />
        </Switch>
      </div>
    )
  }
}

export default App;
