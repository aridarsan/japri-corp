import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardContent, Container, Paper } from '@material-ui/core';
import japri from '../Images/kotak.svg';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '1rem 2rem',
    borderRadius: 0,
  },
}));

const Japri = () => {
  const classes = useStyles();
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
                Tentang Japri
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
              Latar beridirinya sebuah start up yang bernama Jasa Prima
              Corporation
            </p>
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          <Grid item xs={12} md={12} lg={12}>
            <img src={japri} alt='masukan' width='100%' />

            <Card style={{ backgroundColor: '#F7DA64', marginTop: '2rem' }}>
              <CardContent>
                <h4>Sekilas Japri</h4>

                <p>
                  Era disruptif berkembang begitru dinamis ditengah-tengah
                  masyarakat. Teknologi telah menghendaki hubungan sosial yang
                  lebih aksesibel dan cepat. Manusia saat ini merupakan manusia
                  yang efektif dan efesien. Tidak butuh banyak waktu dan tenaga
                  lagi buat berkarya. Sehingga bagaimana caranya keberlanjutan
                  inovasi disrupsi ini terus eksis?
                </p>
                <p>
                  Japri Selaku startup platform multifungs, ingin menjadi solusi
                  bagi mahasiswa dalam pemenuhan kebutuhannya. Aktifitas
                  tersebut teroptimasi dengan tersedianya Kru-kru japri di
                  setiap ceruk pasar kampus. Dengannya, Japri mengusung ide
                  'Pemberdayaan Manusia'. Pemberdayaan secara ekonomi yang
                  diharapkan mampu memberikan akses pembelajaran kewirausahaan
                  secara kualitatif, dan mendapatkan extra money secara
                  kuantitatif. Dengan demikian, platform Japri ini mampu
                  memudahkan mahasiswa yang pada saat bersamaan memberdayakan
                  mahasiswa sehingga Japri mampu berdampak secara signifikan
                  bukan hanya kepada mahasiswa namun juga terhadap perekonomian
                  bangsa.
                </p>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
            <h4 style={{ textAlign: 'center' }}>
              Sejarah Jasa Prima Corporation
            </h4>
            <Timeline align='alternate' style={{ fontFamily: 'Montserrat' }}>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color='primary'></TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} className={classes.paper}>
                    <h5>Fase 1</h5>
                    <small>
                      Japri Corporation didirikan pada tahun 14 Maret 2016 oleh
                      beberapa orang mahasiswa bidikmisi yang peka melihat
                      peluang bisnis bidang jasa di Unsil
                    </small>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color='primary'></TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} className={classes.paper}>
                    <h5>Fase 2</h5>
                    <small>
                      Pada awalnya Japri Corporation hanya memiliki satu macam
                      produk, namun lambat laun melihat peluang dilapangan,
                      Japri Corp pun mulai melakukan disversifikasi produk
                      menjadi 6 produk, yaitu : Japri Print, Japri Book, Japri
                      Hadiah wisuda, Japri Service , Japri Percetakan, dan Japri
                      Konveksi.
                    </small>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color='primary'></TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} className={classes.paper}>
                    <h5>Fase 3</h5>
                    <small>
                      Japri sadar bahwa Bisnis yang baik adalah bisnis yang
                      memiliki noble purpose (Tujuan Mulia) yaitu Menjadikan
                      Japri Corp menjadi tempat bertransaksi online yang unik
                      berbasis pemberdayaan mahasiswa agar berdampak bagi
                      masyarakat.
                    </small>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color='primary'></TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} className={classes.paper}>
                    <h5>Fase 4</h5>
                    <small>
                      Japri Corp memberdayakan crew diberbagai jurusan sebagai
                      sales force (garda Terdepan) dalam strategi marketing yang
                      dijalankan. Bertujuan untuk memupuk, melatih serta
                      membangun jiwa wirausaha bagi mahasiswa
                    </small>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color='primary'></TimelineDot>
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} className={classes.paper}>
                    <h5>Fase 5</h5>
                    <small>
                      Japri Corp turut membantu mengharumkan kampus yang menjadi
                      tonggak sejarah berdirinya plaform satrtup berbasis
                      pemberdayaan mahasiswa yakni kampus Universitas Siliwangi
                      pada tingkat Nasional. Terbukti dengan 5 kali juara
                      diberbagai lomba Business Plan. Dan menjadi salah satu
                      bisnis penyumbang piala terbanyak bagi unsil.
                    </small>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};
export default Japri;
