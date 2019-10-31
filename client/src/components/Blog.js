import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

//MaterialUI
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

class Blog extends Component {


  render() {
    return (
      <div>
        <h2>
          Personal Blog<br/>
        </h2>

        <Grid container direction="row" justify="space-around" >
          <Grid item xs={5}>
            <Card >
              <CardContent>
              <ReactMarkdown source={'# This is my first blog\n\n ### Kevin'} />
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={5}>
            <Card >
              <CardContent>
              <ReactMarkdown source={'# This is my second blog\n\n ### Kevin'} />
              </CardContent>
              <CardActions>
                <Button size="small">View More</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>

      </div>
    )
  }
}

export default Blog;