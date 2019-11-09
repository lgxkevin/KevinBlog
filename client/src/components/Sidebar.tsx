import React, {Fragment} from 'react';
//MaterialUI
import Grid from '@material-ui/core/Grid';
import MoodSharpIcon from '@material-ui/icons/MoodSharp';
import GitHubIcon from '@material-ui/icons/GitHub';
import Button from '@material-ui/core/Button';
//Components
import SidebarNavItem from './SidebarNavItem';

export default function Sidebar():JSX.Element{
    return (
        <Fragment>
          <Grid item>
            <MoodSharpIcon style={{zoom: '3'}}/>
          </Grid>
          <Grid item>
            Kevin Liu
          </Grid>
          <SidebarNavItem name="HOME" routerLink="/" imageUrl='/laptopAndGlasses.jpg'/>
          <SidebarNavItem name="ABOUT" routerLink="/about" imageUrl='/RainbowAndPencil.jpg'/>
          <SidebarNavItem name="BLOG" routerLink="/blog" imageUrl='/Books.jpg'/>
          <Grid item>
            <Button aria-label="My Github Page" href="https://github.com/lgxkevin">
              <GitHubIcon/>
            </Button>
          </Grid>
        </Fragment>
    )
}
