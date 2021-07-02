import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { CopyrightOutlined, LocationOnOutlined } from '@material-ui/icons';
import japri from '../Images/japri.png';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import print from '../Images/footer/print.svg';
import percetakan from '../Images/footer/percetakan.svg';
import konveksi from '../Images/footer/konveksi.svg';
import wisuda from '../Images/footer/wisuda.svg';
import referensi from '../Images/footer/referensi.svg';
import service from '../Images/footer/service.svg';

const produk = [print, percetakan, konveksi, wisuda, referensi, service];

const Footer = () => {
  return (
    <React.Fragment>
      <div
        style={{
          backgroundColor: '#0895CA',
          marginTop: '4rem',
          padding: '2rem 0',
          color: '#ffff',
        }}
      >
        <Container maxWidth='lg'>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6} lg={4}>
              <img src={japri} alt='japri logo' width='30%' />
              <h5 style={{ color: '#ffff', marginTop: '1rem' }}>Alamat</h5>
              <p>
                <LocationOnOutlined /> Gg. Macan II, Kel Kahuripan, Kecamatan Tawang
                Kota Tasikmalaya
              </p>
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              <h5 style={{ color: '#ffff' }}>Media Sosial</h5>
              <p>
                <WhatsAppIcon /> 08992021306
              </p>
              <p>
                <InstagramIcon /> japricorp
              </p>
              <p>
                <MailOutlineIcon /> japri.corporation@gmail.com
              </p>
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              <h4 style={{ color: '#ffff' }}>Semua Produk</h4>
              <Grid container spacing={2}>
                {produk.map((item, index) => (
                  <Grid item xs={3} md={3} lg={3} key={index}>
                    <a href='#produk'>
                      <img src={item} alt='produk' width='100%' />
                    </a>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>

      <div style={{ backgroundColor: '#F7DA64' }}>
        
        <Container maxWidth='lg'>
          <p style={{ textAlign: 'center', padding: "1rem 0", margin: "0" }}>
            Copyright <CopyrightOutlined/> 2021. All right reserved. Powered by Japri
          </p>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Footer;
