import React from 'react';
import { Grid, Card, CardContent, Container } from '@material-ui/core';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LanguageIcon from '@material-ui/icons/Language';
import wanda from '../Images/direksi/wanda.png';
import roni from '../Images/direksi/roni.png';
import reza from '../Images/direksi/reza.png';
import ade from '../Images/direksi/ade.png';
import ahmad from '../Images/direksi/ahmad.png';
import ari from '../Images/direksi/ari.png';

const tim = [
  {
    nama: 'Wanda Lugina',
    jabatan: 'Chief Executive Officer',
    foto: wanda,
    whatsapp: 'https://wa.me/6282216017320',
    instagram: 'https://www.instagram.com/wandalugina/',
    email: 'mailto:wandalugina@gmail.com',
    web: '',
  },
  {
    nama: 'Roni Iskandar',
    jabatan: 'Chief Financial Officer',
    foto: roni,
    whatsapp: 'https://wa.me/6281222651518',
    instagram: 'https://www.instagram.com/roni_iskan/',
    email: 'mailto:roniiskan0409@gmail.com',
    web: '',
  },
  {
    nama: 'M Reza Maulana A',
    jabatan: 'Chief Operational Officer',
    foto: reza,
    whatsapp: 'https://wa.me/6285720705717',
    instagram: 'https://www.instagram.com/rezamaulard/',
    email: 'mailto:rezamaulana1327.rm@gmail.com',
    web: '',
  },
  {
    nama: 'Ade Rohimat',
    jabatan: 'Chief Marketing Officer',
    foto: ade,
    whatsapp: 'https://wa.me/6287773148887',
    twitter: 'https://www.twitter.com/darsan_ari',
    instagram: 'https://www.instagram.com/ari_darsan/',
    email: 'mailto:aderohimat163@gmail.com',
    web: '',
  },
  {
    nama: 'Muchamad Ahmad M',
    jabatan: 'Chief Technology Officer',
    foto: ahmad,
    whatsapp: 'https://wa.me/6285770002426',
    instagram: 'https://www.instagram.com/mucheahmad/',
    email: 'mailto:@gmail.com',
    web: '',
  },
  {
    nama: 'Ari Darsan',
    jabatan: 'Manager DMD & Web Developer',
    foto: ari,
    whatsapp: 'https://wa.me/6281222288153',
    instagram: 'https://www.instagram.com/ari_darsan/',
    email: 'mailto:aridarsan09@gmail.com',
    web: 'https://aridarsan.me',
  },
];

const Direksi = () => {
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
                Tim Japri
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
              Inilah orang-orang dibalik Japri Corporation
            </p>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          {tim.map((item, index) => (
            <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
              <Card
                style={{
                  padding: '2rem',
                  backgroundColor: '#F7DA64',
                  borderRadius: '0',
                }}
              >
                <CardContent>
                  <Grid
                    container
                    spacing={4}
                    justify='center'
                    alignItems='center'
                  >
                    <Grid item xs={4} md={12} lg={12} style={{ padding: 0 }}>
                      <Grid container justify='center'>
                        <img
                          src={item.foto}
                          alt='direksi'
                          width='80%'
                          style={{ borderRadius: '100%' }}
                        />
                      </Grid>
                    </Grid>
                    <Grid item xs={8} md={12} lg={12} style={{ padding: 0 }}>
                      <h4
                        className='direksi'
                        style={{ margin: '1rem 0', textAlign: 'center' }}
                      >
                        {item.nama}
                      </h4>

                      <h6 className='direksi' style={{ textAlign: 'center' }}>
                        {item.jabatan}
                      </h6>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
              <div
                style={{
                  padding: '1rem',
                  backgroundColor: '#0895CA',
                  color: '#ffff',
                }}
              >
                <h5
                  style={{
                    marginBottom: 0,
                    color: '#ffff',
                    textAlign: 'center',
                  }}
                >
                  <a href={item.whatsapp} target="_blank" rel="noreferrer">
                    {' '}
                    <WhatsAppIcon className='icon-direksi' />{' '}
                  </a>
                  <a href={item.instagram} target="_blank" rel="noreferrer">
                    {' '}
                    <InstagramIcon className='icon-direksi' />{' '}
                  </a>
                  <a href={item.email} target="_blank" rel="noreferrer">
                    {' '}
                    <MailOutlineIcon className='icon-direksi' />{' '}
                  </a>
                  <a href={item.web} target="_blank" rel="noreferrer">
                    {' '}
                    <LanguageIcon
                      className='icon-direksi'
                      style={{
                        display: item.web !== '' ? '' : 'none',
                      }}
                    />{' '}
                  </a>
                </h5>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};
export default Direksi;
