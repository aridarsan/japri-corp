import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  Container,
  IconButton,
} from '@material-ui/core';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LanguageIcon from '@material-ui/icons/Language';

import wanda from '../Images/direksi/wanda.png';
import ari from '../Images/direksi/ari.png';
import reza from '../Images/direksi/reza.png';
// import roni from '../Images/direksi/roni.png';
// import ade from '../Images/direksi/ade.png';
// import wanda from '../Images/direksi/roni.png';
// import alam from '../Images/direksi/alam.png';
import widi from '../Images/direksi/widi.png';
// import zacky from '../Images/direksi/zacky.png';
// import asikin from '../Images/direksi/asikin.png';

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
    nama: 'M Reza Maulana',
    jabatan: 'Chief Operational Officer',
    foto: reza,
    whatsapp: 'https://wa.me/6285720705717',
    instagram: 'https://www.instagram.com/rezamaulard/',
    email: 'mailto:rezamaulana1327.rm@gmail.com',
    web: '',
  },
  {
    nama: 'Ari Darsan',
    jabatan: 'Web Developer',
    foto: ari,
    whatsapp: 'https://wa.me/6281222288153',
    instagram: 'https://www.instagram.com/ari_darsan/',
    email: 'mailto:aridarsan09@gmail.com',
    web: 'https://aridarsan.netlify.app',
  },
  // {
  //   nama: 'Roni Iskandar',
  //   jabatan: 'Chief Financial Officer',
  //   foto: roni,
  //   whatsapp: 'https://wa.me/6281222651518',
  //   instagram: 'https://www.instagram.com/roni_iskan/',
  //   email: 'mailto:roniiskan0409@gmail.com',
  //   web: '',
  // },
  // {
  //   nama: 'Ade Rohimat',
  //   jabatan: 'Chief Marketing Officer',
  //   foto: ade,
  //   whatsapp: 'https://wa.me/6287773148887',
  //   instagram: 'https://www.instagram.com/aderohimat62/',
  //   email: 'mailto:aderohimat163@gmail.com',
  //   web: '',
  // },
  // {
  //   nama: 'Muchamad Ahmad M',
  //   jabatan: 'Digital Marketing dan Desain',
  //   foto: ahmad,
  //   whatsapp: 'https://wa.me/6285770002426',
  //   instagram: 'https://www.instagram.com/mucheahmad/',
  //   email: 'mailto:@gmail.com',
  //   web: '',
  // },
  // {
  //   nama: 'Rizky M. Asikin',
  //   jabatan: 'General Manager',
  //   foto: asikin,
  //   whatsapp: 'https://wa.me/6285161060648',
  //   instagram: 'https://www.instagram.com/rzkyaskn',
  //   email: 'mailto:rizky.asikin123@gmail.com',
  //   web: '',
  // },
  // {
  //   nama: 'Alam Dewa S',
  //   jabatan: 'Manager Financial',
  //   foto: alam,
  //   whatsapp: 'https://wa.me/6285794673613',
  //   instagram: 'https://www.instagram.com/alamdewa26_',
  //   email: 'mailto:dewalam26@gmail.com',
  //   web: '',
  // },
  {
    nama: 'Widhi Hatmoko',
    jabatan: 'Manager DMD',
    foto: widi,
    whatsapp: 'https://wa.me/62899664423566',
    instagram: 'https://www.instagram.com/folklurs',
    email: 'mailto:hatmokowidhi@hotmail.com',
    web: '',
  },
  // {
  //   nama: 'Zacky Ahmad N',
  //   jabatan: 'Manager Operasional',
  //   foto: zacky,
  //   whatsapp: 'https://wa.me/6287881574771',
  //   instagram: 'https://www.instagram.com/',
  //   email: 'mailto:zackynopal40@gmail.com',
  //   web: '',
  // },
];

const Direksi = () => {
  return (
    <React.Fragment>
      <Container maxWidth='lg'>
        <Grid container>
          <Grid item xs={12}>
            <h3 className='heading3'>
              <span className='borderBottom'>Tim Japri</span>
            </h3>

            <p className='pjudul'>
              Inilah orang-orang dibalik Japri Corporation
            </p>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          {tim.map((item, index) => (
            <Grid item xs={12} sm={6} md={6} lg={3} key={index}>
              <Card
                style={{
                  padding: '2rem',
                  paddingBottom: '0',
                  backgroundColor: '#F9B200',
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

                      <p
                        className='direksi'
                        style={{ textAlign: 'center', color: '#4f4f4f' }}
                      >
                        {item.jabatan}
                      </p>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
              <div
                style={{
                  padding: '.5rem',
                  backgroundColor: '#0094F4',
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
                  <a href={item.whatsapp} target='_blank' rel="noopener noreferrer">
                    {' '}
                    <IconButton className='icon-btn'>
                      {' '}
                      <WhatsAppIcon className='icon-direksi' />
                    </IconButton>{' '}
                  </a>
                  <a href={item.instagram} target='_blank' rel="noopener noreferrer">
                    {' '}
                    <IconButton className='icon-btn'>
                      {' '}
                      <InstagramIcon className='icon-direksi' />
                    </IconButton>{' '}
                  </a>
                  <a href={item.email} target='_blank' rel="noopener noreferrer">
                    {' '}
                    <IconButton className='icon-btn'>
                      {' '}
                      <MailOutlineIcon className='icon-direksi' />
                    </IconButton>{' '}
                  </a>
                  <a href={item.web} target='_blank' rel="noopener noreferrer">
                    {' '}
                    <IconButton
                      className='icon-btn'
                      style={{
                        display: item.web !== '' ? '' : 'none',
                      }}
                    >
                      {' '}
                      <LanguageIcon
                        className='icon-direksi'
                        style={{
                          display: item.web !== '' ? '' : 'none',
                        }}
                      />
                    </IconButton>{' '}
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
