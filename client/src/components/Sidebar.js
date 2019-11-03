import React, {Component, Fragment} from 'react';
//MaterialUI
import Grid from '@material-ui/core/Grid';
import MoodSharpIcon from '@material-ui/icons/MoodSharp';
import GitHubIcon from '@material-ui/icons/GitHub';
import Button from '@material-ui/core/Button';
//Components
import SidebarNavItem from './SidebarNavItem';

class Sidebar extends Component {

  render() {
    return (
        <Fragment>
          <Grid item>
            <MoodSharpIcon style={{zoom: '3'}}/>
          </Grid>
          <Grid item>
            Kevin Liu
          </Grid>
          <SidebarNavItem name="HOME" routerLink="/"/>
          <SidebarNavItem name="ABOUT" routerLink="/about"/>
          <SidebarNavItem name="BLOG" routerLink="/blog"/>
          <Grid item>
            <Button aria-label="My Github Page" href="https://github.com/lgxkevin">
              <GitHubIcon/>
            </Button>
          </Grid>

        </Fragment>
    )
  }
}

export default Sidebar;
