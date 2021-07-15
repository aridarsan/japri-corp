import React from 'react';
import { Grid, Container } from '@material-ui/core';
import garansi from '../Images/keunggulan/garansi.svg';
import kualitas from '../Images/keunggulan/kualitas.svg';
import promo from '../Images/keunggulan/promo.svg';
import respon from '../Images/keunggulan/respon.svg';
import harga from '../Images/keunggulan/harga.svg';
import desain from '../Images/keunggulan/desain.svg';

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
            <h3 className="heading3"
            >
              <span
                className='borderBottom'
                style={{ borderBottom: '.25rem solid #0895CA' }}
              >
                Keunggulan
              </span>
            </h3>

            <p className="pjudul"
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
