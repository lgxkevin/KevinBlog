
import React from 'react'
import VideoCard from '../VideoCard'
import Grid from "@material-ui/core/Grid"

const VideoTab = () => {
  return(
  <Grid container spacing = {1}>
    <Grid item xs={4}>
      <VideoCard 
      videoLink="https://www.youtube.com/embed/-MlNBTSg_Ww"
      contentTags={['React Hooks', 'Hook Example','Customize Hooks']}
      />
    </Grid>

    <Grid item xs={4}>
      <VideoCard 
      videoLink="https://www.youtube.com/embed/vw3iCuCRm0Q"
      contentTags={['Music','Focus', 'Study']}
      />
    </Grid>
  </Grid>
  )
};

export default VideoTab;
