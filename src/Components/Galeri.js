import React from 'react';
import { Grid, Container } from '@material-ui/core';
import desain from '../Images/desain.svg';

const galeri = [
  {
    image: desain,
  },
  {
    image: desain,
  },
  {
    image: desain,
  },
  {
    image: desain,
  },
  {
    image: desain,
  },
  {
    image: desain,
  },
];

const Galeri = () => {
  return (
    <React.Fragment>
      <Container maxWidth='lg'>
        <Grid container>
          <Grid item xs={12}>
            <h3
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
                Galeri
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
              Banyak kegiatan yang sudah kami laksanakan dalam rangka mengembangkan Japri dan memberdayakan mahasiswa
            </p>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          {galeri.map((item, index) => (
            <Grid item xs={6} sm={4} lg={2} key={index}>
              <img
                src={item.image}
                alt='galeri'
                width='100%'
                style={{ marginBottom: '2rem' }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Galeri;
