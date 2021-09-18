import React, { useEffect, useContext } from 'react';
import { Grid, Container, Button, Card, CardContent } from '@material-ui/core';
import Carousel from 'react-grid-carousel';
import Rating from '@material-ui/lab/Rating';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import AddIcon from '@material-ui/icons/Add';
import { useHistory } from 'react-router-dom';
import ContextApi from '../Context/ContextApi';

const layout = [
  { breakpoint: 1000, cols: 2, autoplay: 2000 },
  { breakpoint: 600, cols: 2, rows: 1, gap: 5, autoplay: 2000, loop: true },
  { breakpoint: 300, cols: 2, rows: 1, autoplay: 2000, loop: true },
];

const MyDot = ({ isActive }) => (
  <span
    style={{
      display: 'inline-block',
      height: isActive ? '.5rem' : '.5rem',
      width: isActive ? '2rem' : '.5rem',
      borderRadius: '10px',
      background: isActive ? '#0094F4' : '#4f4f4f',
      marginTop: '2rem',
      overflow: 'visible',
    }}
  ></span>
);


const Testimoni = (props) => {

  const { getTesti, testi } = useContext(ContextApi);

  useEffect(() => {
    getTesti();
    // eslint-disable-next-line
  }, []);

  const history = useHistory();
  function handleClick() {
    history.push('/testimoni');
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
                Testimoni
              </span>
            </h3>
            <p className="pjudul"
            >
              Apa yang pelanggan katakan pada pelayanan kami
            </p>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Carousel
              cols={3}
              rows={1}
              gap={10}
              autoplay={2000}
              dot={MyDot}
              responsiveLayout={layout}
              showDots
              loop
            >
              {testi.length !== 0 ? testi.data.map((card, index) => (
                <Carousel.Item key={index}>
                  <Card
                    style={{
                      borderRadius: 0,
                      border: '2px solid #0094F4',
                      margin: 'auto',
                      height: "21rem"
                    }}
                  >
                    <CardContent>
                      <Grid container spacing={2} justifycontent="center">
                        <Grid item xs={3} sm={2} md={3} lg={3}>
                          <img
                            style={{
                              width: '5rem',
                              height: "5rem",
                              objectFit: "cover",
                              borderRadius: "50%",
                              margin: 'auto',
                              position: "relative"
                            }}
                            src={card.avatar}
                            alt='icon'
                            className='img-testimoni'
                          />
                        </Grid>
                        <Grid item xs={9} sm={10} md={9} lg={9}>
                          <h5>{card.nama}</h5>
                          <p style={{ marginBottom: 0 }}>{card.produk}</p>
                          <Rating
                            name='read-only'
                            value={card.nilai}
                            size='small'
                            readOnly
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
                        {card.pesan} <FormatQuoteIcon />
                      </p>
                    </CardContent>
                  </Card>
                </Carousel.Item>
              )) : (<h1 style={{marginTop: "5rem"}}> Loading..... </h1>)}
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
            size='medium'
            onClick={handleClick}
          >
            {' '}
            <AddIcon />  Tambah testimoni 
          </Button>
        </Grid>
      </Container>
    </React.Fragment>
  );
};
export default Testimoni;
