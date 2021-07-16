import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardContent, Container, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '1rem',
    borderRadius: 0,
  },
}));

const sejarah = [
  {
    fase: "Fase 1",
    text: "Japri Corporation didirikan pada tanggal 14 Maret 2016 oleh beberapa orang mahasiswa bidikmisi yang peka melihat peluang bisnis bidang jasa di Unsil."
  },
    {
    fase: "Fase 2",
    text: "Pada awalnya Japri Corporation hanya memiliki satu macam produk, namun lambat laun melihat peluang dilapangan, Japri Corp pun mulai melakukan disversifikasi produk menjadi 6 produk."
  },
    {
    fase: "Fase 3",
    text: "Japri sadar bahwa Bisnis yang baik adalah bisnis yang memiliki noble purpose (Tujuan Mulia) yaitu Menjadikan Japri Corp menjadi tempat bertransaksi online yang unikberbasis pemberdayaan mahasiswa agar berdampak bagi masyarakat."
  },
    {
    fase: "Fase 4",
    text: "Japri Corp memberdayakan crew diberbagai jurusan sebagai sales force (garda Terdepan) dalam strategi marketing yang dijalankan. Bertujuan untuk memupuk, melatih serta membangun jiwa wirausaha bagi mahasiswa."
  },
    {
    fase: "Fase 5",
    text: "Japri Corp turut membantu mengharumkan kampus yang menjadi tonggak sejarah berdirinya plaform satrtup berbasis pemberdayaan mahasiswa yakni kampus Universitas Siliwangi pada tingkat Nasional. Terbukti dengan 5 kali juara diberbagai lomba Business Plan. Dan menjadi salah satu bisnis penyumbang piala terbanyak bagi unsil."
  },
]

const Japri = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container maxWidth='lg' style={{ marginTop: '5rem' }}>
        <Grid container>
          <Grid item xs={12}>
            <h3 className="heading3"
            >
              <span
                className='borderBottom'
              >
                Tentang Japri
              </span>
            </h3>

            <p className="pjudul"
            >
              Latar beridirinya sebuah start up yang bernama Jasa Prima
              Corporation
            </p>
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          <Grid item xs={12} md={12} lg={12}>
            <Card className="tentang" style={{ backgroundColor: '#F7DA64' }}>
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
                  Japri Selaku startup platform multifungsi, ingin menjadi
                  solusi bagi mahasiswa dalam pemenuhan kebutuhannya. Aktifitas
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
          </Grid>
          <Grid container justify="center">
            <h4 style={{ textAlign: 'center', margin: "2rem" }}>
                Sejarah Jasa Prima Corporation
            </h4>
          </Grid>
          <Grid container spacing={2} justify="center">
          {sejarah.map((item, index) => (
            <Grid item xs={12} md={6} lg={6} key={index}>
              <Paper elevation={1} className={classes.paper} style={{minHeight: "10rem", border: "2px solid #0895CA"}}>
                <h5>{item.fase}</h5>
                <small>
                  {item.text}
                </small>
              </Paper>
            </Grid>
            ))}
          </Grid>
      </Container>
    </React.Fragment>
  );
};
export default Japri;
