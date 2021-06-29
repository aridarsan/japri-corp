import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import ReceiptIcon from '@material-ui/icons/Receipt';
import Paper from '@material-ui/core/Paper';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import { Grid, Container } from '@material-ui/core';
// import carapesan from '../Images/cara pesan.svg';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '1rem',
    borderRadius: 0
  }
}));

const CaraPesan = () => {
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
                Tata Cara Pesan
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
              Berikut alur transaksi yang dapat dilakukan untuk memesan atau
              bertransaksi di Japri
            </p>
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          <Grid item xs={12} md={12} lg={12}>

            <Timeline align="alternate" style={{fontFamily: "Montserrat"}}>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="primary">
                    <InsertDriveFileIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} className={classes.paper}>
                    <h5>
                      Persiapan
                    </h5>
                    <small>Persiapkan semua kebutuhan untuk transaksi seperti dokumen, desain, laptop dan catatan atau tambahan saat order</small>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color='primary'>
                    <QuestionAnswerIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} className={classes.paper}>
                    <h5>
                      Diskusi
                    </h5>
                    <small>Hubungi crew atau ke Operator Japri 08992021306, untuk menanyakan kesiapan atau apa saja yang akan dibutuhkan dalam pesanan yang akan dilakukan. Konsumen bisa datang langsung ke kantor Japri bila perlu.</small>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color='primary'>
                    <AutorenewIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} className={classes.paper}>
                    <h5>
                      Proses
                    </h5>
                    <small>Setelah mendapatkan kesepakatan untuk bertransaksi, konsumen mengirimkan file desain atau dokumen yang dibutuhkan untuk melalui proses pencetakan atau pengerjaan. Khusu untuk pesanan Japri Konveksi harus membayar DP minimal 50% sebelum pengerjaan.</small>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color='primary'>
                    <ReceiptIcon />
                  </TimelineDot>
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} className={classes.paper}>
                    <h5>
                      Pembayaran dan Pengiriman
                    </h5>
                    <small>Setelah pesanan selesai diproses, maka Japri akan mengantar pesanan ke konsumen atau konsumen yang akan datang ke kantor Japri untuk sekalian melakukan pembayaran baik secara cash atau cashless</small>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Grid>

          {/* <Grid item xs={12} md={6} lg={6}>
            <img src={carapesan} alt='masukan' width='100%' />
          </Grid> */}
        </Grid>
      </Container>
    </React.Fragment>
  );
};
export default CaraPesan;
