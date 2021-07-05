import React from 'react';
import { Grid, Container } from '@material-ui/core';
import garansi from '../Images/garansi.svg';
import kualitas from '../Images/kualitas.svg';
import promo from '../Images/promo.svg';
import respon from '../Images/respon.svg';
import harga from '../Images/harga.svg';
import desain from '../Images/desain.svg';

const unggul = [
  { img: garansi, label: 'Garansi Produksi' },
  { img: kualitas, label: 'Kualitas Terbaik' },
  { img: promo, label: 'Banyak Promo' },
  { img: harga, label: 'Harga Terjangkau' },
  { img: desain, label: 'Jasa Desain' },
  { img: respon, label: 'Respon Cepat' },
];

const Keunggulan = () => {
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
                Keunggulan
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
              Kami memiliki berbagai keunggulan dalam pelayanan
            </p>
          </Grid>
        </Grid>

        <Grid container spacing={4} mt={2} justify='center'>
          {unggul.map((item, index) => (
            <Grid item xs={4} md={3} lg={2} m='auto' key={index}>
              <Grid container spacing={3} justify='center' alignItems='center'>
                <img
                  src={item.img}
                  alt='produk'
                  width='50%'
                  style={{ margin: '1rem 0' }}
                />
              </Grid>
              <p style={{ textAlign: 'center', margin: '0.5rem 0' }}>
                {item.label}
              </p>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Keunggulan;
