import React from 'react';
import { Grid, Container } from '@material-ui/core';

//API Data
const capaian = [
  { jumlah: '5.827+', label: 'Pelanggan Mahasiswa', satuan: "orang" },
  { jumlah: '48+', label: 'Pelanggan Organisasi', satuan: "organisasi" },
  { jumlah: '1.789+', label: 'Buku Dipesan', satuan: "buah" },
  { jumlah: '865+', label: 'Selempang Dipesan', satuan: "buah" },
  { jumlah: '1.825+', label: 'PDH Dibuat', satuan: "psc" },
  { jumlah: '1.786+', label: 'Skrips Dicetak', satuan: "skripsi" },
];

const Capaian = () => {
  return (
    <React.Fragment>
      <Container maxWidth='lg'>
        <Grid container>
          <Grid item xs={12}>
            <h3 className='heading3'>
              <span
                className='borderBottom'
              >
                Capaian
              </span>
            </h3>

            <p className='pjudul'>
              Setelah berdiri selama 5 tahun, banyak pencapaian yang telah kami
              dapat
            </p>
          </Grid>
        </Grid>
      </Container>

      <div style={{ backgroundColor: '#0094F4', marginBottom: '2rem' }}>
        <Container maxWidth='lg'>
          <Grid container spacing={4} mt={2}>
            {capaian.map((item, index) => (
              <Grid item xs={4} md={4} lg={2} m='auto' key={index}>
                <h2
                  style={{
                    textAlign: 'center',
                    color: '#F7DA64',
                    fontWeight: '700',
                  }}
                >
                  {item.jumlah}
                </h2>
                <p style={{ textAlign: 'center', color: '#ffff', margin: '0' }}>
                  {item.label}
                </p>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Capaian;
