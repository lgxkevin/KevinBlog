import React, { Component } from 'react';
import './App.css';
// import logo from './logo.svg';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import Fib from './Fib';
import SideBar from './components/Sidebar';
import ContentContainer from './components/ContentContainer'
import Grid from '@material-ui/core/Grid';


class App extends Component {
  render() {
    return (
      // <Router>
      //   <div className="App">
      //     <header className="App-header">
      //       <img src={logo} className="App-logo" alt="logo" />
      //       <h1 className="App-title">Version 3</h1>
      //       <Link to="/">Home</Link>
      //     </header>
      //     <div>
      //       <Route exact path="/" component={Fib} />
      //     </div>
      //   </div>
      // </Router>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs = {3}>
          <SideBar/>
        </Grid>
        <Grid item xs = {9}>
          <ContentContainer/>
        </Grid>

      </Grid>

        );
      }
    }
    
    export default App;
