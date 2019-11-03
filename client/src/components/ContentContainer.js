import React, {useContext, Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './Home';
import About from './About'
import Blog from './Blog'

import {ThemeContext} from '../contexts/ThemeContext'

import Grid from '@material-ui/core/Grid';

const ContentContainer = () => {
  const value = useContext(ThemeContext);
  console.log('value: ', value);
  return (
      <Grid item xs={12}>
        <Switch>
          <Route path="/about" component={About}/>
          <Route path='/blog' component={Blog}/>
          <Route exact path="/" component={Home}/>
        </Switch>
      </Grid>
  )
};

export default ContentContainer;
