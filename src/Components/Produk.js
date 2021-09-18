import React from 'react';
import { Grid, Card, CardContent, Container, Button } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import print from '../Images/produk/print.svg';
import konveksi from '../Images/produk/konveksi.svg';
import percetakan from '../Images/produk/percetakan.svg';
import wisuda from '../Images/produk/wisuda.svg';
import service from '../Images/produk/service.svg';
import referensi from '../Images/produk/referensi.svg';
import { Link } from 'react-router-dom';


const produk = [
  {
    src: print,
    title: 'Japri Print',
    description:
      'Japri menyediakan kemudahan print dokumen dengan cepat dan tanpa antri',
    item: ['Print Dokumen', 'Sertifikat', 'Hard Cover', 'Soft Cover dll.'],
  },
  {
    src: percetakan,
    title: 'Japri Percetakan',
    description:
      'Japri menawarkan produk percetakan kualitas tinggi dengan harga murah',
    item: ['Sticker A3', 'Pin', 'Gantungan Kunci', 'Banner/ X Banner.'],
  },
  {
    src: konveksi,
    title: 'Japri Konveksi',
    description:
      'Japri menawarkan produk konveksi kualitas nomor 1 dan harga bersahabat',
    item: ['PDH/ PDL', 'Jaket', 'T-Shirt', 'Polo Shirt dll.'],
  },
  {
    src: wisuda,
    title: 'Japri Wisuda',
    description: 'Japri menyediakan hadiah untuk mengenang moment-moment wisuda',
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
    description: 'Japri siap melayani service laptop dangan aman, terjamin dan harga terjangkau',
    item: [
      'Service Hardware',
      'Service Software',
      'Instal Operasi Sistem',
      'Instal Aplikasi dll.',
    ],
  },
];

const Produk = () => {
  return (
    <React.Fragment>
      <Container maxWidth='lg'>
        <Grid container id='produk'>
          <Grid item xs={12}>
            <h3 className="heading3"
            >
              <span
                className='borderBottom'
              >
                Produk Japri
              </span>
            </h3>

            <p className="pjudul"
            >
              berikut produk yang kami sediakan untuk mahasiswa
            </p>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          {produk.map((card, index) => (
            <Grid item xs={6} sm={6} md={4} lg={4} key={index}>
              <Card className="card-produk">
                <CardContent>
                  <Grid container mt={2} spacing={2} justify='center' alignItems="center">
                    <Grid item xs={12} sm={3} md={3}>
                      <img
                        style={{
                          width: '100%',
                          margin: 'auto',
                        }}
                        src={card.src}
                        alt='icon'
                        className='img-produk'
                      />
                    </Grid>
                    <Grid item xs={12} sm={9} md={9}>
                      <h5>{card.title}</h5>
                      <small>{card.description}</small>
                    </Grid>
                  </Grid>
                  <hr />

                  {card.item.map((items, index) => (
                    <p
                      style={{
                        color: '#4f4f4f',
                        marginBottom: 0,
                        marginTop: '0.5rem',
                      }}
                      key={index}
                    >
                      <DoneIcon style={{ color: '#0094F4' }} /> &nbsp;
                      {items}
                    </p>
                  ))}

                  <Grid container spacing={4}>
                    <Grid item xs={12}>
                      <a
                        href='https://wa.me/+628992021306?text=Hai%20kak%2C%20saya%20mau%20pesan%0AProduk%20%3A%0AJumlah%20%3A%0A'
                        style={{ textDecoration: 'none' }}
                        target="_blank" rel="noreferrer"
                      >
                        <Button
                          variant='contained'
                          className="btn-submit"
                          style={{marginTop: "1rem"}}
                          fullWidth
                          size='medium'
                        >
                          Pesan sekarang
                        </Button>
                      </a>
                    </Grid>
                  </Grid>

                  <Grid container spacing={4}>
                    <Grid item xs={12}>
                      <Link to='cara-pesan' style={{ textDecoration: 'none' }}>
                        <Button
                          m='auto'
                          variant='outlined'
                          fullWidth
                          className="btn-second"
                        >
                          Cara pesan
                        </Button>
                      </Link>
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
