import React from 'react';
import { Grid, Container, Button } from '@material-ui/core';
import Carousel from 'react-grid-carousel';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { useHistory } from 'react-router-dom';

const MyDot = ({ isActive }) => (
  <span
    style={{
      display: 'inline-block',
      height: isActive ? '.5rem' : '.5rem',
      width: isActive ? '2rem' : '.5rem',
      borderRadius: '10px',
      background: isActive ? '#0094F4' : '#4f4f4f',
      overflow: 'visible',
      marginTop: '2rem',
    }}
  ></span>
);

const GaleriPelanggan = (props) => {
  const history = useHistory();

  function handleClick() {
    history.push('/galeri-pelanggan');
  }
  return (
    <React.Fragment>
      <Container maxWidth='lg'>
        <Grid container id='testimoni'>
          <Grid item xs={12}>
            <h3 className="heading3"
            >
              <span
                className='borderBottom'
              >
                Galeri Pelanggan
              </span>
            </h3>
            <p className="pjudul"
            >
              Ini merupakan produk yang sudah konsumen pesan
            </p>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Carousel
              cols={4}
              rows={1}
              gap={10}
              autoplay={2000}
              dot={MyDot}
              showDots
              loop
            >
              {props.foto.map((item, index) => (
                <Carousel.Item key={index}>
                  <img
                    className='imgpelanggan'
                    src={item.img}
                    width='100%'
                    alt='pelanggan'
                  />
                  <div className='overlay'>{item.name}</div>
                </Carousel.Item>
              ))}
            </Carousel>
          </Grid>
        </Grid>

        <Grid container justify='center'>
          <Button
            m='auto'
            variant='contained'
            style={{
              backgroundColor: '#0094F4',
              fontWeight: '600',
              color: '#ffffff',
              borderRadius: '0',
              fontFamily: 'Montserrat',
              marginTop: '2rem',
              display: props.display,
            }}
            onClick={handleClick}
            size='medium'
          >
            {' '}
            Lihat Lebih banyak <ChevronRightIcon />
          </Button>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default GaleriPelanggan;
