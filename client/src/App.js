import React, {Component} from 'react';
import './App.css';
// import logo from './logo.svg';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import Fib from './Fib';
import SideBar from './components/Sidebar';
import ContentContainer from './components/ContentContainer'
import Grid from '@material-ui/core/Grid';

import ThemeContextWrapper from './contexts/ThemeContext'

class App extends Component {
  render() {
    return (
        <ThemeContextWrapper>
          <Grid
              container
              direction="row"
              justify="space-around"
          >
            <Grid container item direction="column" justify="space-around" alignItems="center"
                  xs={3} spacing={5}>
              <SideBar/>
            </Grid>
            <Grid container item xs={9}>
              <ContentContainer/>
            </Grid>
          </Grid>
        </ThemeContextWrapper>

    );
  }
}

export default App;
