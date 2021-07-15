import React from 'react';
import { Grid, Container } from '@material-ui/core';
import galeri1 from "../Images/galeri/galeri1.png"
import galeri2 from "../Images/galeri/galeri2.png"
import galeri3 from "../Images/galeri/galeri3.png"
import galeri4 from "../Images/galeri/galeri4.png"
import galeri5 from "../Images/galeri/galeri5.png"
import galeri6 from "../Images/galeri/galeri6.png"

const galeri = [
  {
    image: galeri1,
  },
  {
    image: galeri2,
  },
  {
    image: galeri3,
  },
  {
    image: galeri4,
  },
  {
    image: galeri5,
  },
  {
    image: galeri6,
  },
];

const Galeri = () => {
  return (
    <React.Fragment>
      <Container maxWidth='lg'>
        <Grid container>
          <Grid item xs={12}>
            <h3 className="heading3"
            >
              <span
                className='borderBottom'
              >
                Galeri
              </span>
            </h3>

            <p className="pjudul"
            >
              Banyak kegiatan yang sudah kami laksanakan dalam rangka
              mengembangkan Japri dan memberdayakan mahasiswa
            </p>
          </Grid>
        </Grid>

        <Grid container spacing={2} justify='center'>
          {galeri.map((item, index) => (
            <Grid item xs={3} sm={3} md={3} lg={2} key={index}>
              <img
                src={item.image}
                alt='galeri'
                width='100%'
                style={{ marginBottom: '2rem' }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Galeri;
