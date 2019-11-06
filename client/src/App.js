import React, {useContext, useState} from 'react';
import './App.css';
import SideBar from './components/Sidebar';
import ContentContainer from './components/ContentContainer'
import Grid from '@material-ui/core/Grid';
import {ThemeContext} from "./contexts/ThemeContext";


export default function App() {
  const value = useContext(ThemeContext);

  let styles = {
  HomeBackGround: {
    backgroundImage: `url(${value.theme})`,
    backgroundPosition: 'center bottom',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }
};
  return (
      <Grid
          container
          direction="row"
          justify="space-around"
          style={styles.HomeBackGround}
      >
        <Grid container item direction="column" justify="flex-start" alignItems="center"
              xs={2} spacing={6} style={{height:'70vh'}}>
          <SideBar/>
        </Grid>
        <Grid container item xs={9}>
          <ContentContainer/>
        </Grid>
      </Grid>

  );
}
