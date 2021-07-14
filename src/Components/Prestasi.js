import React from 'react';
import { Grid, Container } from '@material-ui/core';
import { LocationOnOutlined } from '@material-ui/icons';
import prestasi1 from '../Images/prestasi/prestasi1.png';
import prestasi2 from '../Images/prestasi/prestasi2.png';
import prestasi3 from '../Images/prestasi/prestasi3.png';
import prestasi4 from '../Images/prestasi/prestasi4.png';

const prestasi = [
  {
    image: prestasi1,
    peringkat: 'Peringkat Pertama',
    nama: 'Lomba Bisnis Plan Tingkat Nasional',
    di: 'TEMILNAS, Medan (2018)',
  },
  {
    image: prestasi4,
    peringkat: 'Juara Dua',
    nama: 'Lomba Bisnis Plan Tingkat Nasional',
    di: 'UGM, Yogyakarta (2019)',
  },
  {
    image: prestasi3,
    peringkat: 'Juara Tiga',
    nama: 'Lomba Bisnis Plan Tingkat Nasional',
    di: 'Telmireg, Kuningan (2017)',
  },
  {
    image: prestasi2,
    peringkat: 'Juara Usaha Terfavorit',
    nama: 'Lomba Bisnis Plan Tingkat Nasional',
    di: 'Universitas Siliwangi (2018)',
  }
];

const Prestasi = () => {
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
                Prestasi
              </span>
            </h3>

            <p className="pjudul"
            >
              Japri telah banyak menjuarai beberapa kompetisi di kalangan
              mahasiswa
            </p>
          </Grid>
        </Grid>

        <Grid container spacing={2} justify='center'>
          {prestasi.map((item, index) => (
            <Grid item xs={6} sm={6} md={4} lg={3} key={index}>
              <img
                src={item.image}
                alt='prestasi'
                width='100%'
                style={{ marginBottom: '1rem' }}
              />
              <h5>{item.peringkat}</h5>
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
