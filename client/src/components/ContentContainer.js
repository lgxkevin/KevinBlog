import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './Home';
import About from './About'
import Blog from './Blog'
import BlogArticle from "./BlogArticle";
import AdminComponent from './AdminComponent'
import LoginComponent from "./LoginComponent";
import {ProtectedRoute} from './protected.route'

import Grid from '@material-ui/core/Grid';

const ContentContainer = () => {
  return (
      <Grid item xs={12} style={{height: '100vh'}}>
        <Switch>
          <Route path="/about" component={About}/>
          <Route path='/blog' component={Blog}/>
          <Route path='/blogArticles' component={BlogArticle}/>
          <Route exact path="/" component={Home}/>
          <Route path='/admin' component={AdminComponent}/>
          <ProtectedRoute exact path="/app" component={AdminComponent} />
          <Route path="*" component = {() => "404 NOT FOUND"}/>
        </Switch>
      </Grid>
  )
};

export default ContentContainer;
