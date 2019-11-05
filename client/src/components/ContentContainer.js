import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './Home';
import About from './About'
import Blog from './Blog'
import BlogArticle from "./BlogArticle";


import Grid from '@material-ui/core/Grid';

const ContentContainer = () => {
  return (
      <Grid item xs={12}>
        <Switch>
          <Route path="/about" component={About}/>
          <Route path='/blog' component={Blog}/>
          <Route path='/blogArticles' component={BlogArticle}/>
          <Route exact path="/" component={Home}/>
        </Switch>
      </Grid>
  )
};

export default ContentContainer;
