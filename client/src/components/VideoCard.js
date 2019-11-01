import React from 'react'
//MUI
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import clsx from 'clsx';

const useStyles = makeStyles({
  cardContent: {
    padding: 16,
    "&:last-child": {
      paddingBottom: 0
    }
  }
});

const VideoCard = (props) => {
  const classes = useStyles();

  return (
    <Card>
      <CardContent className={classes.cardContent}>
        <iframe width="100%"
          src="https://www.youtube.com/embed/-MlNBTSg_Ww"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="React Hooks">
        </iframe>
        <Divider />
        <Typography variant="subtitle2" component="li">
          React Hooks Introduction
        </Typography>
        <Typography variant="subtitle2" component="li">
          React Hooks Example
        </Typography>
        <Typography variant="subtitle2" component="li">
          Customize React Hooks
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small" color="primary"
          href="https://academind.com/learn/react/react-hooks-introduction/">
          Article
        </Button>
        <Button size="small" color="primary"
          href="https://github.com/academind/react-hooks-introduction/tree/custom-hooks">
          Source Code
        </Button>
      </CardActions>
    </Card>
  )
}

export default VideoCard