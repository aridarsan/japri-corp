import React from 'react';
import { Grid, Container, Button } from '@material-ui/core';
import NotFounds from '../Images/ilustrasi/404.svg';
import { useLocation, useHistory } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();
  const history = useHistory();

  function handleClick() {
    history.push('/');
  }
  return (
    <React.Fragment>
      <Container maxWidth='lg'>
        <Grid container justify='center' style={{ marginTop: '6rem' }}>
          <h4> Maaf halaman {location.pathname} tidak ditemukan</h4>
          <Grid container justify='center'>
            <img src={NotFounds} alt='NotFound' width='80%' />
        </Grid>

        <Grid container justify="center">
            <Button
              variant='contained'
              style={{
                backgroundColor: '#0094F4',
                fontWeight: '600',
                color: '#ffffff',
                borderRadius: '0',
                fontFamily: 'Montserrat',
              }}
              onClick={handleClick}
              size='medium'
            >
              Kembali ke Beranda
            </Button>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default NotFound;
