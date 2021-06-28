import React from 'react';
import { Grid, Container } from '@material-ui/core';
import Carousel from 'react-grid-carousel';

const Testimoni = () => {
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
                Testimoni
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
              Apa yang pelanggan katakan pada pelayanan kami
            </p>
          </Grid>
        </Grid>

        <Grid container>
          <Carousel cols={3} rows={1} gap={10}  showDots loop>
            <Carousel.Item>
              <img
                width='100%'
                src='https://picsum.photos/800/600?random=1'
                alt='ran1'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                width='100%'
                src='https://picsum.photos/800/600?random=2'
                alt='ran1'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                width='100%'
                src='https://picsum.photos/800/600?random=3'
                alt='ran1'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                width='100%'
                src='https://picsum.photos/800/600?random=1'
                alt='ran1'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                width='100%'
                src='https://picsum.photos/800/600?random=2'
                alt='ran1'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                width='100%'
                src='https://picsum.photos/800/600?random=3'
                alt='ran1'
              />
            </Carousel.Item>
          </Carousel>
        </Grid>
      </Container>
    </React.Fragment>
  );
};
export default Testimoni;
