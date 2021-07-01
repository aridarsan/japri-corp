import React from 'react';
import { Grid, Container, Button, Card, CardContent } from '@material-ui/core';
import Carousel from 'react-grid-carousel';
import kotak from '../Images/kotak.svg';
import Rating from '@material-ui/lab/Rating';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import { useHistory } from 'react-router-dom';

const testi = [
  {
    src: kotak,
    nama: 'Dimas Suseno',
    produk:
      'Print Skripsi',
    kata: "Proses print cepet, tanpa ribet, tanpa antri dan yang paling penting harganya sangat murah, jadi saya bisa hemat.",
    nilai: 5
  },
  {
    src: kotak,
    nama: 'Fuji Ardinto',
    produk:
      'Pesan Jaket',
    kata: "Proses print cepet, tanpa ribet, tanpa antri dan yang paling penting harganya sangat murah, jadi saya bisa hemat.",
    nilai: 4
  },
  {
    src: kotak,
    nama: 'Sinta Permata',
    produk:
      'Pesan PDH',
    kata: "Proses print cepet, tanpa ribet, tanpa antri dan yang paling penting harganya sangat murah, jadi saya bisa hemat.",
    nilai: 5
  },
  {
    src: kotak,
    nama: 'Soni Kuncoro',
    produk:
      'Order Merchandise',
    kata: "Proses print cepet, tanpa ribet, tanpa antri dan yang paling penting harganya sangat murah, jadi saya bisa hemat.",
    nilai: 5
  },
  {
    src: kotak,
    nama: 'Gonardi',
    produk:
      'Order Booklet',
    kata: "Proses print cepet, tanpa ribet, tanpa antri dan yang paling penting harganya sangat murah, jadi saya bisa hemat.",
    nilai: 4
  },
  {
    src: kotak,
    nama: 'Badru Zaman',
    produk:
      'Order Bucket',
    kata: "Proses print cepet, tanpa ribet, tanpa antri dan yang paling penting harganya sangat murah, jadi saya bisa hemat.",
    nilai: 5
  }
];

const layout = 
  [
    { breakpoint: 1000, cols: 2, autoplay: 2000 },
    { breakpoint: 600, cols: 2, rows: 1, gap: 5, autoplay: 2000, loop: true  },
    { breakpoint: 300, cols: 2, rows: 1, autoplay: 2000, loop: true }
  ];

  const MyDot = ({ isActive }) => (
  <span
    style={{
      display: 'inline-block',
      height: isActive ? '.5rem' : '.5rem',
      width: isActive ? '2rem' : '.5rem',
      borderRadius: "10px",
      background: isActive ? '#0895CA' : '#4f4f4f',
      overflow: "visible"
    }}
  ></span>
)

const Testimoni = (props) => {
  const history = useHistory();

  function handleClick() {
    history.push('/testimoni');
  }
  return (
    <React.Fragment>
      <Container maxWidth='lg'>
        <Grid container id='testimoni'>
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
                Testimoni
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
              Apa yang pelanggan katakan pada pelayanan kami
            </p>
          </Grid>
        </Grid>

        <Grid container spacing={2} style={{overflow: "hidden"}}>
          <Carousel cols={3} rows={1} gap={10} autoplay={2000} dot={MyDot} responsiveLayout={layout} showDots loop>
          {testi.map((card, index) => (
            <Carousel.Item key={index}>
              <Grid item xs={6} sm={12} md={12} lg={12}>
                <Card style={{ borderRadius: 0, border: '2px solid #0895CA', margin: "auto" }}>
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid item xs={5} sm={6} md={3}>
                        <img
                          style={{
                            width: '100%',
                            margin: 'auto',
                          }}
                          src={card.src}
                          alt='icon'
                          className='img-testimoni'
                        />
                      </Grid>
                      <Grid item xs={7} sm={6} md={9}>
                        <h5>{card.nama}</h5>
                        <p style={{marginBottom: 0}}>{card.produk}</p>
                        <Rating
                          name='simple-controlled'
                          value={card.nilai}
                          size="small"
                        />
                      </Grid>
                    </Grid>

                      <p
                        style={{
                          color: '#4f4f4f',
                          marginBottom: 0,
                          marginTop: '0.5rem',
                        }}
                        key={index}
                      >
                        {card.kata} <FormatQuoteIcon/> 
                      </p>
                  </CardContent>
                </Card>
              </Grid>
            </Carousel.Item>
          ))}
          </Carousel>
          </Grid>


          <Grid container justify="center">
          <Button  m='auto'
            variant='contained'
            style={{
              backgroundColor: '#0895CA',
              fontWeight: '600',
              color: '#ffffff',
              borderRadius: '0',
              fontFamily: 'Montserrat',
              marginTop: "2rem",
              display: props.display

            }}
            onClick={handleClick}
            size='medium'> Lihat Lebih banyak <ChevronRightIcon/></Button>
          </Grid>
      </Container>
    </React.Fragment>
  );
};
export default Testimoni;
