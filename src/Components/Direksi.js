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
import bayu from '../Images/direksi/bayu.png';
import riski from '../Images/direksi/riski.png';
import wildan from '../Images/direksi/wildan.png';
import fauzi from '../Images/direksi/fauzi.png';
import andika from '../Images/direksi/andika.png';
import dilardi from '../Images/direksi/dilardi.png';

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
  {
    nama: 'Bayu Maulana N',
    jabatan: 'Manager Operasional',
    foto: bayu,
    whatsapp: 'https://wa.me/6288220601323',
    instagram: 'https://www.instagram.com/',
    email: 'mailto:japri.corporation@gmail.com',
    web: '',
  },
  {
    nama: 'Fauzi Alfauzan',
    jabatan: 'Staff Operasional',
    foto: fauzi,
    whatsapp: 'https://wa.me/6285156136737',
    instagram: 'https://www.instagram.com/',
    email: 'mailto:japri.corporation@gmail.com',
    web: '',
  },
  {
    nama: 'Andika Jaya P',
    jabatan: 'Staff Sales dan Marketing',
    foto: andika,
    whatsapp: 'https://wa.me/6282315164636',
    instagram: 'https://www.instagram.com/',
    email: 'mailto:japri.corporation@gmail.com',
    web: '',
  },
  {
    nama: 'Riski Nuragung',
    jabatan: 'Staff Keuangan',
    foto: riski,
    whatsapp: 'https://wa.me/6285156869066',
    instagram: 'https://www.instagram.com/',
    email: 'mailto:japri.corporation@gmail.com',
    web: '',
  },
  {
    nama: 'Wildan Anshori',
    jabatan: 'Staff Operasional',
    foto: wildan,
    whatsapp: 'https://wa.me/6289508064037',
    instagram: 'https://www.instagram.com/',
    email: 'mailto:japri.corporation@gmail.com',
    web: '',
  },
  {
    nama: 'Dilardi Ramadhan',
    jabatan: 'Digital Marketing',
    foto: dilardi,
    whatsapp: 'https://wa.me/6283824806906',
    instagram: 'https://www.instagram.com/',
    email: ' ',
    web: '',
  },
  // {
  //   nama: 'Ade Rohimat',
  //   jabatan: 'Chief Marketing Officer',
  //   foto: ade,
  //   whatsapp: 'https://wa.me/6287773148887',
  //   instagram: 'https://www.instagram.com/aderohimat62/',
  //   email: 'mailto:aderohimat163@gmail.com',
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
                      <InstagramIcon className='icon-direksi' style={{
                        display: item.instagram !== '' ? '' : 'none',
                      }}/>
                    </IconButton>{' '}
                  </a>
                  <a href={item.email} target='_blank' rel="noopener noreferrer">
                    {' '}
                    <IconButton className='icon-btn'>
                      {' '}
                      <MailOutlineIcon className='icon-direksi' style={{
                        display: item.email !== '' ? '' : 'none',
                      }} />
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
