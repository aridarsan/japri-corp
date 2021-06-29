import React from 'react';
import { Grid, Card, CardContent, Container } from '@material-ui/core';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LanguageIcon from '@material-ui/icons/Language';
import kotak from '../Images/kotak.svg';
import { Twitter } from '@material-ui/icons';

const tim = [
  {
    nama: 'Wanda Lugina',
    jabatan: 'Chief Executive Officer',
    foto: kotak,
    whatsapp: '/',
    twitter: '/',
    instagram: '/',
    email: '/',
    web: ""
  },
  {
    nama: 'Roni Iskandar',
    jabatan: 'Chief Financial Officer',
    foto: kotak,
    whatsapp: '/',
    twitter: '/',
    instagram: '/',
    email: '/',
    web: ""
  },
  {
    nama: 'M Reza Maulana A',
    jabatan: 'Chief Operational Officer',
    foto: kotak,
    whatsapp: '/',
    twitter: '/',
    instagram: '/',
    email: '/',
    web: ""
  },
  {
    nama: 'Ade Rohimat',
    jabatan: 'Chief Marketing Officer',
    foto: kotak,
    whatsapp: '/',
    twitter: '/',
    instagram: '/',
    email: '/',
    web: ""
  },
  {
    nama: 'Muchamad Ahmad M',
    jabatan: 'Chief Technology Officer',
    foto: kotak,
    whatsapp: '/',
    twitter: '/',
    instagram: '/',
    email: '/',
    web: ""
  },
  {
    nama: 'Ari Darsan',
    jabatan: 'Manager DMD & Web Developer',
    foto: kotak,
    whatsapp: '/',
    twitter: '/',
    instagram: '/',
    email: '/',
    web: "https://aridarsan.xyz"
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

        <Grid container spacing={4}>
          {tim.map((item, index) => (
            <Grid item xs={12} md={4} lg={4} key={index}>
              <Card style={{ padding: '2rem', backgroundColor: '#F7DA64' }}>
                <CardContent>
                  <Grid
                    container
                    spacing={4}
                    justify='center'
                    alignItems='center'
                  >
                    <img
                      src={kotak}
                      alt='direksi'
                      width='200px'
                      style={{ borderRadius: '100%' }}
                    />
                    <h4 style={{ margin: '1rem 0', textAlign: 'center' }}>
                      {item.nama}
                    </h4>
                    <h6 style={{ textAlign: 'center' }}>
                      {item.jabatan}
                    </h6>
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
                  <a href={item.web} >
                    {' '}
                    <LanguageIcon
                      style={{
                        color: '#ffff',
                        textDecoration: 'none',
                        margin: '.5rem',
                        display: item.web !== "" ? "" : "none",
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
