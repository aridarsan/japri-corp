import React from 'react';
import { Grid, Container, TextField, Button } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import testimoni from '../Images/testimoni.svg';

const AddTestimoni = () => {
  const [value, setValue] = React.useState(0);
  return (
    <React.Fragment>
      <Container maxWidth='lg'>
        <Grid container>
          <Grid item xs={12}>
            <h3
              style={{
                margin: '3rem 0 2rem 0',
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
                Tambah Testimoni
              </span>
            </h3>

            <p
              style={{
                fontFamily: 'Montserrat',
                color: '#4f4f4f',
                textAlign: 'center',
                marginBottom: '3rem',
              }}
            >
              Katakan bagaimana pengalaman transaksi anda di Japri
            </p>
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6} lg={6}>
            <form noValidate autoComplete='off'>
              <TextField
                id='nama'
                label='Nama'
                variant='filled'
                color='primary'
                style={{ width: '100%', borderRadius: 0, marginBottom: '2rem' }}
              />
              <br />
              <TextField
                id='produk'
                label='Produk'
                variant='filled'
                color='primary'
                style={{ width: '100%', borderRadius: 0, marginBottom: '2rem' }}
              />
              <br />
              <Box component='fieldset' mb={3} borderColor='transparent'>
                <Typography component='legend'>Nilai</Typography>
                <Rating
                  name='simple-controlled'
                  value={value}
                  defaultValue={0}
                  size="large"
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </Box>
              <TextField
                id='pesan'
                label='Pesan'
                variant='filled'
                color='primary'
                multiline
                rows={5}
                style={{ width: '100%', borderRadius: 0, marginBottom: '2rem' }}
              />
              <br />
              <Button
                variant='contained'
                size='large'
                style={{
                  backgroundColor: '#0895CA',
                  fontWeight: '600',
                  color: '#ffffff',
                  borderRadius: '0',
                  fontFamily: 'Montserrat',
                  marginTop: '2rem',
                }}
              >
                Kirim Pesan
              </Button>
            </form>
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <img src={testimoni} alt='masukan' width='100%' />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};
export default AddTestimoni;
