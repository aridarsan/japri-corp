import React from 'react';
import { Grid, Container } from '@material-ui/core';

const Masukan = () => {
  return (
    <React.Fragment>
      <Container maxWidth='lg'>
        <Grid container>
          <Grid item xs={12}>
            <h2
              style={{
                margin: '2rem 0',
                fontWeight: '700',
                fontFamily: 'Montserrat',
                color: '#0895CA',
                textAlign: 'center',
              }}
            >
              <span
                className='borderBottom'
                style={{ borderBottom: '.25rem solid #0895CA' }}
              >
                Saran dan Masukan
              </span>
            </h2>

            <p
              style={{
                fontFamily: 'Montserrat',
                color: '#4f4f4f',
                textAlign: 'center',
                marginBottom: '1rem',
              }}
            >
              Bantu kami untuk memberikan pengalaman transaksi terbaik pada konsumen
            </p>
          </Grid>
        </Grid>

        <Grid container>
          
        </Grid>
      </Container>
    </React.Fragment>
  );
};
export default Masukan;