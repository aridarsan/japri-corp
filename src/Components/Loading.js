import React from 'react';
import { Grid } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Loading() {
  return(
  <Grid container justify="center" style={{ margin: "10rem auto 5rem"}}>
    <Grid item>
      <CircularProgress />
    </Grid>
  </Grid>
  )
}