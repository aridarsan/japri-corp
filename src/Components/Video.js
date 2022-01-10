import React from 'react';
import YouTube from 'react-youtube';
import { Grid, Container } from '@material-ui/core';

const Video = () => {
  const opts = {
    height: '375',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  function onReady(event) {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  }

  return (
    <React.Fragment>
      <Container maxWidth='lg' style={{ marginTop: '5rem' }}>
        <Grid container>
          <Grid item xs={12}>
            <h3 className="heading3"
            >
              <span
                className='borderBottom'
              >
                Company Profile
              </span>
            </h3>

            <p className="pjudul"
            >
              Apa itu Japri Corporation
            </p>
          </Grid>
        </Grid>

        <Grid container justify='center'>
          <Grid item xs={12} md={6} lg={6} >
            <YouTube videoId='2jF9ug7T4fo' opts={opts} onReady={onReady} />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Video;
