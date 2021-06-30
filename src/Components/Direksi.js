import React from 'react';
import { Grid, Card, CardContent, Container } from '@material-ui/core';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LanguageIcon from '@material-ui/icons/Language';
import { Twitter } from '@material-ui/icons';
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
    whatsapp: '/',
    twitter: '/',
    instagram: '/',
    email: '/',
    web: '',
  },
  {
    nama: 'Roni Iskandar',
    jabatan: 'Chief Financial Officer',
    foto: roni,
    whatsapp: '/',
    twitter: '/',
    instagram: '/',
    email: '/',
    web: '',
  },
  {
    nama: 'M Reza Maulana A',
    jabatan: 'Chief Operational Officer',
    foto: reza,
    whatsapp: '/',
    twitter: '/',
    instagram: '/',
    email: '/',
    web: '',
  },
  {
    nama: 'Ade Rohimat',
    jabatan: 'Chief Marketing Officer',
    foto: ade,
    whatsapp: '/',
    twitter: '/',
    instagram: '/',
    email: '/',
    web: '',
  },
  {
    nama: 'Muchamad Ahmad M',
    jabatan: 'Chief Technology Officer',
    foto: ahmad,
    whatsapp: '/',
    twitter: '/',
    instagram: '/',
    email: '/',
    web: '',
  },
  {
    nama: 'Ari Darsan',
    jabatan: 'Manager DMD & Web Developer',
    foto: ari,
    whatsapp: '/',
    twitter: '/',
    instagram: '/',
    email: '/',
    web: 'https://aridarsan.xyz',
  },
];

const Direksi = () => {
  return (
    <React.Fragment>
      <Container maxWidth='lg' style={{ marginTop: '5rem' }}>
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
                Team Japri
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
            <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
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
                    <Grid item xs={4} lg={12} style={{ padding: 0 }}>
                      <Grid container justify='center'>
                        <img
                          src={item.foto}
                          alt='direksi'
                          width='80%'
                          style={{ borderRadius: '100%' }}
                        />
                      </Grid>
                    </Grid>
                    <Grid item xs={8} lg={12} style={{ padding: 0 }}>
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
                  <a href={item.whatsapp}>
                    {' '}
                    <WhatsAppIcon
                      style={{
                        color: '#ffff',
                        textDecoration: 'none',
                        margin: '.5rem',
                      }}
                    />{' '}
                  </a>
                  <a href={item.instagram}>
                    {' '}
                    <InstagramIcon
                      style={{
                        color: '#ffff',
                        textDecoration: 'none',
                        margin: '.5rem',
                      }}
                    />{' '}
                  </a>
                  <a href={item.twitter}>
                    {' '}
                    <Twitter
                      style={{
                        color: '#ffff',
                        textDecoration: 'none',
                        margin: '.5rem',
                      }}
                    />{' '}
                  </a>
                  <a href={item.email}>
                    {' '}
                    <MailOutlineIcon
                      style={{
                        color: '#ffff',
                        textDecoration: 'none',
                        margin: '.5rem',
                      }}
                    />{' '}
                  </a>
                  <a href={item.web}>
                    {' '}
                    <LanguageIcon
                      style={{
                        color: '#ffff',
                        textDecoration: 'none',
                        margin: '.5rem',
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
