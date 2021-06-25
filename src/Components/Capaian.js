import React from 'react';
import { Grid, Container } from '@material-ui/core';

const capaian = [
  { jumlah: '200+', label: 'Pelanggan Mahasiswa' },
  { jumlah: '200+', label: 'Pelanggan Organisasi' },
  { jumlah: '200+', label: 'Buku Dipesan' },
  { jumlah: '200+', label: 'Transaksi Perminggu' },
  { jumlah: '200+', label: 'PDH Dibuat Pertahun' },
  { jumlah: '200+', label: 'Skrips Dicetak' },
];

const Capaian = () => {
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
                Capaian
              </span>
            </h2>

            <p
              style={{
                fontFamily: 'Montserrat',
                color: '#4f4f4f',
                textAlign: 'center',
                marginBottom: "3rem"
              }}
            >
              Setelah berdiri selama 5 tahun, banyak pencapaian yang telah kami
              dapat
            </p>
          </Grid>
        </Grid>
      </Container>

      <div style={{backgroundColor: "#0895CA", marginBottom: "2rem"}}>
        <Container maxWidth='lg'>
          <Grid container spacing={5} mt={2} >
            {capaian.map((item, index) => (
              <Grid item xs={4} md={4} lg={2} m='auto' key={index}>
                <h2 style={{ textAlign: 'center', color: "#F7DA64", fontWeight: "700" }}>{item.jumlah}</h2>
                <p style={{ textAlign: 'center', color: "#ffff" }}>
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
