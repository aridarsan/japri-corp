import React from 'react';
import { Grid, Container } from '@material-ui/core';
import japri from '../Images/kotak.svg'

const customer = [
  {image: japri, nama: 'Pelanggan Mahasiswa' },
  {image: japri, nama: 'Pelanggan Organisasi' },
  {image: japri, nama: 'Buku Dipesan' },
  {image: japri, nama: 'Transaksi Perminggu' },
  {image: japri, nama: 'PDH Dibuat Pertahun' },
  {image: japri, nama: 'Skrips Dicetak' },
  {image: japri, nama: 'Pelanggan Mahasiswa' },
  {image: japri, nama: 'Pelanggan Organisasi' },
  {image: japri, nama: 'Buku Dipesan' },
  {image: japri, nama: 'Transaksi Perminggu' },
  {image: japri, nama: 'PDH Dibuat Pertahun' },
  {image: japri, nama: 'Skrips Dicetak' },
];

const Pelanggan = () => {
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
                Pelanggan
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
              Kami telah dipercaya oleh mahasiswa dari berbagai kampus dan organisasi/ komunitas
            </p>
          </Grid>
        </Grid>

        <Grid container spacing={2} mt={2}>
          {customer.map((item, index) => (
            <Grid item xs={3} md={3} lg={1} m='auto' key={index}>
              <img src={item.image} alt={item.nama} width="100%"/>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Pelanggan;
