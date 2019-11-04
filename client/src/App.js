import React, { useState} from 'react';
import './App.css';
import SideBar from './components/Sidebar';
import ContentContainer from './components/ContentContainer'
import Grid from '@material-ui/core/Grid';

import ThemeContextWrapper from './contexts/ThemeContext'
import backgroundImage from './assets/Images/laptopAndGlasses.jpg'

let styles = {
  HomeBackGround: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: 'center bottom',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    paddingBottom: '40%'
  }
};

export default function App() {
  const[backgroundImage, setBackgroundImage] = useState("");
    return (
        <ThemeContextWrapper>
          <Grid
              container
              direction="row"
              justify="space-around"
              style={styles.HomeBackGround}
          >
            <Grid container item direction="column" justify="flex-start" alignItems="center"
                  xs={2} spacing={5}>
              <SideBar/>
            </Grid>
            <Grid container item xs={9}>
              <ContentContainer/>
            </Grid>
          </Grid>
        </ThemeContextWrapper>

    );
}
