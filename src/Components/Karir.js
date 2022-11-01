import React from 'react';
import {
  Grid,
  Container,
  Button,
  // Accordion,
  // AccordionDetails,
  // AccordionSummary,
} from '@material-ui/core';
import oprec from '../Images/cro 22.jpg';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// const Detail = [
//   {
//     panel: 'panel1',
//     aria: 'panel1bh-content',
//     id: 'panel1bh-header',
//     tanya: 'Financial Manager',
//     jawab: [
//       'Paham dan mengerti dasar akuntansi',
//       'Paham tentang laporan keuangan',
//       'Menguasai Microsoft office (word, excel, power point)',
//       'Siap bekerja dalam tekanan',
//       'Siap bertanggung jawab dan berkomitmen',
//     ],
//   },
//   {
//     panel: 'panel2',
//     aria: 'panel2bh-content',
//     id: 'panel2bh-header',
//     tanya: 'Marketing Manager',
//     jawab: [
//       'Memahami dasar-dasar marketing',
//       'Komunikasi level up',
//       'Berani mengambil resiko',
//       'Tidak pemalu',
//       'Siap berkomitmen aktif di Japri',
//       'Memiliki tekad yang kuat',
//     ],
//   },
//   {
//     panel: 'panel3',
//     aria: 'panel3bh-content',
//     id: 'panel3bh-header',
//     tanya: 'Operational Manager',
//     jawab: [
//       'Siap berkomitmen aktif di Japri',
//       'Jujur dan bertanggung jawab',
//       'Menguasai Microsoft office (word, excel, power point)',
//       'Mampu mengelola persediaan barang',
//       'Siap bekerja everytime dan dibawah tekanan',
//     ],
//   },
//   {
//     panel: 'panel4',
//     aria: 'panel4bh-content',
//     id: 'panel4bh-header',
//     tanya: 'Digital Marketing dan Design Manager',
//     jawab: [
//       'Memahami dan dapat mengaplikasikan software design grafis (corel draw/Adobe Illustarator)',
//       'Memahami dan dapat mengaplikasikan software editing  (Adobe Premiere dll)',
//       'Siap bekerja everytime, everywhere and under pressure',
//     ],
//   },
// ];

const Karier = () => {
  // const [expanded, setExpanded] = React.useState(false);

  // const handleChange = (panel) => (event, isExpanded) => {
  //   setExpanded(isExpanded ? panel : false);
  // };

  return (
    <React.Fragment>
      <Container maxWidth='lg' style={{ marginTop: '5rem' }}>
        <Grid container>
          <Grid item xs={12}>
            <h3 className='heading3'>
              <span className='borderBottom'>Open Recruitment</span>
            </h3>

            <p className='pjudul'>Bergabunglah bersama kami</p>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <img src={oprec} width='100%' alt='oprec' />
          </Grid>
        </Grid>

        <br />

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h4>WE ARE HIRING CUSTOMER RELATION OFFICER (CRO) JAPRI CORP</h4>

            <p>
            JAPRI Corp merupakan Start up mahasiswa yang sedang berkembang di wilayah priangan timur mengajak kamu masuk menjadi bagian dari kami
            </p>

            <p>
              {' '}
              POSISI
            </p>

            {/* <ul>
              <li>Financial Manager</li>
              <li>Marketing Manager</li>
              <li>Operational Manager</li>
              <li>Digital Marketing dan Design Manager</li>
            </ul> */}

            <h5>Customer Relation Officer (CRO)</h5>

            <p>dengan kualifikasi sebagai berikut:</p>

            {/* <h5> Syarat Umum</h5> */}

            <ol>
              <li> Mahasiswa/i Angkatan 2019</li>
              <li> Berasal dari kampus UNSIL, UNPER, UPI, BTH, POLTEKKES, STAI, STIA, dan UMTAS</li>
              <li> Memiliki Keinginan untuk belajar dan berprogres</li>
              <li> Berkomitmen </li>
              <li> Mengisi formulir pada link pendaftaran yang tersedia</li>
              <li> Berkeinginan untuk menambah uang saku</li>
              <li> Aktif bersosial media.</li>
              {/* <li>
                {' '}
                Follow account sosial media japri (Instagram{' '}
                <a
                  href='https://www.instagram.com/japricorp/'
                  target='_blank'
                  rel='noreferrer'
                  style={{ textDecoration: 'none' }}
                >
                  @japricorp
                </a>
                ) lalu screenshot{' '}
              </li>
              <li>
                {' '}
                Sebarluaskan pamplet{' '}
                <a
                  href={oprec}
                  target='_blank'
                  rel='noreferrer'
                  style={{ textDecoration: 'none' }}
                >
                  ini
                </a>{' '}
                ke 3 group whatsapp lalu screenshot{' '}
              </li>
              <li> Upload screenshot ke link pendaftaran </li> */}
            </ol>

            {/* <h5> Syarat Khusus</h5>

            <Grid item xs={12}>
              {Detail.map((item, index) => (
                <Accordion
                  expanded={expanded === item.panel}
                  onChange={handleChange(item.panel)}
                  style={{ borderRadius: '0px', border: '2px solid #0094F4' }}
                  key={index}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: '#0094F4' }} />}
                    aria-controls={item.aria}
                    id={item.id}
                  >
                    <h6 style={{ margin: 0, lineHeight: '1.5' }}>
                      {item.tanya}
                    </h6>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ol>
                      {item.jawab.map((detail, index) => (
                        <li>
                          <p style={{ margin: 0 }} key={index}>
                            {detail}
                          </p>
                        </li>
                      ))}
                    </ol>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Grid> */}

            {/* <br /> */}

            {/* <h5> Ketentuan Umum</h5>
            <ol>
              <li> Beriman dan bertaqwa kepada Tuhan YME</li>
              <li> Berjiwa wirausaha dan mau belajar berwirausaha </li>
            </ol> */}
            {/* <p>
              Apa sih yang akan kamu dapatkan ketika terpilih menjadi CRO di
              Japri Corp? Tentu kamu nanti akan mendapatkan:
            </p>

            <ol>
              <li>Uang ratusan ribu rupiah</li>
              <li>Mentoring bisnis</li>
              <li>Menambah relasi</li>
              <li>Mendapatkan sertifikat</li>
              <li>Mendapatkan diskon print up to 50%</li>
            </ol> */}

            <p>
              Apabila kamu berminat dan memenuhi kualifikasi diatas, silakan klik
              gabung
            </p>

            <a
              href='https://bit.ly/PendaftaranCRO2022'
              target='_blank'
              rel="noopener noreferrer"
            >
              <Button
                variant='contained'
                className='btn-submit'
                size='medium'
                style={{ marginBottom: '1rem' }}
              >
                Gabung menjadi CRO
              </Button>
            </a>

            <h5>Waktu pendaftaran:</h5>
            <p>Selasa, 1 November 2022 s/d Sabtu, 12 November 2022</p>

            {/* <h5> Seleksi berkas:</h5>
            <p>Kamis, 16 Desember 2021</p>

            <h5> Pengumuman:</h5>
            <p>Jumat, 17 Desember 2021</p> */}
            <p>Don't miss it..</p>

            <h5>JAPRI CORP</h5>
            <h5>Bisnisnya Mahasiswa</h5>

            <p>
              Pendaftaran terbuka untuk mahasiswa umum yang kuliah di
              Tasikmalaya. Jadi tunggu apalagi mari bergabung bersama kami untuk menjadi wirausaha
              muda!! dan jangan lupa terus pantau media sosial Japri untuk mendapatkan informasi terbaru.
            </p>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Karier;
