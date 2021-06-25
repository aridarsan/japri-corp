import React from 'react';
import { Grid, Card, CardContent, Container, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DoneIcon from '@material-ui/icons/Done';
import print from '../Images/print.svg';
import konveksi from '../Images/konveksi.svg';
import percetakan from '../Images/percetakan.svg';
import wisuda from '../Images/wisuda.svg';
import service from '../Images/service.svg';
import referensi from '../Images/referensi.svg';

const useStyles = makeStyles({
  card: {
    display: 'flex',
    marginBottom: '0.5rem',
    // flexWrap : "nowrap",
    // overflowY: "auto",
  },
  cardMedia: {
    width: 160,
  },
});

const produk = [
  {
    src: print,
    title: 'Japri Print',
    description:
      'Japri menyediakan kemudahan print dokumen dengan cepat tanpa antri',
    item: ['Print Dokumen', 'Sertifikat', 'Hard Cover', 'Soft Cover dll.'],
  },
  {
    src: percetakan,
    title: 'Japri Percetakan',
    description:
      'Japri menawarkan produk percetakan kualitas tinggi dengan harga murah',
    item: [
      'Sticker A3',
      'Pin Alumunium/ Plastik',
      'Gantungan Kunci',
      'Banner/ X Banner.',
    ],
  },
  {
    src: konveksi,
    title: 'Japri Konveksi',
    description:
      'Japri menawarkan produk konveksi kualitas nomor 1 dan harga bersahabat',
    item: ['Pakaian Dinas Harian(PDH)', 'Jaket', 'T-Shirt', 'Polo Shirt dll.'],
  },
  {
    src: wisuda,
    title: 'Japri Wisuda',
    description: 'Japri menyediakan hadiah untuk mengenang moment  wisuda',
    item: ['Bucket Snack', 'Bucket Bunga', 'X Banner Wisuda', 'Selempang dll.'],
  },
  {
    src: referensi,
    title: 'Japri Referensi',
    description:
      'Japri menyediakan buku referensi dengan proses pemesanan yang cepat',
    item: ['Buku Mata Kuliah', 'Novel', 'Komik', 'Sejarah dll.'],
  },
  {
    src: service,
    title: 'Japri Service',
    description: 'Japri siap melayani service dangan aman dan harga terjangkau',
    item: [
      'Service Hardware',
      'Service Software',
      'Instal Operasi Sistem',
      'Instal Aplikasi dll.',
    ],
  },
];

const Produk = () => {
  const classes = useStyles();
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
                Produk Kami
              </span>
            </h2>

            <p
              style={{
                fontFamily: 'Montserrat',
                color: '#4f4f4f',
                textAlign: 'center',
                marginBottom: "1rem"
              }}
            >
              berikut produk yang kami sediakan untuk mahasiswa
            </p>
          </Grid>
        </Grid>

        <Grid container spacing={4} className={classes.card}>
          {produk.map((card, index) => (
            <Grid item xs={12} sm={12} md={4} mt={4} key={index}>
              <Card style={{ borderRadius: 0, border: '2px solid #0895CA' }}>
                <CardContent>
                  <Grid container mt={2} spacing={2} justify='center'>
                    <Grid item xs={4} md={3}>
                      <img
                        style={{
                          width: '100%',
                        }}
                        src={card.src}
                        alt='icon'
                        className='img-latbel'
                      />
                    </Grid>
                    <Grid item xs={8} md={9}>
                      <h4>{card.title}</h4>
                      <small>{card.description}</small>
                    </Grid>
                  </Grid>
                  <hr />

                  <Grid container spacing={2}>
                    {card.item.map((items, index) => (
                      <div key={index}>
                        <Grid item xs={1} md={1} lg={1} >
                          <DoneIcon style={{ color: '#0895CA' }} />
                        </Grid>
                        <Grid item xs={11} md={11} lg={11}>
                          <h6
                            style={{
                              color: '#4f4f4f',
                              marginBottom: 0,
                              marginTop: '0.5rem',
                            }}
                          >
                            {items}
                          </h6>
                        </Grid>
                      </div>
                    ))}
                  </Grid>

                  <Grid container spacing={4}>
                    <Grid item xs={12}>
                      <Button
                        m='auto'
                        variant='outlined'
                        style={{
                          width: '100%',
                          borderRadius: '0',
                          border: '2px solid #0895CA',
                          fontWeight: '600',
                          marginTop: '1rem',
                          color: '#0895CA',
                          fontFamily: 'Montserrat',
                        }}
                      >
                        Cara pesan
                      </Button>
                    </Grid>
                  </Grid>

                  <Grid container spacing={4}>
                    <Grid item xs={12}>
                      <a href='https://wa.me/628992021306' style={{textDecoration: "none"}}>
                        <Button
                          m='auto'
                          variant='contained'
                          style={{
                            width: '100%',
                            backgroundColor: '#0895CA',
                            fontWeight: '600',
                            color: '#ffffff',
                            borderRadius: '0',
                            fontFamily: 'Montserrat',
                          }}
                        >
                          Pesan sekarang
                        </Button>
                      </a>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Produk;
