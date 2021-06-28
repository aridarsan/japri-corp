import React from 'react';
import { Grid, Container } from '@material-ui/core';
import desain from '../Images/kotak.svg';
import { LocationOnOutlined } from '@material-ui/icons';

const prestasi = [
  {
    image: desain,
    peringkat: 'Peringkat Pertama',
    nama: 'Lomba bussiness plan',
    di: 'Universitas Siliwangi',
  },
  {
    image: desain,
    peringkat: 'Peringkat Pertama',
    nama: 'Lomba bussiness plan',
    di: 'Universitas Siliwangi',
  },
  {
    image: desain,
    peringkat: 'Peringkat Pertama',
    nama: 'Lomba bussiness plan',
    di: 'Universitas Siliwangi',
  },
  {
    image: desain,
    peringkat: 'Peringkat Pertama',
    nama: 'Lomba bussiness plan',
    di: 'Universitas Siliwangi',
  },
];

const Prestasi = () => {
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
                Prestasi
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
              Japri telah banyak menjuarai beberapa kompetisi di kalangan
              mahasiswa
            </p>
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          {prestasi.map((item, index) => (
            <Grid item xs={12} sm={6} lg={3} key={index}>
              <img
                src={item.image}
                alt='prestasi'
                width='100%'
                style={{ marginBottom: '2rem' }}
              />
              <h4>{item.peringkat}</h4>
              <h6>{item.nama}</h6>
              <p>
                <LocationOnOutlined /> {item.di}
              </p>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Prestasi;
