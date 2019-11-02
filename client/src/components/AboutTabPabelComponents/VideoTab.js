import React from 'react'
import VideoCard from '../VideoCard'
import Grid from "@material-ui/core/Grid"

const VideoTab = () => {
  return(
  <Grid container>
    <Grid item xs={4}>
      <VideoCard 
      videoLink="https://www.youtube.com/embed/-MlNBTSg_Ww"
      contentList={['React Hooks Introduction','React Hooks Example', 'Customize React Hooks']}
      />
    </Grid>

    <Grid item xs={4}>
      <VideoCard 
      videoLink="https://www.youtube.com/embed/vw3iCuCRm0Q"
      contentList={['Relax','Focus', 'Study']}
      />
    </Grid>
  </Grid>
  )
}

export default VideoTab;