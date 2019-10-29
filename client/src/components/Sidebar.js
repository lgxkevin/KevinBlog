import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { NavLink } from 'react-router-dom'

class Sidebar extends Component {


  render() {
    return (
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <NavLink to="/"> Home </NavLink>
        </Grid>
        <Grid item>
          <NavLink to="/about"> About </NavLink>
        </Grid>
        <Grid item>
          <NavLink to="/blog"> Blog </NavLink>
        </Grid>

      </Grid>
    )
  }
}

export default Sidebar;