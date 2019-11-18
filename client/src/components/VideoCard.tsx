import React from 'react'
//MUI
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'

import ReactPlayer from 'react-player';

interface VideoCardProps {
    contentTags: Array<string>,
    videoLink: string
}

const useStyles = makeStyles({
  cardContent: {
    padding: 16,
    "&:last-child": {
      paddingBottom: 0
    }
  }
});

const VideoCard = (props: VideoCardProps):JSX.Element => {
  const classes = useStyles();

  const videoContentTags = ():Array<JSX.Element>=> {
    return (
      props.contentTags.map((item,i) =>
        <Grid item key={i}>
          <Chip
          variant="outlined"
          size="small"
          label={item}
          />
        </Grid>
      )
    )
  };

  return (
    <Card>
      <CardContent className={classes.cardContent}>
        {/* <iframe width="100%"
          src={props.videoLink}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="React Hooks">
        </iframe> */}
        <ReactPlayer
          url={props.videoLink}
          className='react-player'
          playing = {false}
          light= {true}
          controls = {true}
          width='100%'
          height='100%'
        />
        <Divider />
      </CardContent>

      <CardActions>
      <Grid container spacing ={1}>
        {videoContentTags()}
      </Grid>
      </CardActions>
    </Card>
  )
}

export default VideoCard
