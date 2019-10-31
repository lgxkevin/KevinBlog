import React, { Component } from 'react';
import './App.css';
// import logo from './logo.svg';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import Fib from './Fib';
import SideBar from './components/Sidebar';
import ContentContainer from './components/ContentContainer'
import Grid from '@material-ui/core/Grid';

// style start
const windowContainer = {
  padding: '30px 30px'
}

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
      <div style = {windowContainer}>
        <Grid
          container
          direction="row"
          justify="center"
        >
          <Grid item xs={3}>
            <SideBar />
          </Grid>
          <Grid item xs={9}>
            <ContentContainer />
          </Grid>

        </Grid>
      </div>

    );
  }
}

export default App;
