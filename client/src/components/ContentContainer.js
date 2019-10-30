import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import About from './About'
import Blog from './Blog'


class ContentContainer extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/about" component={About} />
          <Route path='/blog' component={Blog} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    )
  }
}

export default ContentContainer;