import React, { Component } from 'react';
//MaterialUI
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
//Components
import VideoCard from './VideoCard';

class About extends Component {


  render() {
    return (
      <div>
        <h2>
          About Myself
        </h2>
        <Grid container justify="space-between">
          <Grid item xs={3}>
            <Card >
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Work experience
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Web developer in Proprius LTD
                </Typography>
              </CardContent>
              <CardActions>
              </CardActions>
            </Card>

          </Grid>

          <Grid item xs={3}>
            <VideoCard/>
          </Grid>

          <Grid item xs={4}>

          </Grid>

        </Grid>
      </div>
    )
  }
}

export default About;