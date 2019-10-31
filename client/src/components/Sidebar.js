import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//MaterialUI
import Grid from '@material-ui/core/Grid';
import MoodSharpIcon from '@material-ui/icons/MoodSharp';
import GitHubIcon from '@material-ui/icons/GitHub';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

// style start
const navbarItem = {
  fontWeight: "500"
}

class Sidebar extends Component {

  render() {
    return (
      <Grid container direction="column" justify="space-between" alignItems="center"
        spacing={5}
      >
        <Grid item>
          <MoodSharpIcon style={{ zoom: '3' }} />
        </Grid>
        <Grid item style={navbarItem}>
            Kevin Liu
        </Grid>
        <Grid item style={navbarItem}>
          <Button color = "default" component={Link} to="/" style={navbarItem}>HOME</Button>
        </Grid>
        <Grid item style={navbarItem}>
          <Button color = "default" component={Link} to="/about" style={navbarItem}>ABOUT</Button>
        </Grid>
        <Grid item style={navbarItem}>
          <Button color = "default" component={Link} to="/blog" style={navbarItem}>BLOG</Button>
        </Grid>
        <Grid item style={navbarItem}>
          <IconButton aria-label="My Github Page" href="https://github.com/lgxkevin">
            <GitHubIcon />
          </IconButton>
        </Grid>

      </Grid>
    )
  }
}

export default Sidebar;