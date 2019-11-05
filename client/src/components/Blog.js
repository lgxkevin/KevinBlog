import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import {makeStyles} from '@material-ui/core/styles';

//MaterialUI
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme=>({
  root: {
    backgroundColor: 'rgb(0,0,0,0.02)'
  }
}));


export default function Blog(pros) {
  const classes = useStyles();

  return (
      <div>
        <h2>
          Personal Blog<br/>
        </h2>

        <Grid container spacing={10}>
          <Grid item xs={5}>
            <Card className={classes.root}>
              <CardContent>
                <ReactMarkdown source={'# Set Array, Map Object\n\n ### Details on Set Array and Map'}/>
              </CardContent>
              <CardActions>
                <Button size="small" component={Link} to="/blogArticles">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
  )
}

