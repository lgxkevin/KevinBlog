import React, {  useContext } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import About from './About'
import Blog from './Blog'

import { ThemeContext } from '../contexts/ThemeContext'


const ContentContainer = () => {
  const value = useContext(ThemeContext);
  console.log('value: ', value);
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

export default ContentContainer;