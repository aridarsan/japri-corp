import React from 'react';
import { Grid, Container } from '@material-ui/core';
import { Done } from '@material-ui/icons';
import pemberdayaan from '../Images/ilustrasi/pemberdayaan.svg';

const Pemberdayaan = () => {
  return (
    <React.Fragment>
      <div
        style={{
          backgroundColor: '#F7DA64',
          marginTop: '4rem',
          padding: '2rem 0',
        }}
      >
        <Container maxWidth='lg'>
          <Grid container>
            <Grid item xs={12}>
              <h3 className="heading3"
              >
                <span
                  className='borderBottom'
                >
                  Pemberdayaan
                </span>
              </h3>

              <p className="pjudul"
              >
                Lahirnya Japri Corporation karena dilatar belakangi keinginan
                untuk memberdayakan mahasiswa
              </p>
            </Grid>
          </Grid>

          <Grid container spacing={4} mt={2}>
            <Grid item xs={12} md={6} lg={6}>
              <h3
                style={{
                  borderLeft: '0.25rem  solid #0895CA',
                  paddingLeft: '1rem',
                }}
              >
                {' '}
                Customer Relation Officer (CRO)
              </h3>
              <p>
                CRO merupakan bagian dari Japri yang akan mendapatkan komisi
                dengan melaksanakan beberapa tugas yang diberikan seperti:
              </p>
              <p>
                <Done style={{ color: '#0895CA' }} /> Membagikan poster atau
                pamflet promosi ke berbagai grup
              </p>
              <p>
                <Done style={{ color: '#0895CA' }} /> Mengajak mahasiswa untuk
                membeli paket print skripsi
              </p>
              <p>
                <Done style={{ color: '#0895CA' }} /> Mengajak mahasiswa untuk
                membeli produk Japri Wisuda
              </p>
              <br />
              <h3
                style={{
                  borderLeft: '0.25rem solid #0895CA',
                  paddingLeft: '1rem',
                }}
              >
                {' '}
                Crew
              </h3>
              <p>
                Bisnis yang baik ialah bisnis yang tidak hanya memperkaya
                perusahaannya sendiri namun bisnis yang baik haruslah mempunyai
                "Noble purpose". Pemberdayaan mahasiswa menjadi tujuan mulia
                mengapa Japri saat ini masih survive dengan berbagai persaingan
                dan tantangan yang dihadapi.
              </p>
              <p>
                Pemberdayaan mahasiswa yang disebut dengan "Crew" dijadikan
                sales force (tenaga penjual) dalam rangka memotivasi jiwa
                wirausaha dan sarana memperluas pasar, yang tidak lain merupakan
                keunggulan dari Japri Corporation.
              </p>
            </Grid>

            <Grid item xs={12} md={6} lg={6}>
              <img src={pemberdayaan} alt='pemberdayaan' width='100%' />
            </Grid>
          </Grid>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Pemberdayaan;
